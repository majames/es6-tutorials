
var generate = function*(isEven) {
  var value = isEven ? 0 : -1;

  while(true) {
    value += 2;
    yield value;
  }
};

module.exports = generate;