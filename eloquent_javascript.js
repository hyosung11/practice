// let total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count +=1;
// }
//
// console.log(total); // => 55
//
// console.log(sum(range(1, 10)));

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

// console.log(factorial(8));
// => 40320
// console.log(factorial(1));

// let factorial = (n) => {
//   if (n == 0) {
//     return 1;
//   } else {
//     return factorial(n - 1) * n;
//   }
// }

// console.log(factorial(8));
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));

// let string = "This is the first line. And this is the second"
//
// let string2 = "This is the first line\nAnd this is the second"
//
// console.log(string);
// console.log(string2);

// let newline = "A newline character is written like \"\\n\"."
// console.log(newline);
// // A newline character is written like "\n".

let concatenate = "con" + "cat" + "e" + "nate"
// console.log(concatenate);
// concatenate

let templateLiteral = `half of 100 is ${100 / 2}`
// console.log(templateLiteral);
// half of 100 is 50

// Unary Operators
// console.log(typeof 4.5); // number
// console.log(typeof "x"); // string
