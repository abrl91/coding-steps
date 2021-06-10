export function fromPairsVersionII(arr: any[][]): object {
  const entries = new Map(arr);
  return Object.fromEntries(entries);
}
