// function howManySeconds(hours) {
//   // return hours * 3600;
//   return hours * 60 * 60;
// }
// console.log(howManySeconds(5));

const howManySeconds = (hours) => hours * 3600

// console.log(howManySeconds(5));

// Write a function that takes two integers (hours, minutes) and converts them into seconds.
// function convert(hours, minutes) {
// 	let hour = hours * 3600;
//   let min = minutes * 60;
//   return hour + min;
// }
//
// console.log(convert(24, 0));

// const convert = (hours, minutes) => hours * 3600 + minutes * 60;
//
// console.log(convert(24, 0));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// function addUp(num) {
//   let number = 0;
// 	for (let i = 0; i <= num; i++) {
//     number = number + (+[i]);
//   }
//   return number;
// }
//
// console.log(addUp(4));

// function addUp(num) {
//   return (num * (num + 1)) / 2;
// }
//
// console.log(addUp(4));

// function addUp(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//     console.log(sum);
//   }
//   return sum;
// }
//
// console.log(addUp(4));

// Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.

// function triArea(base, height) {
//   return (base * height) / 2;
// }

const triArea = (base, height) => (base * height) / 2;

// console.log(triArea(3, 2));
// console.log(triArea(7, 4));

// GCD of Two Numbers
// Write a function that returns the greatest common divisor (GCD) of two integers
function gcd(n1, n2) {
  let divisor = 0;
  for (let i = 0; i <= n1 && i <= n2; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      divisor = i;
    }
  }
  return divisor;
}

// console.log(gcd(10, 20));

// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge
// function nextEdge(side1, side2) {
//   const side3 = (side1 + side2) - 1;
//   return side3;
// }

const nextEdge = (side1, side2) => side3 = (side1 + side2) - 1;
// console.log(nextEdge(8, 10));
// console.log(nextEdge(5, 7));
// console.log(nextEdge(9, 2));

// Is the Number Less Than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// function lessThanOrEqualToZero(n) {
//   if (n <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const lessThanOrEqualToZero = (num) => num <= 0;

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

// console.log(lessThanOrEqualToZero(0));
