// filterProducts.js

/**
 * Filters a list of products based on specified criteria.
 * @param {Array} products - The array of products.
 * @param {Object} filters - The filtering criteria.
 * @returns {Array} The filtered array of products.
 */
function filterProducts(products, filters) {
    if (!Array.isArray(products) || products.length === 0 || typeof filters !== 'object') {
      throw new Error('Invalid input. Provide a non-empty array of products and valid filters.');
    }
  
    return products.filter((product) => {
      const meetsCriteria =
        (!filters.inStock || product.inStock) &&
        (!filters.category || product.category === filters.category) &&
        (!filters.priceRange || (product.price >= filters.priceRange.min && product.price <= filters.priceRange.max));
  
      return meetsCriteria;
    });
  }
  
  module.exports = filterProducts;
  