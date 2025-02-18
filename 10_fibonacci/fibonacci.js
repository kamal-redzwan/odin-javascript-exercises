const fibonacci = function (sequence) {
  // check if seq is a number, if not change it
  let count = typeof sequence === 'number' ? sequence : parseInt(sequence);

  // return OOPS if negative num
  if (count < 0) return 'OOPS';

  // return 0 if the 1st sequence is 0
  if (count === 0) return 0;

  // create an array with the length of count
  return Array.from({ length: count }).reduce(
    // each iteration update the sequence to this:-
    // put secondSec to firstSec
    // add firstSec with secondSec
    ([firstSeq, secondSec]) => [secondSec, firstSeq + secondSec],

    // set initial value to [0, 1] <- the first 2 fib sequence
    [0, 1]

    // return the 1st value of the array [0]
  )[0];
};

// Do not edit below this line
module.exports = fibonacci;
