const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
});

test('divides 8 / 2 to equal 4', () => {
    expect(calculator.divide(8, 2)).toBe(4);
});

test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(8, 0)).toThrow("Cannot divide by zero");
});
