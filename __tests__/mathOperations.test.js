// mathOperations.test.js
const { theSum, multiply, factorial } = require("../mathOperations");

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

  // ... Add more test cases for theSum function
});

describe("multiply function", () => {
  test("Return 1 if no number is provided", () => {
    expect(multiply()).toBe(1);
  });

  test("Return the provided number", () => {
    expect(multiply(10)).toBe(10);
  });

  test("Return the product of two provided numbers", () => {
    expect(multiply(5, 4)).toBe(20);
  });

  // ... Add more test cases for multiply function
});

describe("factorial function", () => {
  test("Return 1 for factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("Return 1 for factorial of 1", () => {
    expect(factorial(1)).toBe(1);
  });

  test("Return the correct factorial for a positive number", () => {
    expect(factorial(5)).toBe(120);
  });

  // ... Add more test cases for factorial function
});
