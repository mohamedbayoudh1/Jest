// mathOperations.js

/**
 * Adds provided numbers and returns the sum.
 * @param {...number} numbers - Numbers to be added.
 * @returns {number} The sum of the provided numbers.
 */
function theSum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  /**
   * Multiplies provided numbers and returns the product.
   * @param {...number} numbers - Numbers to be multiplied.
   * @returns {number} The product of the provided numbers.
   */
  function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
  }
  
  /**
   * Calculates the factorial of a number.
   * @param {number} n - The number to calculate the factorial.
   * @returns {number} The factorial of the provided number.
   */
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  module.exports = { theSum, multiply, factorial };
  