export function fromPairs(arr: any[][]): object {
  return arr.reduce((acc, currentTuple: string[] | number[]) => {
    return {
      ...acc,
      [currentTuple[0]]: currentTuple[1],
    };
  }, {});
}
