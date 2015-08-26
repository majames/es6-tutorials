// the rest operator is the spreads counterpart. it allows a variable number of arguments to be passed into an array
// no more need for the dreaded arguments object!

module.exports = function(...numbers) {
  var sum = numbers.reduce((prev, curr) => prev + curr, 0);

  return numbers.length && sum / numbers.length;
};