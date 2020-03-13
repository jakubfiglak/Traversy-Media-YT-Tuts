function letterChanges(string) {
  let newString = string.toLowerCase().replace(/[a-z]/gi, function(char) {
    if (char === 'z' || char === 'Z') {
      return 'a';
    }
    return String.fromCharCode(char.charCodeAt() + 1);
  });

  newString = newString.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });

  return newString;
}

letterChanges('Hello there');

module.exports = letterChanges;
