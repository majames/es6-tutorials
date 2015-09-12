// generators are used to generate itterators without having to write the
// boiler plate code for the next() method. Instead the 'yield' keyword is used
// execution halts when a yield statement is reached

var generate = function*(isEven) {
  var value = isEven ? 0 : -1;

  while(true) {
    value += 2;
    yield value;
  }
};

module.exports = generate;