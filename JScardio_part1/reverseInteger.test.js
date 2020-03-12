const reverseInteger = require('./reverseInteger');

test('Does reverseInteger function exist', () =>
  expect(reverseInteger).toBeDefined());

test('Test the integer of 521', () => expect(reverseInteger(521)).toBe(125));

test('Test the integer of 11627', () =>
  expect(reverseInteger(11627)).toBe(72611));

test('Test the integer of 66843', () =>
  expect(reverseInteger(66843)).toBe(34866));
