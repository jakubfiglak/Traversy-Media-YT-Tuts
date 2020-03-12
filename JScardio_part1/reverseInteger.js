function reverseInteger(int) {
  return parseInt(
    int
      .toString()
      .split('')
      .reverse()
      .join('')
  );
}

module.exports = reverseInteger;
