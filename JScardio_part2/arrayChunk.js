function arrayChunk(array, length) {
  const chunkedArr = [];
  let i = 0;

  while (i < array.length) {
    chunkedArr.push(array.slice(i, i + length));
    i += length;
  }

  return chunkedArr;
}

module.exports = arrayChunk;
