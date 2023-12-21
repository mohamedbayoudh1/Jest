// addToCart.test.js
const addToCart = require('../addToCart');

const sampleCart = [
  { id: 1, name: 'Laptop', price: 1200, quantity: 2 },
  { id: 2, name: 'Desk Chair', price: 150, quantity: 1 },
];

const sampleProduct = { id: 3, name: 'Running Shoes', price: 80 };

test('Add a new product to the cart', () => {
  const updatedCart = addToCart(sampleCart, sampleProduct, 3);

  expect(updatedCart).toEqual([
    { id: 1, name: 'Laptop', price: 1200, quantity: 2 },
    { id: 2, name: 'Desk Chair', price: 150, quantity: 1 },
    { id: 3, name: 'Running Shoes', price: 80, quantity: 3 },
  ]);
});

test('Update quantity for an existing product in the cart', () => {
  const updatedCart = addToCart(sampleCart, sampleProduct, 2);

  expect(updatedCart).toEqual([
    { id: 1, name: 'Laptop', price: 1200, quantity: 2 },
    { id: 2, name: 'Desk Chair', price: 150, quantity: 1 },
    { id: 3, name: 'Running Shoes', price: 80, quantity: 2 },
  ]);
});

test('Throw an error for invalid input', () => {
  // Invalid input: 'sampleCart' is not an array
  const invalidInput = () => addToCart('notAnArray', sampleProduct, 2);

  expect(invalidInput).toThrowError('Invalid input. Provide a valid shopping cart, product, and positive quantity.');
});

test('Throw an error for negative quantity', () => {
  // Negative quantity is not allowed
  const negativeQuantity = () => addToCart(sampleCart, sampleProduct, -1);

  expect(negativeQuantity).toThrowError('Invalid input. Provide a valid shopping cart, product, and positive quantity.');
});
