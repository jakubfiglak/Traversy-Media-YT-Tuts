function maxCharacter(string) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  string.split('').forEach(char => {
    if (charMap[char]) {
      // eslint-disable-next-line no-plusplus
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxCharacter;
