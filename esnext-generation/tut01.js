// iterators in es6 are conceptually similar to itterators in other languages
// iterators are objects with an interface that exposes next and done methods

var makeCounter = function(obj) {
  var itr = { value: 0, done: false };

  obj.next = function() {
    if (itr.value === 10) {
      itr.done = true;
      return itr;
    }

    itr.value = itr.value + 1;
    return itr;
  };
};

module.exports = makeCounter;