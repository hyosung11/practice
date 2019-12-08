// Semantic Versioning
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//
// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
//
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(semver) {
	return semver.split('.')[0]
}

function retrieveMinor(semver) {
	return semver.split('.')[1]
}

function retrievePatch(semver) {
 return semver.split('.')[2]
}

// console.log(retrieveMajor('6.1.9'));
// console.log(retrieveMinor('7.14.7'));
// console.log(retrievePatch('10.4.100'));

// Create a function that returns true if an integer is divisible by 5, and false otherwise.

function divisibleByFive(n) {
  return n % 5 === 0;
}

// console.log(divisibleByFive(43));
// console.log(divisibleByFive(25));

// Missing Third Angle
// You are given 2 out of 3 of the angles in a triangle, in degrees.
//
// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is less than 90 degrees.
// A right angle is exactly 90 degrees.
// An obtuse angle is greater than 90 degrees (but less than 180 degrees).

// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

// function missingAngle(angle1, angle2) {
// 	if (angle1 + angle2 < 90) {
//     return 'obtuse'
//   } else if (angle1 + angle2 === 90) {
//     return 'right'
//   } else if (angle1 + angle2 > 90 && angle1 + angle2 < 180) {
//     return 'acute'
//   }
//   return 'not a triangle'
// }
//
// const missingAngle = (angle1, angle2) => {
//   const angle3 = 180 - angle1 - angle2;
//   return angle3 > 90 ? 'obtuse' : angle3 < 90 ? 'acute' : 'right';
// };

const missingAngle = (angle1, angle2) => {
  const angle3 = 180 - angle1 - angle2;
  return angle3 > 90 ? 'obtuse' : angle3 < 90 ? 'acute' : 'right';
}

console.log(missingAngle(70, 1));
console.log(missingAngle(75, 75));
