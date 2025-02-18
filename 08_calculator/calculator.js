const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, curr) => total + curr, 0);
};

const multiply = function (array) {
  return array.reduce((product, curr) => product * curr);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (num) {
  return Array.from({ length: num }, (_, i) => i + 1).reduce(
    (acc, curr) => acc * curr,
    1
  );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
