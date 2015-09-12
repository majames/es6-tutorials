var multiplier = function*() {
  var multiplier = 1, newMultiplier;
  var value = 1;

  while(true) {
    newMultiplier = yield multiplier * value;
    multiplier = typeof newMultiplier === 'number' ? newMultiplier : 1;

    value += 1;
  }
};

module.exports = multiplier;