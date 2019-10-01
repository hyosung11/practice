// constant complexity
// function helloWorld() {
//   console.log('hello world');
// }
// helloWorld()

// let people = {
//   instructor: 'jimmy',
//   student: 'doug',
//   boss: 'shanaz'
// }
//
// console.log(people.boss);

// 2. Linear Complexity
// function iterate(arr) {
//   arr.forEach(item => console.log(item))
// }

// function iterateLoop (array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }
//
// console.log(iterateLoop([1, 3, 5, 7]))

// 3. Quadratic Complexity
function consoleLogLots (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

// console.log(consoleLogLots([1, 3]));
// 1 1
// 1 3
// 3 1
// 3 3

// console.log(consoleLogLots([1, 2, 3]));
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

// 4. Logarithmic Complexity
// binary search algorithm

// let array = [1, 3, 5, 7, 9, 11, 13]

function binarySearch (array, item, first = 0, last = null) {
  if (!last) last = array.length
  let midpoint = Math.floor((last - first) / 2) + first
  if (array[midpoint] === item) return midpoint
  if (array[midpoint] > item) return binarySearch(array, item, first, midpoint)
  if (array[midpoint] < item) return binarySearch(array, item, midpoint, last)
}
//
// Let’s say we want to find the value 5 in arr[1, 3, 5, 7, 9, 11, 13]. The function above would run three times instead of the seven that we would need if we iterated through the entire array!

// Drop the Coefficients Like They're Hot
function iter (arr) {
    // Big-O: N
    arr.forEach(item => console.log(item))
    arr.forEach(item => console.log(item))
    console.log('hello world')
}

function helloWorld () {
    // Big-O: 1
    console.log('hello world')
    console.log('hello world')
}

helloWorld()
// At first glance, you might think they have complexities of O(2N + 1) and O(2), respectively. However, in order to keep things simple, we can drop the coefficients. The time complexities are still linear and constant — and that’s all that matters for Big O!
