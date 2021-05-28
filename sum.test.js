const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('substracts 2 - 1 to equal 1', () => {
  expect(sub(2, 1)).toBe(1);
});
test('multiplies 1 * 2 to equal 2', () => {
  expect(mul(1, 2)).toBe(2);
});
test('divides 10 / 5 to equal 2', () => {
  expect(div(10, 5)).toBe(2);
});