let randomNumber;
let guessCount = 0;
let min = 0;
let max = 10;

const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const guessCountDisplay = document.getElementById("guessCount");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const winSound = document.getElementById("winsound");
const wrongSound = document.getElementById("wrongsound");
const errorSound = document.getElementById("errorSound");

function startGame() {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    guessCount = 0;
    feedback.textContent = "Game started! Make your guess.";
    guessCountDisplay.textContent = guessCount;
    guessInput.value = "";
    submitBtn.disabled = false; // Enable submit button
}

function checkGuess() {
    const guess = Number(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        feedback.textContent = `Please enter a valid number between ${min} and ${max}.`;
        errorSound.play(); // Play error sound
        return;
    }

guessCount++;
guessCountDisplay.textContent = guessCount;

if (guess === randomNumber) {
    feedback.textContent = `Correct! The number was ${randomNumber}. You guessed it in ${guessCount} tries.`;
    winSound.play(); // Play victory sound
    submitBtn.disabled = true; // Disable submit button after win

} else if (guess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
    wrongSound.play(); // Play failure sound    
} else {
    feedback.textContent = "Too high! Try again.";
    wrongSound.play(); // Play failure sound
}

guessInput.value = "";
}
// Button click events

submitBtn.addEventListener("click", checkGuess);

// Ensure sounds are reset on restart
restartBtn.addEventListener("click", () => {
    winSound.pause();
    winSound.currentTime = 0;
    wrongSound.pause();
    wrongSound.currentTime = 0;
    errorSound.pause();
    errorSound.currentTime = 0;
    startGame();
});

// Allow pressing Enter to submit guess
guessInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

startGame();

