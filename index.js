let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 10;

function newGame() {
    window.location.reload();
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('input-box').value);

    if (userNumber < 1 || userNumber > 100) {
        document.getElementById('text-output').innerHTML = 'Enter a valid number between 1 and 100';
        document.getElementById('input-box').value = '';
        return;
    }

    userNumbers.push(' ' + userNumber);
    document.getElementById('guesses').innerHTML = userNumbers;

    if (attempts < maxGuesses) {
        if (userNumber > computerNumber) {
            document.getElementById('text-output').innerHTML = 'Your number is too high';
            document.getElementById('input-box').value = '';
            attempts++;
            document.getElementById('attempts').innerHTML = attempts;
        } else if (userNumber < computerNumber) {
            document.getElementById('text-output').innerHTML = 'Your number is too low';
            document.getElementById('input-box').value = '';
            attempts++;
            document.getElementById('attempts').innerHTML = attempts;
        } else {
            document.getElementById('text-output').innerHTML = 'Congratulations!!!';
            attempts++;
            document.getElementById('attempts').innerHTML = attempts;
            document.getElementById('input-box').setAttribute('Readonly', 'Readonly');
        }
    } else {
        document.getElementById('text-output').innerHTML = 'You lose!!! The computer number was: ' + computerNumber;
        document.getElementById('input-box').setAttribute('Readonly', 'Readonly');
    }
}
