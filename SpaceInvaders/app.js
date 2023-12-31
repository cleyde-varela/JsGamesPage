alert('Neste jogo tens de impedir que os alienígenas (bolinhas violeta) toquem o teu jogador (quadrado verde), dispara contra os alienígenas usando a seta de CIMA do teclado e move o jogador usando as setas da ESQUERDA e da DIREITA.\n May the force be with you!');

// Elements
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let currentShooterIndex = 202;
const width = 15;
let invadersId;
let direction = 1;
let goingRight = true;
let aliensRemoved = [];
let results = 0;

// Create div's squares
for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

// Array of squares
const squares = Array.from(document.querySelectorAll('.grid div'));

// Array of aliens
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
];

// Place the aliens inside the squares
function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!aliensRemoved.includes(i)) {
            squares[alienInvaders[i]].classList.add('invader');
        }
    }
}

draw();

function remove() {
    for (const element of alienInvaders) {
        squares[element].classList.remove('invader');
    }
}

squares[currentShooterIndex].classList.add('shooter');

// Move shooter
function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter');

    switch(e.key) {
        case 'ArrowLeft' :
            if (currentShooterIndex % width !== 0) currentShooterIndex -=1
            break
        case 'ArrowRight' :
            if (currentShooterIndex % width < width - 1) currentShooterIndex +=1
            break
    }

    squares[currentShooterIndex].classList.add('shooter');
}
document.addEventListener('keydown', moveShooter);

// Move invaders
function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
    remove();

    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width +1;
            direction = -1;
            goingRight = false;
        }
    }

    if (leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width -1;
            direction = 1;
            goingRight = true;
        }
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction;
    }

    draw();

    // Game over
    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        resultDisplay.innerHTML = 'Game Over!'
        clearInterval(invadersId);
    }

    for (const element of alienInvaders) {
        if (element > squares.length) {
            resultDisplay.innerHTML = 'Game Over!'
            clearInterval(invadersId);
        }
    }

    if (aliensRemoved.length === alienInvaders.length) {
        resultDisplay.innerHTML = 'You Win!';
        clearInterval(invadersId);
    }
}

invadersId = setInterval(moveInvaders, 163);

// Shoot function
function shoot(e) {
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');

        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.remove('invader');
            squares[currentLaserIndex].classList.add ('boom');

            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300);

            clearInterval(laserId);

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
            aliensRemoved.push(alienRemoved);
            results++;
            resultDisplay.innerHTML = results;
        }
    }

    switch(e.key) {
        case 'ArrowUp' :
            laserId = setInterval(moveLaser, 100);
     }
}

document.addEventListener('keydown', shoot);