// jest.setup.js

const mockDate = new Date('2023-01-01T12:00:00.000Z');
global.Date = jest.fn(() => mockDate);
