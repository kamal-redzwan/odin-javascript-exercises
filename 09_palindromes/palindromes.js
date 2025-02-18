const palindromes = function (string) {
  // [^a-z0-9]/g = remove all non-alphanumeric character
  const processRegex = string.toLowerCase().replace(/[^a-z0-9]/g, '');

  // reverse the string and compare
  return processRegex.split('').reverse().join('') == processRegex;
};

// Do not edit below this line
module.exports = palindromes;
