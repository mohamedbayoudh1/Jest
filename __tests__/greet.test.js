
const generateGreeting = require('../greet');




test('Generate morning greeting', () => {
    const expectedGreeting = 'Good morning!';
    const receivedGreeting = generateGreeting();
    expect(receivedGreeting).toBe(expectedGreeting);
  });
  
  test('Generate afternoon greeting', () => {
    const expectedGreeting = 'Good afternoon!';
    const receivedGreeting = generateGreeting();
    expect(receivedGreeting).toBe(expectedGreeting);
  });
  
  test('Generate evening greeting', () => {
    const expectedGreeting = 'Good evening!';
    const receivedGreeting = generateGreeting();
    expect(receivedGreeting).toBe(expectedGreeting);
  });