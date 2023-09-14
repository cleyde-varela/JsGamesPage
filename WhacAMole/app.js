alert('Neste jogo tens 15 segundos para clicar o maior número de vezes no bichinho usando o botão esquerdo do rato ou dando um duplo clique, chama um amigo e vejam quem é o mais rápido!\nNão deixes o bichinho escapar!!');
// Get elements
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

// Global variables
let result = 0;
let hitPosition;
let timerId = null;
let currentTime = 15;
let countDownTimerId = setInterval(countDown, 1000)

// Random square to place the mole in
function randomSquare() {
    // Remove the mole from the square it may be in
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    // Place the mole in a random square
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

// Event listeners
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})


// Moves the mole after a certain amount of time
function moveMole() {
    timerId = setInterval(randomSquare, 800);
}

moveMole();

// Timer functionality
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        score.textContent = '0';
        alert('The game is over! Your final score is ' + result);
    }
}