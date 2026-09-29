/**
 * Wiring guard (ops #225).
 *
 * src/scripts/billing.js can be perfectly correct and still not protect anyone
 * if a checkout call site stops using it. The Astro pages cannot be imported
 * here (they are components, not modules), so this asserts the wiring at the
 * source level: every place that POSTs to /billing/checkout must go through
 * classifyCheckoutResponse, and none of them may keep the old
 * `if (data.url) … else alert(detail)` shape that ignored the status code.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = new URL('../src/', import.meta.url).pathname;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.astro')) out.push(p);
  }
  return out;
}

// An actual client call, not the prose/JSON in the docs page: `fetch(...)` or
// the account page's `api(...)` helper with the path on the same line.
const CALL = /(?:fetch|api)\(\s*[`'"][^`'"\n]*\/billing\/checkout/;

const callSites = walk(SRC).filter((p) => CALL.test(readFileSync(p, 'utf8')));

test('the checkout call sites are the two we know about', () => {
  const rel = callSites.map((p) => p.slice(SRC.length)).sort();
  assert.deepEqual(rel, ['components/pages/Signup.astro', 'pages/account.astro']);
});

test('every checkout call site classifies the response', () => {
  for (const p of callSites) {
    const src = readFileSync(p, 'utf8');
    assert.ok(/classifyCheckoutResponse/.test(src), `${p} does not classify the checkout response`);
    assert.ok(/scripts\/billing\.js/.test(src), `${p} does not import the shared billing module`);
  }
});

test('no checkout call site still reads the body url without the status', () => {
  // Only the window right after a /billing/checkout POST — /billing/buy-credits
  // (one-time credit pack, no AlreadySubscribed path) legitimately still reads
  // data.url in account.astro.
  for (const p of callSites) {
    const src = readFileSync(p, 'utf8');
    let at = src.indexOf('/billing/checkout');
    while (at !== -1) {
      const window_ = src.slice(at, at + 600);
      assert.doesNotMatch(
        window_,
        /if \((?:checkoutData|data)\.url\)/,
        `${p} still branches on the checkout body alone`
      );
      at = src.indexOf('/billing/checkout', at + 1);
    }
  }
});
