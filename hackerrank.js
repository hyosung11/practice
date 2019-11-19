// Solve Me First
function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b;
}

// console.log(solveMeFirst(2, 3));

// Simple Array Sum
function simpleArraySum(n, ar) {
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp += ar[i]
  }
  return temp;
}



function simpleArraySum(ar) {
  return ar.reduce(function(a, b) {return a + b})
}
console.log(simpleArraySum(6, [1, 2, 3, 4, 10, 11]));
