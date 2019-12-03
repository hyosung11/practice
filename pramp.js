// Absolute Value Sort
// Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.
//
// Examples:
//
// input:  arr = [2, -7, -2, -2, 0]
// output: [0, -2, -2, 2, -7]
//
// Constraints:
//
// [time limit] 5000ms
// [input] array.integer arr
// 0 ≤ arr.length ≤ 10
// [output] array.integer

function absSort(arr) {
  // build comparison function
  function absoluteValueComparison(a, b) {
    // sort integers by absolute value
    if (Math.abs(a) < Math.abs(b)) {
      return - 1;
    } else if (Math.abs(a) > Math.abs(b)) {
      return 1;

    // sort identical absolute values in numerical order
    } else if (a < b) {
      return - 1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
  // call comparison function as callback in array sort
  return arr.sort(absoluteValueComparison)
}

console.log(absSort([2, -7, -2, -2, 0, 7]));

// Approach #2: Custom Sort
function absSort(arr) {
  function compare(a, b) {
    if (abs(a) < abs(b)) {
      return -1;
    } if (abs(a) > abs(b)) {
      return 1;
    } if (a < b) {
      return - 1;
    } if (a > b) {
      return 1
    } return 0;
  } arr.sort(cmp = compare)
  return arr;
}

console.log(absSort([2, -7, -2, -2, 0, 7]));
