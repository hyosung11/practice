var text = 'outside';
function logIt() {
  console.log(text);
  var text = 'inside';
}

console.log(logIt());
