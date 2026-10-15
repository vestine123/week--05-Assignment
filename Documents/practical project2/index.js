const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secret = Math.floor(Math.random() * 20) + 1;
const maxAttempts = 5;
let attempts = 0;
let won = false;

function askGuess() {
  if (attempts >= maxAttempts) {
    console.log("Game over! The number was " + secret);
    rl.close();
    return;
  }

  rl.question("Guess a number between 1 and 20: ", function(input) {
    const guess = Number(input);

    if (input.trim() === "" || Number.isNaN(guess)) {
      console.log("Please enter a valid number!");
      askGuess();
      return;
    }

    attempts++;

    if (guess === secret) {
      won = true;
      console.log("Congratulations! You won!");
      rl.close();
      return;
    } else if (guess < secret) {
      console.log("Too low! Try again.");
    } else {
      console.log("Too high! Try again.");
    }

    askGuess();
  });
}

askGuess();