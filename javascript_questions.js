// https://github.com/lydiahallie/javascript-questions

// List of (Advanced) JavaScript Questions

// 1. What's the output?

function sayHi() {
  // console.log(name)
  // console.log(age)
  var name = "HyoSung"
  let age = 51
}

// console.log(sayHi());
//
// A: Lydia and undefined
// B: Lydia and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Answer: D

// Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.

// 2. What's the output?
for (var i = 0; i < 3; i++) {
  setTimeout (() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

// C: 3 3 3 and 0 1 2
// Answer: C
// Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

// In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.
// let a = 4
// let b = 5
//
// function multiply(a, b) {
//   a * b
// }
// console.log(4, 5)

// 3. What's the output?
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// }
//
// console.log(shape.diameter()) // => 20
// console.log(shape.perimeter()) // => NaN

// Answer: B
// Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.
//
// With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).
//
// There is no value radius on that object, which returns undefined.

// 4. What's the output?
// +true
// !"Lydia"
//
// A: 1 and false
// B: false and NaN
// C: false and false
//
// Answer: A
// The unary plus tries to convert an operand to a number. true is 1, and false is 0.
//
// The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.

// 5. Which one is true?
const bird = {
  size: "small"
}

const mouse = {
  name: "Mickey",
  small: true
}

// A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

// Answer: A
// In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.
//
// JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.
//
// mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true
//
// However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.

// 6. What's the output?
// let c = {greeting: "Hey!"};
// let d;
//
// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);
//
// Answer: A
// In JavaScript, all objects interact by reference when setting them equal to each other.
//
// First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.
//
//
// When you change one object, you change all of them.

// 16.
let number = 0;
// postfix unary operator
console.log(number++);
// prefix unary operator
console.log(++number);
console.log(number);
