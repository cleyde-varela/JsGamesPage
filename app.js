alert('Para a minha irmã Katylla,\n Com amor,\n Swailla.')

// Variables
const grid = document.querySelector('.grid-landing-page');

// Class game
class Game {
    constructor(name, color, pageLink) {
        this.name = name;
        this.color = color;
        this.pageLink = pageLink;
    }
}

const gamesInfo = [
    new Game('Rock Paper Scissors', 'Red', 'RockPaperScissors/index.html'),
    new Game('Connect Four', 'Yellowgreen', 'ConnectFour/index.html'),
    new Game('Whac a mole', 'Pink', 'WhacAMole/index.html'),
    new Game('Memory Game', 'Orange', 'MemoryGame/index.html'),
    //new Game('Frogger', 'Green', 'Frogger/index.html'),
    new Game('Breakout', 'Purple', 'Breakout/index.html'),
    new Game('Space Invaders', 'Blue', 'SpaceInvaders/index.html')
]

// Create cards and add games'info
for (let i = 0; i < gamesInfo.length; i++) {
    // Add card
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = gamesInfo[i].color;

    //Add label
    const label = document.createElement('div');
    label.classList.add('label');
    label.textContent = gamesInfo[i].name;

    // Add click on label
    label.addEventListener('click', function() {
        //window.open(gamesInfo[i].pageLink, "_blank"); // to open the link in a new tab
        window.location.href = gamesInfo[i].pageLink;
    });

    card.appendChild(label);
    grid.appendChild(card);
};