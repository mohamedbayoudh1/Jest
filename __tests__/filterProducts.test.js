// filterProducts.test.js
const filterProducts = require('../filterProducts');

const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, inStock: true },
  { id: 2, name: 'Desk Chair', category: 'Furniture', price: 150, inStock: false },
  { id: 3, name: 'Running Shoes', category: 'Sports', price: 80, inStock: true },
  { id: 4, name: 'Bookshelf', category: 'Furniture', price: 200, inStock: true },
  { id: 5, name: 'Smartphone', category: 'Electronics', price: 800, inStock: true },
];

test('Filter products by category', () => {
  const filters = { category: 'Furniture' };
  const result = filterProducts(sampleProducts, filters);

  expect(result).toEqual([
    { id: 2, name: 'Desk Chair', category: 'Furniture', price: 150, inStock: false },
    { id: 4, name: 'Bookshelf', category: 'Furniture', price: 200, inStock: true },
  ]);
});

test('Filter products by in-stock status', () => {
  const filters = { inStock: true };
  const result = filterProducts(sampleProducts, filters);

  expect(result).toEqual([
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, inStock: true },
    { id: 3, name: 'Running Shoes', category: 'Sports', price: 80, inStock: true },
    { id: 4, name: 'Bookshelf', category: 'Furniture', price: 200, inStock: true },
    { id: 5, name: 'Smartphone', category: 'Electronics', price: 800, inStock: true },
  ]);
});

test('Filter products by price range', () => {
  const filters = { priceRange: { min: 100, max: 500 } };
  const result = filterProducts(sampleProducts, filters);

  expect(result).toEqual([
    { id: 2, name: 'Desk Chair', category: 'Furniture', price: 150, inStock: false },
    { id: 3, name: 'Running Shoes', category: 'Sports', price: 80, inStock: true },
    { id: 4, name: 'Bookshelf', category: 'Furniture', price: 200, inStock: true },
  ]);
});

test('Throw an error for invalid input', () => {
  // Invalid input: 'sampleProducts' is not an array
  const invalidInput = () => filterProducts('notAnArray', { category: 'Electronics' });

  expect(invalidInput).toThrowError('Invalid input. Provide a non-empty array of products and valid filters.');
});
