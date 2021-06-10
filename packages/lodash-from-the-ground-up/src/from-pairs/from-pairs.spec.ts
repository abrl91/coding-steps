import { solutions } from "./solutions";
import { fromPairsVersionII } from "./solutions/fromPairs.solution.veganzard.versionII";

function runSpec(fromPairs) {
  describe("fromPairs", () => {
    test("returns an object of key-value pairs", () => {
      const results = fromPairs([
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["d", 4],
        ["e", 5],
      ]);

      expect(results).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 });
    });
  });

  describe("fromPairsVersionII", () => {
    test.only("returns an object of key-value pairs", () => {
      const results = fromPairsVersionII([
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["d", 4],
        ["e", 5],
      ]);

      expect(results).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 });
    });
  });
}

solutions.forEach((fromPairs) => runSpec(fromPairs));
