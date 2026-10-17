
let ascending = "";

// A for loop is appropriate because the range is known in advance.
for (let number = 2; number <= 50; number += 2) {
    ascending += number + " ";
}
console.log("Ascending: " + ascending.trim());

// A while loop counts downward until it reaches 2.
let descending = "";
let numberDown = 50;

while (numberDown >= 2) {
    descending += numberDown + " ";
    numberDown -= 2;
}
console.log("Descending: " + descending.trim());

// Continue skips multiples of 6 without ending the loop.
let skippedSequence = "";

for (let number = 1; number <= 30; number++) {
    if (number % 6 === 0) {
        continue;
    }

    skippedSequence += number + " ";
}

console.log("1-30, skipping multiples of 6:");
console.log(skippedSequence.trim());

// Extra challenge: add the odd numbers from 1 through 99.
let oddSum = 0;

// A for loop with a step of 2 visits only odd numbers.
for (let odd = 1; odd <= 99; odd += 2) {
    oddSum += odd;
}

console.log("Sum of odd numbers from 1 to 99: " + oddSum);
