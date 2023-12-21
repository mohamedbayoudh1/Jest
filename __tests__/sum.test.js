const theSum = require("../sum");

describe("theSum function", () => {
  test("Return 0 if no number is provided", () => {
    expect(theSum()).toBe(0);
  });

  test("Return the provided number", () => {
    expect(theSum(10)).toBe(10);
  });

  test("Return the sum of two provided numbers", () => {
    expect(theSum(15, 25)).toBe(40);
  });

  test("Return the sum of three provided numbers", () => {
    expect(theSum(15, 25, 10)).toBe(50);
  });

  test("Return the sum of four provided numbers", () => {
    expect(theSum(15, 25, 10, 10)).toBe(60);
  });

  test("Return the sum of all provided numbers", () => {
    expect(theSum(15, 25, 10, 10, 60, 10)).toBe(130);
  });

  test("Return the sum of negative numbers", () => {
    expect(theSum(-5, -10, -15)).toBe(-30);
  });

  test("Return the sum of decimal numbers", () => {
    expect(theSum(2.5, 3.5, 1.2)).toBe(7.2);
  });


  test("Return the sum of one positive and one negative number", () => {
    expect(theSum(8, -3)).toBe(5);
  });
  
  test("Return the sum of a large number of elements", () => {
    const largeArray = Array.from({ length: 1000 }, (_, index) => index + 1);
    expect(theSum(...largeArray)).toBe(500500); // Sum of the first 1000 natural numbers
  });
});

// Additional code (console.log statement) unrelated to tests
console.log([].reduce((a, b) => a + b, 0));
