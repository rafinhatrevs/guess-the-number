
let computerNumber
let userNumbers = [] //armazena os numeros das tentativas na aplicaçao
let attempts = 0 //numero de tentativas que inicia com 0
let maxGuesses = 10 //numero maximo de tentativas

function newGame() {
    window.location.reload()
}

function init() {
   computerNumber = Math.floor(Math.random() * 100 + 1) //gera numero randomico e arrendonda com math.floor
//   console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value) //pega o valor que está em inputBox (numero digitado pelo usuario)

    if (userNumber < 1 || userNumber > 100) {
        document.getElementById('textOutput').innerHTML = 'Enter a valid number between 1 and 100'
        document.getElementById('inputBox').value = '' //zera o campo de digitaçao
        return
    }
    
    userNumbers.push(" " + userNumber) //armazena o numero na array
    document.getElementById('guesses').innerHTML = userNumbers //retorna array no guesses

        if (attempts < maxGuesses) {
            if (userNumber > computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too high'
                document.getElementById('inputBox').value = '' //zera o campo de digitaçao
                attempts++ //adiciona 1 ao numero de tentativas
                document.getElementById('attempts').innerHTML = attempts
            }
            else if (userNumber < computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too low'
                document.getElementById('inputBox').value = '' //zera o campo de digitaçao
                attempts++ //adiciona 1 ao numero de tentativas
                document.getElementById('attempts').innerHTML = attempts
            }
            else {
                document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
                attempts++ //adiciona 1 ao numero de tentativas
                document.getElementById('attempts').innerHTML = attempts
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //para a aplicaçao
            }
        } 
        else {
            document.getElementById('textOutput').innerHTML = 'You lose!!! The computer number was: ' + computerNumber
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //para a aplicaçao
        } 
}