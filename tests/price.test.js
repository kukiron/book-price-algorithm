import getTotal from "../src/price";

describe("Total price", () => {
  it("with no discount for zero books", () => {
    expect(getTotal([0,0,0,0,0])).toBe(0);
  });

  it("with no discount if only one type of book is selected", () => {
    expect(getTotal([1,0,0,0,0])).toBe(8);
    expect(getTotal([0,1,0,0,0])).toBe(8);
    expect(getTotal([0,0,2,0,0])).toBe(16);
    expect(getTotal([0,0,0,3,0])).toBe(24);
    expect(getTotal([0,0,0,0,4])).toBe(32);
  });

  it("with simple discounts for single book of different types", () => {
    expect(getTotal([1,1,0,0,0])).toBe(15.2);
    expect(getTotal([1,1,1,0,0])).toBe(21.6);
    expect(getTotal([1,1,1,1,0])).toBe(25.6);
    expect(getTotal([1,1,1,1,1])).toBe(30);
  });

  it("with complex discounts for multiple books of different types", () => {
    expect(getTotal([2,1,1,0,0])).toBe(29.6);
    expect(getTotal([1,2,1,1,1])).toBe(38);
    expect(getTotal([2,1,2,1,0])).toBe(40.8);
    expect(getTotal([2,2,2,0,0])).toBe(43.2);
    expect(getTotal([2,2,2,1,1])).toBe(51.2);
    expect(getTotal([4,4,0,0,0])).toBe(60.8);
    expect(getTotal([3,2,3,2,1])).toBe(70.8);
    expect(getTotal([2,2,3,3,2])).toBe(75.2);
    expect(getTotal([3,3,3,2,2])).toBe(81.2);
    expect(getTotal([4,4,4,1,1])).toBe(94.4);
    expect(getTotal([4,4,4,2,1])).toBe(98.4);
    expect(getTotal([4,4,3,3,2])).toBe(100.8);
    expect(getTotal([4,4,4,2,2])).toBe(102.4);
    expect(getTotal([4,4,4,4,4])).toBe(120);
    expect(getTotal([5,5,4,5,4])).toBe(141.2);
  });
});
