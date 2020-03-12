const chunkArray = (arr, len) => {
  const chunkedArr = [];

  arr.forEach(el => {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === len) {
      chunkedArr.push([el]);
    } else {
      last.push(el);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
