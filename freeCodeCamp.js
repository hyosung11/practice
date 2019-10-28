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
//   array.splice(0, 2, 'Dark Salmon', 'Blanched Almond')
//   return array
// }
//
// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//
// [
//   'Dark Salmon',
//   'Blanched Almond',
//   'LavenderBlush',
//   'PaleTurquoise',
//   'FireBrick'
// ]

// Basic Algorithm Scripting: Truncate a String
// function truncateString(str, num) {
// // If statement to determine one of three outcomes
// // If string length is greater than the num to truncate at, and our truncate point is at least three characters or more in the string, we return the slice of the string starting at character 0, and ending at num - 3. We then append '...' to the end of the string.
// // If string length is > than the num, but num is within the first three characters, we don't have to count our dots as characters.
//   if (str.length) {
//
//   }
//
//   return str;
// }
// function truncateString(str, num) {
//   if (num >= str.length) return str
//     if (num <= 3) return str.slice(0, num) + "..."
//     return str.slice(0, num - 3) + "..."
//
// }

// function truncateString(str, num) {
//   if (str.length > num && num > 3) {
//     return str.slice(0, num) + '...';
//   } else if (str.length > num && num <= 3) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 16));
// console.log(truncateString("tommy goes to work", 3));
//
// function truncateString(str, num) {
//   if (str.length <= num) {
//     return str;
//   } else {
//     return str.slice(0, num > 3 ? num : num) + '...';
//   }
// }
//
// console.log(truncateString("Absolutely Longer", 3));
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
// The Ternary Operator is frequently used as a shortcut for the if statement and follows this format: condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value of expr1. Otherwise, it returns the value of expr2.

// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   let groups = [];
//   while (arr.length > 0) {
//     groups.push(arr.slice(0, size));
//     arr = arr.slice(size);
//   }
//   return groups;
// }
//
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   let groups = [];
//   while (arr.length > 0) {
//     groups.push(arr.splice(0, size));
//   }
//   return groups;
// }
//
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

// Slasher Flick (can't find on freecodecamp website)
// function slasher(arr, howMany) {
//   // it doesn't always pay to be first
//   arr.splice(0, howMany);
//   return arr;
// }
//
// console.log(slasher([1, 2, 3], 2));
// console.log(slasher(["burgers", "fries", "shake"], 1));

// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// function mutation(arr) {
//   var firstWord = arr[0].toLowerCase();
//   var secondWord = arr[1].toLowerCase();
//   for (var i = 0; i < secondWord.length; i++) {
//     if (firstWord.indexOf(secondWord[i]) < 0)
//       return false;
//   }
//   return true;
// }
//
// // function mutation(arr) {
// //   var test = arr[1].toLowerCase();
// //   var target = arr[0].toLowerCase();
// //   for (var i = 0; i < test.length; i++) {
// //     if (target.indexOf(test[i]) < 0)
// //       return false;
// //   }
// //   return true;
// //  }
//
// // console.log(mutation(["hello", "hey"]));
// // console.log(mutation(["hello", "neo"]));
//
// function mutation(arr) {
//   let firstWord = arr[0].toLowerCase();
//   let secondWord = arr[1].toLowerCase();
//   for (var i = 0; i < secondWord.length; i++) {
//     if (firstWord.indexOf(secondWord[i]) < 0)
//       return false;
//   }
//   return true;
// }
//
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "neo"]));

// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// Hint: Try converting each value to a Boolean.
// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.
//   let truthies = [];
//   for (let item of arr) {
//   if (item) truthies.push(item);
//   }
//   return truthies;
// }

// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.
//   return arr.filter(function(elem) {
//     return elem;
//   })
// }
//
// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer([1, null, NaN, 2, undefined]));

// const nums = [1, 2, 3, 4, 5, 6]
// nums.filter(function(item) {
//   return item > 4
// })
// console.log(nums);

// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
// Note
// You have to use the argumentsobject.
// function destroyer(arr) {
//   // Remove all the values
//   let args = Array.from(arguments);
//   args.splice(0, 1);
//   let targets = args;
//   let result = [];
//
//   for (let num of arr) {
//     if (targets.indexOf(num) === -1) {
//       result.push(num);
//     }
//   }
//   return result;
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 1)) // []

// function destroyer(arr) {
//   // Remove all the values
//   let args = Array.from(arguments);
//   args.splice(0, 1);
//   let targets = args
//
//   return arr.filter(function(num) {
//     return targets.indexOf(num) === -1;
//   })
  // let result = [];
  //
  // for (let num of arr) {
  //   if (targets.indexOf(num) === -1) {
  //     result.push(num);
  //   }
  // }
  // return result;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 1)) // []
//
// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5)should return 1because it is greater than 1(index 0), but less than 2(index 1).
//
// Likewise, getIndexToIns([20,3,5], 19)should return 2because once the array has been sorted it will look like [3,5,20]and 19is less than 20(index 2) and greater than 5(index 1).

// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   // console.log(arr);
//
//   arr.sort(function(a, b) {
//     return a - b;
//   })
//   for (var i = 0; i < array.length; i++) {
//     if (num <= arr[i]) {
//       return i;
//     }
//   }
//   return arr.length;
// }
//
// console.log(getIndexToIns([40, 60, 5], 50));

// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// function rot13(str) { // LBH QVQ VG!
//   let solved = "";
//   for (var i = 0; i < str.length; i++) {
//     let asciiNum = str[i].charCodeAt();
//     if (asciiNum >= 65 && asciiNum <= 77) {
//       solved += String.fromCharCode(asciiNum + 13);
//     } else if (asciiNum >= 78 && asciiNum <= 90) {
//       solved += String.fromCharCode(asciiNum - 13);
//     } else {
//       solved += str[i];
//     }
//   }
//   return solved;
// }
//
// // [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
// // Change the inputs below to test
// console.log(rot13("SERR PBQR PNZC"));
// console.log(rot13("Z"));

// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//
// The lowest number will not always come first.
// function sumAll(arr) {
//   let start = Math.min(arr[0], arr[1]);
//   let end = Math.max(arr[0], arr[1]);
//   let total = 0;
//   for (var i = start; i <= end; i++) {
//     total += i;
//   }
//   return total;
// }
//
// console.log(sumAll([10, 5]));

// const sumAll = (arr) => {
//   let min = Math.min(arr[0], arr[1]);
//   let max = Math.max(arr[0], arr[1]);
//   let total = 0;
//   for (var i = min; i <= max; i++) {
//     total += i;
//   }
//   return total;
// }
//
// console.log(sumAll([10, 5]));

// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// function diffArray(arr1, arr2) {
//   let result = [];
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) === -1) {
//       result.push(arr1[i]);
//     }
//   }
//   for (var j = 0; j < arr2.length; j++) {
//     if (arr1.indexOf(arr2[j]) === -1) {
//       result.push(arr2[j]);
//     }
//   }
//   return result;
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray([1, 2, 3], [4, 3, 6]));

// function diffArray(arr1, arr2) {
//   let combinedArray = arr1.concat(arr2);
//
//   return combinedArray.filter(function(num) {
//     if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
//       return num;
//     }
//   });
// }
//
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray([1, 2, 3], [4, 3, 6]));

// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.
//
// All roman numerals answers should be provided in upper-case.
// function convertToRoman(num) {
//  let romanToNum = {
//    M: 1000,
//    CM: 900,
//    D: 500,
//    CD: 400,
//    C: 100,
//    XC: 90,
//    L: 50,
//    XL: 40,
//    X: 10,
//    IX: 9,
//    V: 5,
//    IV: 4,
//    I: 1
//  };
//  let roman = "";
//  for (var key in romanToNum) {
//    console.log("key: ", key);
//    // console.log("value: ", romanToNum[key]);
//    while (num >= romanToNum[key]) {
//      roman += key;
//      num -= romanToNum[key];
//      console.log("Num is decreased:", num);
//    }
//  }
//  return roman;
// }
//
// console.log(convertToRoman(3999));

// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   // Only change code below this line
//   let keys = Object.keys(source)
//   console.log(keys);
//   // Only change code above this line
//   return arr;
// }

// function whatIsInAName(collection, source) {
//   let keys = Object.keys(source)
//   return collection.filter(function(obj) {
//     for (var key of keys) {
//       if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
//         return false;
//       }
//     }
//     return true;
//   })
// }

// const nums = [1, 2, 3, 4, 5];
// nums.filter(function(num) {
//   return num < 3;
//   console.log(num);
// })
// console.log(nums);

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//
// First argument is the sentence to perform the search and replace on.
//
// Second argument is the word that you will be replacing (before).
//
// Third argument is what you will be replacing the second argument with (after).
//
// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
// function myReplace(str, before, after) {
//   if (before[0] === before[0].toUpperCase()) {
//     after = after[0].toUpperCase() + after.slice(1);
//   }
//   return str.replace(before, after);
// }

// function myReplace(str, before, after) {
//   let words = str.split(" ");
//
//   if (before[0] === before[0].toUpperCase()) {
//     after = after[0].toUpperCase() + after.slice(1);
//   }
//   for (var i = 0; i < words.length; i++) {
//     if (words[i] === before) {
//       words[i] = after;
//     }
//   }
//   return words.join(" ");
// }
//
// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
// If a word begins with a vowel you just add "way" to the end.
//
// Input strings are guaranteed to be English words in all lowercase.
// function translatePigLatin(str) {
//   let firstVowel = str.match(/[aeiou]/);
//   let firstPosition = str.indexOf(firstVowel);
//   if (firstPosition > 0) {
//     return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
//   }
//   return str + 'way';
// }
//
// console.log(translatePigLatin("consonant"));

// Basic Data Structures: Iterate Through All an Array's Items Using For Loops
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) === -1) { // checks every parameter for the element and if it is NOT there continues the code
//       newArr.push(arr[i]); // inserts the element of the array in the new filtered array
//     }
//   }
//   // change code above this line
//   return newArr;
// }
//
// // change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)); // should return [ [10, 8, 3], [14, 6, 23] ]
// console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)); // should return [ ["flutes", 4] ]

// Basic Data Structures: Create complex multi-dimensional arrays
// let myNestedArray = [
//   // change code below this line
//   ['unshift', false, 1, 2, 3, ['complex', 'nested', 'deep']],
//   ['loop', 'shift', [6, 7, 1000, ['method', 'deeper']]],
//   ['concat', false, true, 'spread', 'array'],
//   ['mutate', 1327.98, [['splice', ['slice', 'deepest', 'push']]]],
//   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//   // change code above this line
// ];
//
// console.log(myNestedArray);
//
// // OR
// let myNestedArray = [
//   // change code below this line
//   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//   ['loop', 'shift', 6, 7, 1000, 'method'],
//   ['concat', false, true, 'spread', 'array',["deep"]],
//   ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
//   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
//   // change code above this line
// ];

// Basic Data Structures: Copy an Array with the Spread Operator
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // change code below this line
//     newArr.push([...arr]);
//     // change code above this line
//     num--;
//   }
//   return newArr;
// }
//
// // change code here to test different cases:
// console.log(copyMachine([true, false, true], 2));

// Basic Data Structures: Combine Arrays with the Spread Operator
// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
//   return sentence;
// }
//
// // do not change code below this line
// console.log(spreadOut());

// Basic Data Structures: Check For The Presence of an Element With indexOf()
// function quickCheck(arr, elem) {
//   // change code below this line
//   if (arr.indexOf(elem) === -1) {
//     return false;
//   }
//   return true;
//   // change code above this line
// }

// Solution 2
// const quickCheck = (arr, elem) => {
//   if (arr.indexOf(elem) >= 0) {
//     return true;
//   }
//   return false;
// }

// Solution 3
// function quickCheck(arr, elem) {
//   return arr.indexOf(elem) >= 0 ? true : false;
// }
//
// change code here to test different cases:
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// console.log(quickCheck(["squash", "onions", "shallots"], "onions"));
// console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
// console.log(quickCheck([true, false, false], undefined));

// Basic Data Structures: Iterate Through All an Array's Items Using For Loops

// Basic Data Structures: Add Key-Value Pairs to JavaScript Objects
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };
//
// // change code below this line
// foods.bananas = 13;
// foods.grapes = 35;
// foods['strawberries'] = 27;
// // change code above this line
//
// console.log(foods);

