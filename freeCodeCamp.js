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

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // console.log(arr);

  arr.sort(function(a, b) {
    return a - b;
  })
  for (var i = 0; i < array.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60, 5], 50));
