const repeatString = function (string, multiple) {
  let repeatedString = '';

  if (multiple < 0) return 'ERROR';

  for (let i = 0; i < multiple; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
