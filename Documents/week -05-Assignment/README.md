Week 05 Assignment 2: Control Flow & Pattern Challenges

Course: Web Fundamentals  
Week: 05  
Assignment: Assignment 2 — Control Flow & Pattern Challenges  
Language:JavaScript  
Tools: Visual Studio Code, Node.js, Google Chrome

 1. Project Description

This project demonstrates my understanding of JavaScript control flow and problem-solving. It contains seven challenges involving conditions, loops, nested loops, switch statements, and user input.

The purpose of this assignment is to practise using JavaScript to make decisions, repeat instructions, analyze data, print patterns, and create a browser-based guessing game.

2. Project Files

week -05-Assignment/
├── decision.js
├── weeklyclass.js
├── loop.js
├── fizzbuzz.js
├── studentresults.js
├── pattern.js
├── guessing-game.html
├── guessing-game.js
├── SCREENSHOOT/
└── README.md


NOTE: The filenames above should match the actual files in my VS Code project. The guessing game can be implemented entirely in `guessing-game.html` if its JavaScript is written inside a `<script>` element.

 3. Description of the Seven Challenges

 Challenge 1: Grade Decision Engine

File:`decision.js`

This program determines a student's letter grade, feedback, and pass/fail status using a mark between 0 and 100.

It uses `if`, `else if`, and `else` to check the grade ranges.

- A: 80–100 — Excellent
- B: 70–79 — Very Good
- C: 60–69 — Good
- D: 50–59 — Pass
- F: 0–49 — Fail

It also rejects invalid marks below 0, above 100, and non-finite numbers.

Challenge 2: Weekly Class Planner

File: `weeklyclass.js`

This program uses a `switch` statement to convert a day number from 1 to 7 into the corresponding day of the week.

Tuesday, Thursday, and Saturday are class days. Monday, Wednesday, Friday, and Sunday are free-time days.

The program also handles invalid day numbers and prints the full weekly schedule using a loop.

 Challenge 3: Loop Laboratory

File: `loop.js`

This program demonstrates different loop types.

- A `for` loop prints even numbers from 2 to 50 in ascending order.
- A `while` loop prints even numbers from 50 to 2 in descending order.
- `continue` skips multiples of 6 in the range from 1 to 30.
- An extra challenge calculates the sum of odd numbers from 1 to 99.

The expected sum of odd numbers is 2500.

Challenge 4: FizzBuzz with a Twist

File: `fizzbuzz.js`

This program prints numbers from 1 to 100 using the following rules:

- Multiples of 3 become `Fizz`.
- Multiples of 5 become `Buzz`.
- Multiples of both 3 and 5 become `FizzBuzz`.

The combined condition is checked first. The program also counts the number of `FizzBuzz` outputs.

The extra challenge extends the range to 150 and introduces `Pop` for multiples of 7.

 Challenge 5: Student Results Analyzer

File: `studentresults.js`

This program analyzes eight student marks:

`[78, 45, 92, 60, 33, 87, 50, 69]`

It uses a `for...of` loop and conditions to calculate the pass count, fail count, highest mark, lowest mark, total, and average.

It also counts the A, B, C, D, and F grades without using prohibited array helper methods or `Math.max()` and `Math.min()`.

Expected results:

- Passed: 6
- Failed: 2
- Highest mark: 92
- Lowest mark: 33
- Total marks: 514
- Average: 64.25
- Grade counts: A = 2, B = 1, C = 2, D = 1, F = 2

Challenge 6: Pattern Printing Studio

File: `pattern.js`

This program uses nested loops to create six patterns with five rows:

1. Growing right triangle.
2. Inverted right triangle.
3. Centered pyramid.
4. Inverted pyramid.
5. Number staircase.
6. Hollow square.

The outer loop controls the rows, while the inner loop builds each row character by character. Spaces and stars are added according to the shape.

The patterns are constructed without using `repeat()` or hard-coding complete output rows.

 Challenge 7: Five-Attempt Guessing Game

File: `guessing-game.html`

This browser-based game asks the player to guess a secret number between 1 and 100. The required version uses the fixed secret number 37.

The game allows up to five valid attempts and displays feedback:

- `Too high` when the guess is greater than the secret number.
- `Too low` when the guess is less than the secret number.
- `Correct!` when the guess matches the secret number.

The program uses a `while` loop to manage attempts, `continue` to skip invalid input, and `break` to exit when the player wins or cancels.

Invalid input does not consume an attempt. Cancel ends the game safely. After five unsuccessful valid guesses, the program reveals the secret number.

The extra challenge replaces the fixed secret number with a random number from 1 to 100.

 4. How to Run the Programs

Requirements

- Visual Studio Code
- Node.js
- Google Chrome or another modern web browser

 Running the six console challenges

Open the project folder in VS Code. Select **Terminal → New Terminal** and run each command separately:

powershell: 

node decision.js
node weeklyclass.js
node loop.js
node fizzbuzz.js
node studentresults.js
node pattern.js


The output will appear in the VS Code terminal.

Opening the guessing game

1. Save `guessing-game.html`.
2. Open the file in Google Chrome, or use the Live Server extension in VS Code.
3. Enter guesses in the prompt dialog.
4. Press F12 in Chrome and select the Console tab to see the results.
5. Refresh the page to play again.

 5. Edge Cases Tested

| Challenge | Test case | Expected result |
|---|---|---|
| Grade engine | Mark = 0 | Grade F, FAIL |
| Grade engine | Mark = 50 | Grade D, PASS |
| Grade engine | Mark = 101 | Invalid mark |
| Weekly planner | Day = 4 | Thursday — CLASS |
| Weekly planner | Day = 8 | Invalid day message |
| Loop laboratory | Multiples of 6 | Skipped by `continue` |
| Student analyzer | Mark = 33 | FAIL |
| Guessing game | Guess = 50 | Too high |
| Guessing game | Guess = 30 | Too low |
| Guessing game | Guess = 37 | Correct! |
| Guessing game | Cancel | Game ends safely |
| Guessing game | Invalid input | No attempt consumed |

6. Screenshots and Evidence

The `SCREENSHOOT` folder contains screenshots for the assignment.

The evidence should show:

- Grade decision engine output.
- Weekly class schedule.
- Loop laboratory results.
- FizzBuzz output and count.
- Student results summary.
- All six printed patterns.
- Guessing game in the browser.
- Browser console showing the guessing game results.

7. GitHub Repository

Repository URL:Add the link to my public GitHub repository after publishing the project.

The repository contains the JavaScript challenges, guessing game, screenshots, and README documentation.
 Three Edge Cases Tested

1. Invalid grade mark: I entered `-1` in `decision.js`. The program displayed `Invalid mark` because the mark was below the allowed range of 0–100.

2. Invalid day number: I entered `8` in `weeklyclass.js`. The `default` case displayed `Invalid day number. Enter 1 to 7.` because the valid day numbers are 1–7.

3. Non-numeric guessing input: I entered `hello` in the guessing game. The program displayed an invalid-input message and continued without consuming an attempt.

 8. Conclusion

This assignment helped me practise JavaScript conditions, loops, nested loops, input validation, and problem-solving. I learned how to select appropriate control-flow structures for different tasks and how to test programs with valid and invalid inputs.
