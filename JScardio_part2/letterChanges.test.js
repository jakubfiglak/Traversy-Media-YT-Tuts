const letterChanges = require('./letterChanges');

test('Does letterChanges function exist', () => {
  expect(letterChanges).toBeDefined();
});

test('Change letters in a string "Hello there', () => {
  expect(letterChanges('Hello there')).toBe('Ifmmp UIfsf');
});

test('Change letters in a string "My name is Jakub', () => {
  expect(letterChanges('My name is Jakub')).toBe('nz Obnf jt kblvc');
});
