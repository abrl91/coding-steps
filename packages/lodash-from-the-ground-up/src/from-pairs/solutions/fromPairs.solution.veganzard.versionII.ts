export function fromPairsVersionII(arr: [[]]): object {
  const entries = new Map(arr);
  return Object.fromEntries(entries);
}
