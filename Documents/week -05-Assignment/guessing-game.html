<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Five-Attempt Guessing Game</title>
</head>
<body>
  <h1>Guessing Game</h1>
  <p>guess a number from 1 to 100.</p>

  <script>
    // Fixed secret number for the required challenge.
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    const maxAttempts = 5;

    let attempts = 0;
    let guessedCorrectly = false;

    // The loop allows at most five attempts.
    while (attempts < maxAttempts) {
      const answer = prompt(`Guess ${attempts + 1}: Enter a number from 1 to 100`);

      // Cancel exits the game without crashing.
      if (answer === null) {
        console.log("Game cancelled.");
        break;
      }

      const guess = answer.trim();

      // Invalid input does not consume an attempt.
      if (guess === "" || !Number.isFinite(Number(guess))) {
        alert("Please enter a valid number.");
        continue;
      }

      const number = Number(guess);

      // Only guesses between 1 and 100 are accepted.
      if (!Number.isInteger(number) || number < 1 || number > 100) {
        alert("Enter a whole number from 1 to 100.");
        continue;
      }

      attempts++;

      if (number > secretNumber) {
        console.log(`Guess ${attempts}: ${number} → Too high`);
        alert("Too high!");
      } else if (number < secretNumber) {
        console.log(`Guess ${attempts}: ${number} → Too low`);
        alert("Too low!");
      } else {
        console.log(`Guess ${attempts}: ${number} → Correct!`);
        alert("Correct!");
        guessedCorrectly = true;
        break;
      }
    }

    // Reveal the secret after five unsuccessful valid guesses.
    if (!guessedCorrectly && attempts === maxAttempts) {
      console.log(`Game over! The secret number was ${secretNumber}.`);
      alert(`Game over! The secret number was ${secretNumber}.`);
    }
  </script>
</body>
</html>