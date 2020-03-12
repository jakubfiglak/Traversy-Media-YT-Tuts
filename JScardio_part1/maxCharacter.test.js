const maxCharacter = require('./maxCharacter');

test('Does maxCharacter function exist', () => {
  expect(maxCharacter).toBeDefined();
});

test('Most common character in the string "javascript"', () => {
  expect(maxCharacter('javascript')).toBe('a');
});

test('Most common character in the string "holmenkollen"', () => {
  expect(maxCharacter('holmenkollen')).toBe('l');
});

test('Most common character in the string "burrito"', () => {
  expect(maxCharacter('burrito')).toBe('r');
});

test('Most common character in the string "horror"', () => {
  expect(maxCharacter('horror')).toBe('r');
});
