const flattenArray = require('./flattenArray');

test('Does flattenArray function exist', () => {
  expect(flattenArray).toBeDefined();
});

test('Flatten array of [[1,2,3],[4,5],[6]]', () => {
  expect(flattenArray([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Flatten array of [[1,2,3,4],[5,6,7],[8,9]]', () => {
  expect(flattenArray([[1, 2, 3, 4], [5, 6, 7], [8, 9]])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ]);
});
