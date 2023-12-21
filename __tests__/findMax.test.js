// findMax.test.js
const findMax = require('../findMax');

test('Find the maximum value in an array of positive numbers', () => {
  const numbers = [5, 8, 3, 12, 7];
  const result = findMax(numbers);
  expect(result).toBe(12);
});

test('Find the maximum value in an array of negative numbers', () => {
  const numbers = [-4, -9, -2, -7];
  const result = findMax(numbers);
  expect(result).toBe(-2);
});

test('Find the maximum value in an array with a single number', () => {
  const numbers = [42];
  const result = findMax(numbers);
  expect(result).toBe(42);
});

test('Throw an error for an empty array', () => {
  const emptyArray = () => findMax([]);
  expect(emptyArray).toThrowError('Invalid input. Provide a non-empty array of numbers.');
});

test('Throw an error for non-array input', () => {
  const invalidInput = () => findMax('notAnArray');
  expect(invalidInput).toThrowError('Invalid input. Provide a non-empty array of numbers.');
});
