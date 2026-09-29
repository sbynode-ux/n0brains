/**
 * src/scripts/billing.js — checkout/portal response classification (ops #225).
 *
 * Run with:  npm test      (node --test, no dependencies)
 *
 * The 409 case is the one that matters: POST /billing/checkout answers 409
 * (billing.AlreadySubscribed) when the account already holds an entitling
 * subscription. Before this module both call sites ignored the status and fell
 * back to `data.detail` / "Checkout failed", i.e. they invited the retry that
 * produced the 2026-09-04 double charge.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  classifyCheckoutResponse,
  classifyPortalResponse,
  ALREADY_SUBSCRIBED_MESSAGE,
  ALREADY_SUBSCRIBED_NOTICE,
  PORTAL_UNAVAILABLE_MESSAGE,
} from '../src/scripts/billing.js';

// The live 409 body, copied from intel api.py billing_checkout (prod HEAD 8c85433).
const LIVE_409_DETAIL =
  'You already have an active subscription. Manage it via ' +
  'POST /billing/portal — if the dashboard still shows Free, ' +
  'contact support rather than checking out again.';

test('happy path: 200 with a url is a redirect', () => {
  const out = classifyCheckoutResponse(200, { url: 'https://checkout.stripe.com/c/pay/cs_1' });
  assert.equal(out.kind, 'redirect');
  assert.equal(out.url, 'https://checkout.stripe.com/c/pay/cs_1');
});

test('409 is classified as already-subscribed, not as an error', () => {
  const out = classifyCheckoutResponse(409, { detail: LIVE_409_DETAIL });
  assert.equal(out.kind, 'already-subscribed');
  assert.equal(out.message, ALREADY_SUBSCRIBED_MESSAGE);
});

test('409 is keyed on the status code, not on the detail wording', () => {
  // The API could reword the detail at any time; the branch must survive it.
  const out = classifyCheckoutResponse(409, { detail: 'anything at all' });
  assert.equal(out.kind, 'already-subscribed');
  const noBody = classifyCheckoutResponse(409, null);
  assert.equal(noBody.kind, 'already-subscribed');
});

test('the already-subscribed copy never tells the user to try again', () => {
  for (const msg of [ALREADY_SUBSCRIBED_MESSAGE, ALREADY_SUBSCRIBED_NOTICE, PORTAL_UNAVAILABLE_MESSAGE]) {
    assert.match(msg, /already have an active Pro subscription/);
    assert.doesNotMatch(msg, /try again/i);
    assert.match(msg, /support@n0brains\.com/);
  }
});

test('other failures keep the API detail', () => {
  const out = classifyCheckoutResponse(400, { detail: 'Invalid price_id' });
  assert.equal(out.kind, 'error');
  assert.equal(out.message, 'Invalid price_id');
});

test('a failure with no detail falls back to the caller message', () => {
  assert.equal(classifyCheckoutResponse(500, {}).message, 'Checkout failed');
  assert.equal(classifyCheckoutResponse(500, null).message, 'Checkout failed');
  assert.equal(classifyCheckoutResponse(500, null, 'custom').message, 'custom');
});

test('an empty-string url is not a redirect', () => {
  const out = classifyCheckoutResponse(200, { url: '' });
  assert.equal(out.kind, 'error');
});

test('a non-string url is not a redirect', () => {
  const out = classifyCheckoutResponse(200, { url: { href: 'https://evil.example' } });
  assert.equal(out.kind, 'error');
});

test('portal: 200 with a url redirects', () => {
  const out = classifyPortalResponse(200, { url: 'https://billing.stripe.com/p/session/1' });
  assert.equal(out.kind, 'redirect');
  assert.equal(out.url, 'https://billing.stripe.com/p/session/1');
});

test('portal: a failure carries a message and never a url', () => {
  const out = classifyPortalResponse(500, { detail: 'boom' });
  assert.equal(out.kind, 'error');
  assert.equal(out.message, 'boom');
  assert.equal(out.url, undefined);
  assert.equal(classifyPortalResponse(500, null).message, 'Could not open billing portal');
});
