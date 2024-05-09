let computer_number; // numero gerado pelo computador
let user_numbers = []; // array para armazenar os numeros digitados pelo usuario
let attempts = 0; // numero de tentativas
let max_guesses = 10; // numero maximo de tentativas

function newGame() {
    window.location.reload();
}

function init() {
    computer_number = Math.floor(Math.random() * 100 + 1); // gera numero randomico e arrendonda com math.floor
}

function compareNumbers() {
    const user_number = Number(document.getElementById('input-box').value); // recebe o numero digitado pelo usuario

    if (user_number < 1 || user_number > 100) {
        document.getElementById('text-output').innerHTML = 'Enter a valid number between 1 and 100';
        document.getElementById('input-box').value = ''; // zera o campo de digitaçao
        return;
    }

    user_numbers.push(' ' + user_number); // armazena o numero no array
    document.getElementById('guesses').innerHTML = user_numbers; // retorna array nos palpites

    if (attempts < max_guesses) {
        if (user_number > computer_number) {
            document.getElementById('text-output').innerHTML = 'Your number is too high';
            document.getElementById('input-box').value = ''; // zera o campo de digitaçao
            attempts++; // adiciona 1 ao numero de tentativas
            document.getElementById('attempts').innerHTML = attempts;
        } else if (user_number < computer_number) {
            document.getElementById('text-output').innerHTML = 'Your number is too low';
            document.getElementById('input-box').value = ''; // zera o campo de digitaçao
            attempts++; // adiciona 1 ao numero de tentativas
            document.getElementById('attempts').innerHTML = attempts;
        } else {
            document.getElementById('text-output').innerHTML = 'Congratulations!!!';
            attempts++; // adiciona 1 ao numero de tentativas
            document.getElementById('attempts').innerHTML = attempts;
            document.getElementById('input-box').setAttribute('Readonly', 'Readonly'); // para a aplicaçao
        }
    } else {
        document.getElementById('text-output').innerHTML = 'You lose!!! The computer number was: ' + computer_number;
        document.getElementById('input-box').setAttribute('Readonly', 'Readonly'); // para a aplicaçao
    }
}