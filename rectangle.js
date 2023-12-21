// rectangle.js

/**
 * Calculates the area of a rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} The area of the rectangle.
 */
function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
      throw new Error('Length and width must be positive numbers');
    }
  
    return length * width;
  }
  
  module.exports = calculateRectangleArea;
  