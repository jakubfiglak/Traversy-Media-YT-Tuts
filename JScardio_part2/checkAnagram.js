function formatStr(string) {
  return string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function checkAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

module.exports = checkAnagram;
