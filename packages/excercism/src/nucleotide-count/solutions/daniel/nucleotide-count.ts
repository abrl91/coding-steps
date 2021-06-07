import _ from "lodash";

export const nucleotideCount = (dnaString: string) => {
  const initialCounterObject = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  dnaString.split("").forEach((nucleotide) => {
    if (!new RegExp("[a-zA-Z]").test(nucleotide)) {
      return;
    }

    const validNucleotide = nucleotide.toUpperCase();
    if (_.isNil(initialCounterObject[validNucleotide])) {
      return;
    }
    initialCounterObject[validNucleotide] =
      initialCounterObject[validNucleotide] + 1;
  });

  return initialCounterObject;
};
