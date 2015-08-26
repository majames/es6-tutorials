// es6 introduces for of loop, allows looping over an array

module.exports = function(iterable) {
  var results = [];
  for (var curr of iterable) {
    if (typeof curr === 'number') {
      results.push(curr);
    }
  }

  return results;
};