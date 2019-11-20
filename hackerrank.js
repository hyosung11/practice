// Solve Me First
function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b;
}

// console.log(solveMeFirst(2, 3));

// Simple Array Sum
// function simpleArraySum(n, ar) {
//   let temp = 0;
//   for (let i = 0; i < n; i++) {
//     temp += ar[i]
//   }
//   return temp;
// }
//
//
//
// function simpleArraySum(ar) {
//   return ar.reduce(function(a, b) {return a + b})
// }
// console.log(simpleArraySum(6, [1, 2, 3, 4, 10, 11]));

// Day 0: Hello, World.
function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");

    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString)
}

// console.log(processData('Welcome to 30 Days of Code!'));

// Day 1: Data Types

// Declare second integer, double, and String variables.
var i2;
var d2;
var s2;

 // Read and save an integer, double, and String to your variables.
i2 = parseInt(readLine());
d2 = parseFloat(readLine());
s2 = readLine();

 // Print the sum of both integer variables on a new line.
console.log(i + i2);

 // Print the sum of the double variables to a scale of one decimal place on a new line.
console.log((d + d2).toFixed(1));

 // Concatenate and print the String variables on a new line
 // The 's' variable above should be printed first.
 console.log(s + s2);
