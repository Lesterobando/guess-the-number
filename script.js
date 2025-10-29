let randomNumber;
let guessCount = 0;
let min = 1;
let max = 100;

const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const guessCountDisplay = document.getElementById("guessCount");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");

function startGame() {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    guessCount = 0;
    feedback.textContent = "Game started! Make your guess.";
    guessCountDisplay.textContent = guessCount;
    guessInput.value = "";
}

function checkGuess() {
    const guess = Number(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        feedback.textContent = `Please enter a valid number between ${min} and ${max}.`;
        return;
    }

guessCount++;
guessCountDisplay.textContent = guessCount;

if (guess === randomNumber) {
    feedback.textContent = `Correct! The number was ${randomNumber}. You guessed it in ${guessCount} tries.`;
} else if (guess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
} else {
    feedback.textContent = "Too high! Try again.";
}

guessInput.value = "";
}
// Button click events

submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", startGame);

// Allow pressing Enter to submit guess
guessInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

startGame();