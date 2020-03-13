const longestWord = require('./longestWord');

test('Does longestWord function exist', () => {
  expect(longestWord).toBeDefined();
});

test('Longest word from a sentence "Hello, my name is Jakub"', () => {
  expect(longestWord('Hello, my name is Jakub')).toEqual(['hello', 'jakub']);
});

test('Longest word from a sentence "Hello, my name is John"', () => {
  expect(longestWord('Hello, my name is John')).toBe('hello');
});
