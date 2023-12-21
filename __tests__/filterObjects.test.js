// filterObjects.test.js
const filterObjects = require('../filterObjects');

test('Filter objects with a specific property value', () => {
  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 },
  ];

  const condition = (item) => item.age > 25;
  const result = filterObjects(data, condition);

  expect(result).toEqual([{ id: 2, name: 'Jane', age: 30 }]);
});

test('Filter objects with a custom condition', () => {
  const data = [
    { id: 1, name: 'John', score: 80 },
    { id: 2, name: 'Jane', score: 95 },
    { id: 3, name: 'Bob', score: 60 },
  ];

  const condition = (item) => item.score >= 80;
  const result = filterObjects(data, condition);

  expect(result).toEqual([
    { id: 1, name: 'John', score: 80 },
    { id: 2, name: 'Jane', score: 95 },
  ]);
});

test('Throw an error for invalid input', () => {
  // Invalid input: 'data' is not an array
  const invalidInput = () => filterObjects('notAnArray', (item) => item.age > 25);

  expect(invalidInput).toThrowError('Invalid input. Array and condition function are required.');
});
