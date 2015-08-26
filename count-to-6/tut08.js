// default values for function arguments can be other functions in ES2015

var makeImportant = function(str, n = str.length) {
  return `${str}${'!'.repeat(n)}`;
};

module.exports = makeImportant;