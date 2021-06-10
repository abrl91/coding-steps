export function fromPairsVersionII(arr) {
  const entries = new Map(arr);
  return Object.fromEntries(entries);
}
