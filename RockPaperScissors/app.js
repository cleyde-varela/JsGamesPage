
alert('Clica numa das 3 opcões PEDRA PAPEL ou TESOURA, e tenta a tua sorte contra o computador!');

// Get elements from index.html
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

// Buttons event listener
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
}))

// Generate computer choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or possibleChoices.length\\

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    /** or using a switch case
    switch (randomNumber) {
    case 1:
        computerChoice = 'rock';
        break;
    case 2:
        computerChoice = 'paper';
        break;
    default:
        computerChoice = 'scissors';
        break;}

     */

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "User wins!";
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "Computer wins!";
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "Computer wins!";
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "User wins!";
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "User wins!";
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "Computer wins!";
    }

    resultDisplay.innerHTML = result;
}