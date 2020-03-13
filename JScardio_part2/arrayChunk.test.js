const arrayChunk = require('./arrayChunk');

test('Does arrayChunk function exist', () => {
  expect(arrayChunk).toBeDefined();
});

test('Chunking array of [1,2,3,4,5,6,7,8,9] by 3', () => {
  expect(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});

test('Chunking array of [1,2,3,4,5,6,7,8,9] by 4', () => {
  expect(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9],
  ]);
});
