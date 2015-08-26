// the spread operator (...numbers) spreads an array out when calling a function

var numbers = process.argv.slice(2);
var min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);