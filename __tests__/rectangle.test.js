// rectangle.test.js
const calculateRectangleArea = require('../rectangle');

test('Calculate area of a rectangle with positive dimensions', () => {
  const length = 5;
  const width = 10;
  const expectedArea = 50;

  const calculatedArea = calculateRectangleArea(length, width);

  expect(calculatedArea).toBe(expectedArea);
});

test('Throw an error for negative dimensions', () => {
  const length = -5;
  const width = 10;

  // Use a function to wrap the area calculation and catch the error
  const calculateAreaWithNegativeDimensions = () => {
    calculateRectangleArea(length, width);
  };

  expect(calculateAreaWithNegativeDimensions).toThrowError('Length and width must be positive numbers');
});

test('Throw an error for zero dimensions', () => {
  const length = 0;
  const width = 10;

  // Use a function to wrap the area calculation and catch the error
  const calculateAreaWithZeroDimensions = () => {
    calculateRectangleArea(length, width);
  };

  expect(calculateAreaWithZeroDimensions).toThrowError('Length and width must be positive numbers');
});