// Basic Data Structures: Modify an Object Nested Within an Object
// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42
//   }
// };
//
// // change code below this line
// userActivity.data.online = 45
// // change code above this line
//
// console.log(userActivity);

// Basic Data Structures: Access Property Names with Bracket Notation
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// // do not change code above this line
//
// function checkInventory(scannedItem) {
//   // change code below this line
//   return foods[scannedItem]
// }
//
// // change code below this line to test different cases:
// console.log(checkInventory("apples"));
// console.log(checkInventory("bananas"));
// console.log(checkInventory("strawberries"));
// console.log(checkInventory('pizza'));

// Basic Data Structures: Use the delete Keyword to Remove Object Properties
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
//
// // change code below this line
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;
// // change code above this line
//
// console.log(foods);

// Basic Data Structures: Check if an Object has a Property
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(obj) {
//   // change code below this line
//   if (users.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')) {
//     return true;
//   }
//   return false;
//   // change code above this line
// }
//
// function isEveryoneHere(obj) {
//   return (users.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')) ? true : false;
// }
//
// console.log(isEveryoneHere(users));

// Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
//
// function countOnline(obj) {
//   // change code below this line
//   let onlineUsers = 0
//   for (let user in obj) {
//     if (obj[user].online === true) {
//       onlineUsers++
//     }
//   } return onlineUsers;
//   // change code above this line
// }
//
// console.log(countOnline(users));

// Basic Data Structures: Generate an Array of All Object Keys with Object.keys()
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
//
// function getArrayOfUsers(obj) {
//   // change code below this line
//   return Object.keys(obj);
//   // change code above this line
// }
//
// console.log(getArrayOfUsers(users));

// Basic Data Structures: Modify an Array Stored in an Object
// Take a look at the object we've provided in the code editor. The user object contains three keys. The datakey contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };
//
// function addFriend(userObj, friend) {
//   // change code below this line
//   userObj.data.friends.push(friend);
//   return userObj.data.friends;
//   // change code above this line
// }
//
// console.log(addFriend(user, 'SungOh'));

// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
// function findElement(array, func) {
//   let num = 0;
//   // look through array using a for loop
//   for (var i = 0; i < array.length; i++) {
//     // the num variable is being passed into the function, so we set it to each index in our array.
//     num = array[i];
//     // the predefined function checks each number; if true, we return that num.
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }
//
// console.log(findElement([1, 2, 4], num => num % 3 === 0));

// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.

function booWho(bool) {
  // use typeof to check the parameter
  return typeof bool === 'boolean'
}

// console.log(booWho(null));
// console.log(booWho(true));
// console.log(booWho({ "a": 1 }));

// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.
// function palindrome(str) {
//   let reg = /[\W_]/g;
//
//   let smallStr = str.toLowerCase().replace(reg, "");
//   let reversed = smallStr.split("").reverse().join("");
//   if (reversed === smallStr) {
//     return true;
//   }
//   return false;
// }
//
// console.log(palindrome("racecar"));

// JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.
//
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
//
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  // Good luck!
  return true;
}

telephoneCheck("555-555-5555");
