import { expect } from "chai";
import { describe, it } from "mocha";
import { shuffle } from "../src/Shuffle.js";

describe("shuffle function", () => {
  it("should return array with same length", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);

    expect(result.length).to.equal(arr.length);
  });

  it("should return same elements (not lose data)", () => {
    const arr = [1, 2, 3];
    const result = shuffle(arr);

    expect(result.sort()).to.deep.equal(arr.sort());
  });

  it("should not always return same order", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle([...arr]);

    expect(result).to.not.deep.equal(arr);
  });
});