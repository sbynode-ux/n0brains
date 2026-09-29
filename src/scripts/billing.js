/**
 * Shared handling of POST /billing/checkout responses (ops #225).
 *
 * The API answers 409 when the account already holds an entitling
 * subscription (billing.AlreadySubscribed). That guard was added on
 * 2026-09-04, after the first Pro customer was charged twice while the
 * dashboard still showed Free — so a second checkout on a live customer is a
 * double charge, not a retryable error.
 *
 * Both checkout call sites (the account page upgrade button and the
 * signup→checkout hand-off) used to ignore the status code entirely and fall
 * back to `data.detail` or a generic "Checkout failed", which invites exactly
 * the retry the 409 is refusing. They now share this classifier.
 *
 * Keyed on the status code, never on the detail text, so rewording the API
 * message cannot silently disarm it.
 */

export const ALREADY_SUBSCRIBED_MESSAGE =
  'You already have an active Pro subscription, so we did not start a second ' +
  'checkout. Opening your billing portal — if your plan still shows as Free ' +
  'after that, email support@n0brains.com rather than checking out again.';

/** Same fact, for a page that cannot open the portal for the user. */
export const ALREADY_SUBSCRIBED_NOTICE =
  'You already have an active Pro subscription, so we did not start a second ' +
  'checkout. Manage it under Billing in your account — if your plan still ' +
  'shows as Free there, email support@n0brains.com.';

export const PORTAL_UNAVAILABLE_MESSAGE =
  'You already have an active Pro subscription, but the billing portal could ' +
  'not be opened just now. Please email support@n0brains.com — do not start ' +
  'another checkout.';

/**
 * @param {number} status   HTTP status of the /billing/checkout response
 * @param {object|null} data parsed JSON body (may be null if it did not parse)
 * @param {string} fallback  message for an unclassified failure
 * @returns {{kind: 'already-subscribed'|'redirect'|'error', url?: string, message?: string}}
 */
export function classifyCheckoutResponse(status, data, fallback = 'Checkout failed') {
  if (status === 409) {
    return { kind: 'already-subscribed', message: ALREADY_SUBSCRIBED_MESSAGE };
  }
  const url = data && typeof data.url === 'string' && data.url ? data.url : null;
  if (url) {
    return { kind: 'redirect', url };
  }
  const detail = data && typeof data.detail === 'string' && data.detail ? data.detail : null;
  return { kind: 'error', message: detail || fallback };
}

/**
 * Same shape for POST /billing/portal, which has no 409 case.
 *
 * @param {number} status
 * @param {object|null} data
 * @param {string} fallback
 */
export function classifyPortalResponse(status, data, fallback = 'Could not open billing portal') {
  const url = data && typeof data.url === 'string' && data.url ? data.url : null;
  if (url) {
    return { kind: 'redirect', url };
  }
  const detail = data && typeof data.detail === 'string' && data.detail ? data.detail : null;
  return { kind: 'error', message: detail || fallback };
}
