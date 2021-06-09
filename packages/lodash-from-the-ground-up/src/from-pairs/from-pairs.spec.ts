import { solutions } from "./solutions";

function runSpec(fromPairs) {
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
}

solutions.forEach((fromPairs) => runSpec(fromPairs));
