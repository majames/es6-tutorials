// iterators that are never done

var generate = function(even) {
  var value = 0, itr = {};

  itr.next = function(swap) {
    var isOdd = function(num) {
      return num % 2;
    };

    var isEvenOrZero = function(num) {
      return num % 2 === 0;
    }

    even = swap ? !even : even;

    value = (even && isEvenOrZero(value)) || (!even && isOdd(value)) ? value + 2 : value + 1;

    return {
      value: value
    };
  };

  return itr;
};

module.exports = generate;