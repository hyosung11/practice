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

let popShift = (array) => {
  let popped = array.pop()
  let shifted = array.shift()
  return [shifted, completed]
}
// pop() removes last element = 'completed'
// shift() removes first element = 'challenge'
console.log(popShift(['challenge', 'is', 'not', 'completed']));
// [ 'challenge', 'completed' ]
