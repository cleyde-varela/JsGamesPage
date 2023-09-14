alert('Desafia um amigo para o jogo Conecta 4!\n O jogador 1 será o vermelho e o jogador 2 o azul, vence o primeiro jogador a completar' + 
' uma fila de 4 na vertical, horizontal ou diagonal da sua cor!\n Para jogar: cada jogador deverá clicar no quadrado onde pretenda colocar a bola.');

document.addEventListener('DOMContentLoaded', () => 
{
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    const playerDisplay = document.querySelector('#player-display');
    let currentPlayer = 1;

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
      ];

    // Check for wins function
    function checkBoard() {
        for (const element of winningArrays) {
            const square1 = squares[element[0]];
            const square2 = squares[element[1]];
            const square3 = squares[element[2]];
            const square4 = squares[element[3]];

            // check those squares to see if they have the class of player-one
            if (
                square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')
                ) {
                    playerDisplay.innerHTML = '';
                    displayCurrentPlayer.textContent = '';
                    result.style.color = 'red';
                    result.innerHTML = 'Player 1 Wins!'
                    squares.forEach(function(square) {
                        square.onclick = null;
                    })
            }
            if (
                square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')
                ) {
                    playerDisplay.innerHTML = '';
                    displayCurrentPlayer.textContent = '';
                    result.style.color = 'blue';
                    result.innerHTML = 'Player 2 Wins!'
                    squares.forEach(function(square) {
                        square.onclick = null;
                    })
            }
        }
    }

    // Logic
    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            // if the square bellow your current is of class taken you can go on top of it
            if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken')) {
                if (currentPlayer == 1) {
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-one');
                    currentPlayer = 2;
                    displayCurrentPlayer.style.color = 'blue';
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else if (currentPlayer == 2) {
                squares[i].classList.add('taken');
                squares[i].classList.add('player-two');
                currentPlayer = 1;
                displayCurrentPlayer.style.color = 'red';
                displayCurrentPlayer.innerHTML = currentPlayer;
            } else alert("Can't go here");
            checkBoard();
        }
    }
}
})
