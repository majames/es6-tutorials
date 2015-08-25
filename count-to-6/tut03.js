// => functions are great little short hands for a function

var inputs = process.argv.slice(2);

var ans = inputs
  .map(input => input.substring(0, 1))
  .reduce((prev, curr) => prev + curr, '');

console.log(`[${inputs}] becomes "${ans}"`);