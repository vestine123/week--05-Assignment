
let marks = [78, 45, 92, 60, 33, 87, 50, 69];

let passCount = 0;
let failCount = 0;
let total = 0;
let highest = marks[0];
let lowest = marks[0];

let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;

// for...of visits each mark directly from the array.
for (let mark of marks) {
    let result = mark >= 50 ? "PASS" : "FAIL";

    console.log(`Mark: ${mark} | ${result}`);

    total += mark;

    if (mark >= 50) {
        passCount++;
    } else {
        failCount++;
    }

    // Find the highest and lowest without Math.max() or Math.min().
    if (mark > highest) {
        highest = mark;
    }

    if (mark < lowest) {
        lowest = mark;
    }

    // Count letter grades using the required grade bands.
    if (mark >= 80) {
        gradeA++;
    } else if (mark >= 70) {
        gradeB++;
    } else if (mark >= 60) {
        gradeC++;
    } else if (mark >= 50) {
        gradeD++;
    } else {
        gradeF++;
    }
}

let average = total / marks.length;

console.log("\n--- Student Summary ---");
console.log(`Passed: ${passCount} | Failed: ${failCount}`);
console.log(
    `Highest: ${highest} | Lowest: ${lowest} | Average: ${average.toFixed(2)}`
);
console.log(
    `A: ${gradeA} | B: ${gradeB} | C: ${gradeC} | D: ${gradeD} | F: ${gradeF}`
);
console.log(`Total marks: ${total}`);
