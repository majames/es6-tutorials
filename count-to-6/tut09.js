// interpolated string tagging in es6

var html = function(strArr, ...subs) {
  var i, result = '';

  subs = subs.map(sub => sub
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;'));

  for (i = 0; i < strArr.length; i++) {
    result += strArr[i] + (i === subs.length ? '' : subs[i]);
  }

  return result;
};

var uname = process.argv[2];
var comment = process.argv[3];

console.log(html`<b>${uname} says</b>: "${comment}"`)