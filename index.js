let computer_number;
let user_numbers = [];
let attempts = 0;
let max_guesses = 10;

function newGame() {
    window.location.reload();
}

function init() {
    computer_number = Math.floor(Math.random() * 100 + 1);
}

function compareNumbers() {
    const user_number = Number(document.getElementById('input-box').value);

    if (user_number < 1 || user_number > 100) {
        document.getElementById('text-output').innerHTML = 'Enter a valid number between 1 and 100';
        document.getElementById('input-box').value = '';
        return;
    }

    user_numbers.push(' ' + user_number);
    document.getElementById('guesses').innerHTML = user_numbers;

    if (attempts < max_guesses) {
        if (user_number > computer_number) {
            document.getElementById('text-output').innerHTML = 'Your number is too high';
            document.getElementById('input-box').value = '';
            attempts++;
            document.getElementById('attempts').innerHTML = attempts;
        } else if (user_number < computer_number) {
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
        document.getElementById('text-output').innerHTML = 'You lose!!! The computer number was: ' + computer_number;
        document.getElementById('input-box').setAttribute('Readonly', 'Readonly');
    }
}