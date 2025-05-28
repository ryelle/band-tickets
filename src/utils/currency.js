/**
 * Format a price into a human-readable string.
 *
 * @param {number} cents 
 * @returns {string}
 */
export function displayPrice(cents) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
