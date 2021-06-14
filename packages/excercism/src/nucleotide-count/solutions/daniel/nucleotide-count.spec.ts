import { nucleotideCount } from "./nucleotide-count";

describe("Nucleotide Count", () => {
  test("Only Gs", () => {
    const expected = { A: 0, C: 0, G: 7, T: 0 };
    expect(nucleotideCount("GGGGGGG")).toEqual(expected);
  });

  test("Only As", () => {
    const expected = { A: 2, C: 0, G: 0, T: 0 };
    expect(nucleotideCount("AA")).toEqual(expected);
  });

  test("Only Cs", () => {
    const expected = { A: 0, C: 3, G: 0, T: 0 };
    expect(nucleotideCount("CCC")).toEqual(expected);
  });

  test("Only Ts", () => {
    const expected = { A: 0, C: 0, G: 0, T: 5 };
    expect(nucleotideCount("TTTTT")).toEqual(expected);
  });

  test("A mix", () => {
    const expected = { A: 1, C: 2, G: 3, T: 5 };
    expect(nucleotideCount("TTTTTACGCGG")).toEqual(expected);
  });

  test("0 count if invalid string", () => {
    const expected = { A: 0, C: 0, G: 0, T: 0 };
    expect(nucleotideCount("0234124124qwhyzkzpqwlek")).toEqual(expected);
  });

  test("0 count if empty string", () => {
    const expected = { A: 0, C: 0, G: 0, T: 0 };
    expect(nucleotideCount("")).toEqual(expected);
  });

  test("should work for lower cases as well", () => {
    const expected = { A: 2, C: 1, G: 1, T: 1 };
    expect(nucleotideCount("acgta")).toEqual(expected);
  });
});
