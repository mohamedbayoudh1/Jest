// filterObjects.js

/**
 * Filters an array of objects based on a specified condition.
 * @param {Array} array - The array of objects to filter.
 * @param {Function} condition - The filtering condition function.
 * @returns {Array} The filtered array of objects.
 */
function filterObjects(array, condition) {
    if (!Array.isArray(array) || typeof condition !== 'function') {
      throw new Error('Invalid input. Array and condition function are required.');
    }
  
    return array.filter((item) => condition(item));
  }
  
  module.exports = filterObjects;
  