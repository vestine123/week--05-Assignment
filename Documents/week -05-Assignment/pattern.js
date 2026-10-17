
let rows = 5;

// A. Growing right triangle
console.log("A. Growing Right Triangle");

// The outer loop controls the row number.
// The inner loop adds one star for every position in that row.
for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let column = 1; column <= row; column++) {
        line += "*";
    }

    console.log(line);
}

// B. Inverted right triangle
console.log("\nB. Inverted Right Triangle");

// The outer loop decreases the number of rows' stars.
// The inner loop prints fewer stars on each new row.
for (let row = rows; row >= 1; row--) {
    let line = "";

    for (let column = 1; column <= row; column++) {
        line += "*";
    }

    console.log(line);
}

// C. Centered pyramid
console.log("\nC. Centered Pyramid");

// Leading spaces decrease while stars increase by two per row.
for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let space = 1; space <= rows - row; space++) {
        line += " ";
    }

    for (let star = 1; star <= (2 * row - 1); star++) {
        line += "*";
    }

    console.log(line);
}

// D. Inverted pyramid
console.log("\nD. Inverted Pyramid");

// Leading spaces increase while the number of stars decreases.
for (let row = rows; row >= 1; row--) {
    let line = "";

    for (let space = 1; space <= rows - row; space++) {
        line += " ";
    }

    for (let star = 1; star <= (2 * row - 1); star++) {
        line += "*";
    }

    console.log(line);
}

// E. Number staircase
console.log("\nE. Number Staircase");

// The inner loop prints numbers from 1 to the current row.
for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let number = 1; number <= row; number++) {
        line += number;
    }

    console.log(line);
}

// F. Hollow square
console.log("\nF. Hollow Square");

// The outer loop selects a row.
// The inner loop prints stars on the borders and spaces inside.
for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let column = 1; column <= rows; column++) {
        if (
            row === 1 ||
            row === rows ||
            column === 1 ||
            column === rows
        ) {
            line += "*";
        } else {
            line += " ";
        }
    }

    console.log(line);
}
