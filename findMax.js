// findMax.js

/**
 * Finds the maximum value in an array of numbers.
 * @param {Array} numbers - The array of numbers.
 * @returns {number} The maximum value in the array.
 */
function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('Invalid input. Provide a non-empty array of numbers.');
    }
  
    return Math.max(...numbers);
  }
  
  module.exports = findMax;
  