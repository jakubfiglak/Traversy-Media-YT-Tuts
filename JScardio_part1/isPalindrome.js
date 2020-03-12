function isPalindrome(string) {
  return (
    string
      .replace(/ /g, '')
      .toLowerCase()
      .split('')
      .reverse()
      .join('') === string.replace(/ /g, '').toLowerCase()
  );
}

module.exports = isPalindrome;
