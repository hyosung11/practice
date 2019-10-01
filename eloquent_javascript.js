// let total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count +=1;
// }
//
// console.log(total); // => 55
//
// console.log(sum(range(1, 10)));

// function factorial(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return factorial(n - 1) * n;
//   }
// }

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

// console.log(1 + 1 == 2 && 10 * 10 > 50); // true

// ternary operator
// the value on the left of the question mark "picks" which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the right value.
// console.log(true ? 1 : 2); // 1
// console.log(false ? 1 : 2); // 2

// console.log(1 + 1 ? > 2 : 0);

// let isStudent = true;
// let price = isStudent ? 8 : 12;
// console.log(price); // 8
// If patron is a student the price is 8 if not it's 12

// Nested ternary
// let isStudent = false;
// let isSenior = true;
//
// let price = isStudent ? 8 : isSenior ? 6 : 10;
// console.log(price); // 6
// If the person is a student the price is 8, else if the person is a senior the price is 6, else the price is 10.

// Multiple Operators
// let isStudent = true;
// let price = 12;
//
// isStudent ? (
//   price = 8,
//   alert('Please check for student ID')
// ) : (
//     alert('Enjoy the movie')
// )

// while and do loops
// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result); // => 1024

// do loop - always executes its body at least once
// let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

// Indenting Code
// if (false != true) {
//   console.log("That makes sense");
//   if (1 < 2) {
//     console.log("No surprises there");
//   }
// }

// for loops
// initializes, checks, updates
// for (let number = 0; number <= 12; number = number + 2) {
//   console.log(number);
// }

// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2;
// }
// console.log(result);

// for (let current = 20; ; current = current + 1) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }
// => 21

// for (let number = 0; number <= 12; number += 2) {
//   console.log(number);
// }

// Looping a Triangle
// for (let line = "#"; line.length < 8; line += "#")
// console.log(line);

// for (let triangle = "#"; triangle.length < 8; triangle += "#")
// console.log(triangle);

// FizzBuzz
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz"
//   console.log(output || n);
// }

// for (let i = 0; i <= 100; i++) {
//   let output = "";
//   if (i % 3 == 0) output += "Fizz"
//   if (i % 5 == 0) output += "Buzz"
//   console.log(output || i);
// }
// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 == 0)
//     console.log("FizzBuzz");
//   else if (i % 3 == 0)
//     console.log("Fizz");
//   else if (i % 5 == 0)
//     console.log("Buzz");
//   else
//     console.log(i);
// }

// Chessboard
// this is the variable setting
let size = 16;

// this is the empty string we're going to add either " " or "#" or new line
let board = "";

// in the outer loop we add newLine to separate rows
for (let x = 0; x < size; x++) {
  // every inner loop represents a line, and alternatively it's adding either " " or "#" to the string that's being populated
  for (let y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#"
    }
  }
  board += "\n";
}

// console.log(board);

const square = (x) => {
  return x * x;
}

// console.log(square(12));

// Bindings and Scopes
const halve = (n) => {
  return n / 2;
};

let n = 10;
// console.log(halve(100));
// console.log(n);

// const hummus = function(factor) {
//   const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };
// console.log(hummus(`${ingredientAmount} ${unit} ${name}`));

// declaration notation
// console.log("The future says:", future());
//
// function future() {
//   return "You'll never have flying cars";
// }

// Arrow Functions
// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result += base
//   }
//   return result;
// }
//
// console.log(power(5, 6));

// optional arguments
// function power(base, exponent = 2) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   } return result; 4
// }
//
// console.log(power(4)); // => 16
// console.log(power(2, 3));

// let printFarmInventory = (cows, chickens) => {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//   }
//   console.log(`${cowString} Cows`);
//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11)

// let printZeroPaddedWithLabel = (number, label) => {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }
//
// let printFarmInventory = (cows, chickens, pigs) => {
//   printZeroPaddedWithLabel(cows, "Cows");
//   printZeroPaddedWithLabel(chickens, "Chickens");
//   printZeroPaddedWithLabel(pigs, "Pigs");
// }
//
// printFarmInventory(7, 11, 3);
// 007 Cows
// 011 Chickens
// 003 Pigs

// const zeroPad = (number, width) => {
//   let string = String(number);
//   while (string.length < width) {
//     string = "0" + string;
//   }
//   return string;
// }
//
// const printFarmInventory = (cows, chickens, pigs) => {
//   console.log(`${zeroPad(cows, 3)} Cows`);
//   console.log(`${zeroPad(chickens, 3)} Chickens`);
//   console.log(`${zeroPad(pigs, 3)} Pigs`);
// }
//
// printFarmInventory(7, 16, 3)
// 007 Cows
// 016 Chickens
// 003 Pigs

// Minimum
// let min = (a, b) => {
//   if (a < b) {
//     return a
//   } else {
//     return b
//   }
// }
//
// console.log(min(0, 10));
// console.log(min(0, -10));
// console.log(min(5, 5));

// function min(a, b) {
//   if (a < b) return a;
//   else return b
// }
//
// console.log(min(0, 10));
// console.log(min(0, -10));
// console.log(min(5, 5));

// RECURSION
// const isEven = (number) => {
//   if (number % 2 == 0) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));
// console.log(isEven(3));
//
// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n)
//   else return isEven(n - 2);
// }
// // console.log(isEven(50));
// // // → true
// console.log(isEven(77));
// // → false
// console.log(isEven(-2));
// // → false

// let isEven = (n) => {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n)
//   else return isEven(n - 2)
// }
// console.log(isEven(-34));

// BEAN COUNTING
// const countBs = (string) => {
//   for (let i = 0; i < string.length; i++)
//   if (string === "B") {
//     return string[i]
//   }
// }

// console.log(countBs("BBC"));

// function countChar(string, ch) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       counted += 1;
//     }
//   }
//   return counted;
// }
//
// function countBs(string) {
//   return countChar(string, "B")
// }
//
// console.log(countBs("BBBBC"));
// console.log(countChar("bbasdkiud", "b"));

// null.length

// let doh = "Doh";
// console.log(typeof doh.toUpperCase); // => function
// console.log(doh.toUpperCase()); // => DOH

// The Lycanthrope's Log
// let journal = [];
//
// const addEntry = (events, squirrel) => {
//   journal.push({events, squirrel});
// }

// The Sum of a Range
function range (start, end) {
  return array
}
