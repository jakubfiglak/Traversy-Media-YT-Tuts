const isPalindrome = require('./isPalindrome');

test('Does isPalindrome function exist', () =>
  expect(isPalindrome).toBeDefined());

test('Is a string "hello" a palindrome?', () =>
  expect(isPalindrome('hello')).toBe(false));

test('Is a string "dog" a palindrome?', () =>
  expect(isPalindrome('dog')).toBe(false));

test('Is a string "racecar" a palindrome?', () =>
  expect(isPalindrome('racecar')).toBe(true));

test('Is a string "Do geese see God" a palindrome?', () =>
  expect(isPalindrome('Do geese see God')).toBe(true));
