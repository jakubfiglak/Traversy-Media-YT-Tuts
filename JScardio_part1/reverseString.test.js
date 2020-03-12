const reverseString = require('./reverseString');

test('Does reverseString function exist', () => {
  expect(reverseString).toBeDefined();
});

test('Reverse a string "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Reverse a string "hello world"', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('Reverse a string "Where is your dog?"', () => {
  expect(reverseString('Where is your dog?')).toBe('?god ruoy si erehW');
});
