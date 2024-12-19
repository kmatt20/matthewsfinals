const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');
const result = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');

let secretNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
let attemptsLeft = 3; // Player has 3 chances to guess

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        result.textContent = "Please enter a number between 1 and 10.";
        return;
    }

    attemptsLeft--;
    attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;

    if (userGuess === secretNumber) {
        result.textContent = `Excellent job!!! You guessed the number ${secretNumber}!`;
        guessButton.disabled = true;
        resetButton.style.display = 'block';
    } else if (attemptsLeft > 0) {
        if (userGuess < secretNumber) {
            result.textContent = "On your tip toes! A little higher!";
        } else {
            result.textContent = "Limbo! A little lower ;)";
        }
    } else {
        result.textContent = `Sorry buddy :( Better luck next time! The number was ${secretNumber}.`;
        guessButton.disabled = true;
        resetButton.style.display = 'block';
    }
});

resetButton.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 10) + 1; // Generate a new random number between 1 and 10
    attemptsLeft = 3; // Reset the number of attempts
    attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
    result.textContent = '';
    guessInput.value = '';
    guessButton.disabled = false;
    resetButton.style.display = 'none';
});
