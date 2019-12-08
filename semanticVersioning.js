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
