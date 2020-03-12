const capitalizeLetters = require('./capitalizeLetters');

test('Does capitalizeLetters function exist ', () => {
  expect(capitalizeLetters).toBeDefined();
});

test('Capitalize letters in string "i love javascript"', () => {
  expect(capitalizeLetters('i love javascript')).toBe('I Love Javascript');
});

test('Capitalize letters in string "dog"', () => {
  expect(capitalizeLetters('dog')).toBe('Dog');
});

test('Capitalize letters in string "i will go out tomorrow"', () => {
  expect(capitalizeLetters('i will go out tomorrow')).toBe(
    'I Will Go Out Tomorrow'
  );
});
