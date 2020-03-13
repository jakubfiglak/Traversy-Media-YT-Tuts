function longestWord(sentence) {
  // create filtered array (without colons or other special characters)
  const sentenceArr = sentence.toLowerCase().match(/[a-z0-9]+/g);

  // sort by length
  const sorted = sentenceArr.sort((a, b) => b.length - a.length);

  // sorted filtered
  const sortedFiltered = sorted.filter(
    word => word.length === sorted[0].length
  );

  if (sortedFiltered.length === 1) {
    return sortedFiltered[0];
  }
  return sortedFiltered;
}

module.exports = longestWord;
