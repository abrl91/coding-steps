export const difference = (inputArray: any[], valuesToCheck: any[]) => {
  const valuesToCheckSet = new Set(valuesToCheck);
  return inputArray.reduce((acc, currValue) => {
    if (!valuesToCheckSet.has(currValue)) {
      return [...acc, currValue];
    }
    return acc;
  }, []);
};
