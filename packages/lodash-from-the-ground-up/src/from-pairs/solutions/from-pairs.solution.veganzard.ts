export function fromPairs(arr: [[]]): object {
  return arr.reduce((acc, currentTuple: []) => {
    return {
      ...acc,
      [currentTuple[0]]: currentTuple[1],
    };
  }, {});
}
