
let fizzBuzzCount = 0;
let output = "";

// A for loop is appropriate for the fixed range of 1 to 100.
for (let number = 1; number <= 100; number++) {
    if (number > 1) {
        output += ", ";
    }

    // Check both conditions first so FizzBuzz is not missed.
    if (number % 3 === 0 && number % 5 === 0) {
        output += "FizzBuzz";
        fizzBuzzCount++;
    } else if (number % 3 === 0) {
        output += "Fizz";
    } else if (number % 5 === 0) {
        output += "Buzz";
    } else {
        output += number;
    }
}

console.log(output);
console.log("FizzBuzz count: " + fizzBuzzCount);

// Extra challenge: extend the range to 150 and add Pop for multiples of 7.
// Precedence: FizzBuzzPop, FizzBuzz, FizzPop, BuzzPop, Pop,
// Fizz, Buzz, then the number.
let extendedCount = 0;
let extendedOutput = "";

for (let number = 1; number <= 150; number++) {
    if (number > 1) {
        extendedOutput += ", ";
    }

    let word = "";

    if (number % 3 === 0) {
        word += "Fizz";
    }

    if (number % 5 === 0) {
        word += "Buzz";
    }

    if (number % 7 === 0) {
        word += "Pop";
    }

    if (word === "") {
        extendedOutput += number;
    } else {
        extendedOutput += word;

        if (number % 3 === 0 && number % 5 === 0) {
            extendedCount++;
        }
    }
}

console.log("\nExtended FizzBuzz (1-150):");
console.log(extendedOutput);
console.log("Extended FizzBuzz count: " + extendedCount);
