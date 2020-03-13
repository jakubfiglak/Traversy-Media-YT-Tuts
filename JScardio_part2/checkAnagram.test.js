const checkAnagram = require('./checkAnagram');

test('Does checkAnagram function exist', () => {
  expect(checkAnagram).toBeDefined();
});

test('Are words elbow and below anagrams', () => {
  expect(checkAnagram('elbow', 'below')).toBe(true);
});

test('Are words Dormitory and dirty room## anagrams', () => {
  expect(checkAnagram('Dormitory', 'dirty room##')).toBe(true);
});

test('Are words hello and hell no anagrams', () => {
  expect(checkAnagram('hello', 'hell no')).toBe(false);
});
