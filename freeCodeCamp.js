// let twentyThree = 'XXIII';
// let romanNumerals = ['XXI', 'XXII'];
//
// romanNumerals.unshift('XIX', 'XX');
// console.log(romanNumerals);
// // [ 'XIX', 'XX', 'XXI', 'XXII' ]

// let mixedNumbers = (array) => {
//   array.push(7, 'VIII', 9)
//   array.unshift('I', 2, 'three')
//   return array
// }
// console.log(mixedNumbers(['IV', 5, 'six']));

// function mixedNumbers(arr) {
//   arr.push(11, 12, 13)
//   arr.unshift(4, 5, 6)
//   return arr;
// }
// console.log(mixedNumbers([7, 8, 9, 10]));
// [
//   4,  5,  6,  7,  8,
//   9, 10, 11, 12, 13
// ]
//
// let popShift = (array) => {
//   let popped = array.pop()
//   let shifted = array.shift()
//   return [shifted, completed]
// }
// // pop() removes last element = 'completed'
// // shift() removes first element = 'challenge'
// console.log(popShift(['challenge', 'is', 'not', 'completed']));
// [ 'challenge', 'completed' ]

// const sumOfTen = (array) => {
//   array.splice(1, 2)
//   return array.reduce((a, b) => a + b)
// }
// console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// function htmlColorNames(array) {
//   array.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
//   return array
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// BASIC ALGORITHM SCRIPTING

// 1. Convert Celsius to Fahrenheit
// function convertToF(celsius) {
//   let fahrenheit = (celsius * 9 /5) + 32;
//   return fahrenheit;
// }

// console.log(convertToF(30))
// console.log(convertToF(10))

// 2. Reverse a String
// function reverseString(string) {
//   return string.split('').reverse().join('')
// }
//
// console.log(reverseString('hello'));

// const reverseString = (string) => {
//   // let stringArray = string.split("");
//   // let reverseStringArray = stringArray.reverse()
//   // let reversedString = reverseStringArray.join("")
//   // return (reversedString);
//   return string.split("").reverse().join("")
// }
//
// console.log(reverseString("hello"));
// let random = ['f', 'o', 'b']
// console.log(random.reverse());

// function reverseString(string) {
//   var final = "";
//   for (var i = string.length - 1; i >= 0; i--) {
//     final += string[i]
//   }
//   return final;
// }
// console.log(reverseString("jumping"));

// const reverseString = (string) => {
//   let final = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     final += string[i];
//   }
//   return final;
// }
//
// console.log(reverseString("mississippi"));

// 3. Factorialize a Number
// function factorialize(num) {
//   var result = 1;
//   for (let i = 1; i <= num; i++) {
//     // result = result * i;
//     result *= i;
//   }
//   return result;
// }
//
// console.log(factorialize(7));

// const factorialize = (num) => {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
//
// console.log(factorialize(5));

// 4. Find the Longest Word in a String
// function findLongestWordLength(string) {
//   var words = string.split(" ");
//   var longest = "";
//
//   for (var word of words) {
//     if (word.length > longest.length) {
//        longest = word;
//     }
//   }
//     return longest.length;
// }
//
//
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//
// // var fruits = ["apple", "mango", "cherries"]
// //
// // for (var pits of fruits) {
// //   console.log(pits);
// // }
//
// const findLongestWordLength = (string) => {
//   var words = string.split(" ");
//   var longest = "";
//
//   for (let word of words)
// }

// 5. Return the Largest Numbers in Arrays
// function largestOfFour(arr) {
//   // variable to store the maxes
//   var maxes = [];
//   // loop over the array to see the elements
//   for (let i = 0; i < arr.length; i++) {
//     var tempMax = arr[i][0];
//     // console.log(tempMax);
//     // check the elements in each array with nested loop
//     for (let j = 0; j < arr[i].length; j++) {
//       var currentElement = arr[i][j];
//       if (currentElement >= tempMax) {
//         tempMax = currentElement;
//       }
//     }
//     maxes.push(tempMax)
//   }
//   return maxes;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// [5, 27, 39, 1001]

// const largestOfFour = (array) => {
//   // set variable to store the maxes from each array
//   let maxes = [];
//   // loop over the arrays within the array
//   for (let i = 0; i < array.length; i++) {
//     // assign variable to largest value in the array
//     let tempMax = array[i][0];
//     // loop through each element in each of the inner arrays
//     for (let j = 0; j < array[i].length; j++) {
//       let currentElement = array[i][j];
//       if (currentElement >= tempMax) {
//         tempMax = currentElement;
//       }
//     }
//     maxes.push(tempMax)
//   }
//   return maxes;
// }
//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// 6. Confirm the Ending
// function confirmEnding (str, target) {
//   if (str.endsWith(target)) {
//     return true;
//   }
//   return false;
// }
//
// console.log(confirmEnding("Bastian", "n")); => true

// function confirmEnding (str, target) {
//   return str.endsWith(target)
// }
//
// console.log(confirmEnding("SungOh", "Oh")); // =>  true

// function confirmEnding (str, target) {
//   if (str.substr(-target.length) === target) {
//     console.log(str.substr(-target.length));
//     return true;
//   }
//   return false;
// }
//
// console.log(confirmEnding("Bastian", "no"));

// let sentence = "I'm running home in 5 minutes.";
// console.log(sentence.substr(-4));

// const confirmEnding = (str, target) => {
//   if (str.substr(-target.length) === target) {
//     return true;
//   }
//   return false;
// }

// function confirmEnding (str, target) {
//   return str.substr(-target.length) === target;
// }
//
// // console.log(confirmEnding("Open sesame", "same"));
// console.log(confirmEnding("He has to give me a new name", "name"));

// function confirmEnding (str, target) {
//   return str.slice(-target.length) === target;
// }
//
// console.log(confirmEnding("Congratulation", "on")); //=> true

// const confirmEnding = (string, target) => {
//   if (string.substr(-target.length) === target) {
//     return true;
//   }
//   return false;
// }
//
// console.log(confirmEnding("bananas", "nas"));
// => true

// 7. Repeat a String Repeat a String
// function repeatStringNumTimes(str, num) {
//   // return an empty string if num is not a positive number
//   if (num < 0) return "";
//   return str.repeat(num)
// }
//
// console.log(repeatStringNumTimes("abc", 3));

// function repeatStringNumTimes(str, num) {
//   let final = ""
//   if (num < 0) return "";
//   for (let i = 0; i < num; i++){
//     final += str;
//   }
//   return final;

// recursive version
// function repeatStringNumTimes(str, num) {
//   if (num < 0) return "";
//
//   if (num === 1) return str; // base case
//
//   return str + repeatStringNumTimes(str, num - 1)
// }
//
// console.log(repeatStringNumTimes("*", 8));
// console.log(repeatStringNumTimes("abc", 3));

// 8. Truncate a String
