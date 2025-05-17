// calcSumのテストを書く
import { calcSum } from "./calcSum";

describe("calcSum", () => {
  it("should return the sum of two numbers", () => {
    const result = calcSum(2, 3);
    expect(result).toBe(5);
  });

  it("should return the sum of negative numbers", () => {
    const result = calcSum(-2, -3);
    expect(result).toBe(-5);
  });

  it("should return the sum of a positive and a negative number", () => {
    const result = calcSum(2, -3);
    expect(result).toBe(-1);
  });

  it("should return the sum of zero and a number", () => {
    const result = calcSum(0, 5);
    expect(result).toBe(5);
  });
});
