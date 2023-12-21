// addToCart.js

/**
 * Adds products to a shopping cart.
 * @param {Array} cart - The current shopping cart.
 * @param {Object} product - The product to add to the cart.
 * @param {number} quantity - The quantity of the product to add.
 * @returns {Array} The updated shopping cart.
 */
function addToCart(cart, product, quantity = 1) {
    if (!Array.isArray(cart) || typeof product !== 'object' || typeof quantity !== 'number' || quantity <= 0) {
      throw new Error('Invalid input. Provide a valid shopping cart, product, and positive quantity.');
    }
  
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // If the product is in the cart, update the quantity
      cart[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it with the specified quantity
      cart.push({ ...product, quantity });
    }
  
    return cart;
  }
  
  module.exports = addToCart;
  