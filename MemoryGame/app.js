alert('Neste jogo de memória, tenta clicar aos pares em imagens iguais, assim que o fizeres as imagens serão eliminadas e o jogo terminará quando as encontrares todas!\n Fica atento!');

// Array of objects with card's info
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];

let cardsChosenNames = []; // Array to store the 2 cards fliped
let cardsChosenIds = []; // Array to store the 2 cards flipped ids
const cardsWon = [] // to know the matches won

// Randomize the array order
//const cardArrayRandom = cardArray;
const randomValues = cardArray.map(() => Math.random());
cardArray.sort((a, b) => randomValues[cardArray.indexOf(a)] - randomValues[cardArray.indexOf(b)]);

// Get the grid's anr result id
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const scoreLabel = document.querySelector('#score-label');

// Creates the grid and adds it to the html
function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

// Checks flipped cars match
function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    // When the same image is clicked twice
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }

    // When a match is found
    if (cardsChosenNames[0] == cardsChosenNames[1]) {
        autoAlert('You found a match!', 2000);
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosenNames);
    } else {
        // When no match is found
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        //alert('Try again!')
    }

    // Reset
    resultDisplay.textContent = cardsWon.length
    cardsChosenNames = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        scoreLabel.innerHTML = '';
        resultDisplay.textContent = 'Congratulations, you found them all!';
    }
}

// Flip the card functionality
function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosenNames.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosenNames.length === 2) {
        // calls a function after some time has passed
        setTimeout(checkMatch, 500);
        console.log(cardsChosenIds)
        console.log(cardsChosenNames)
    }
}


// Alert
function autoAlert(message, duration) {
    const alertDiv = document.createElement('div');
    alertDiv.textContent = message;
    alertDiv.classList.add('alert-div');
    document.body.appendChild(alertDiv);
  
    setTimeout(function () {
      document.body.removeChild(alertDiv);
    }, duration);
}
  