const matchedCont = document.querySelector('.matched');
const chancesCont = document.querySelector('.chances');
const scoreCont = document.querySelector('.score');
const cards = document.querySelector('.cards');

// function injectCards() {}

let imageArr = [
  './images/cheeseburger.png',
  './images/cheeseburger.png',
  './images/fries.png',
  './images/fries.png',
  './images/hotdog.png',
  './images/hotdog.png',
  './images/ice-cream.png',
  './images/ice-cream.png',
  './images/milkshake.png',
  './images/milkshake.png',
  './images/pizza.png',
  './images/pizza.png',
];

// fisher-yates shuffle algo
let shuffled;

function shuffleArray(arr) {
  shuffled = [...arr];
  for (let i = imageArr.length - 1; i >= 0; i--) {
    let random = Math.floor(Math.random() * imageArr.length);
    [[shuffled[i]], shuffled[random]] = [[shuffled[random]], shuffled[i]];
  }
}
shuffleArray(imageArr);
console.log(shuffled);

let chances = 0;
let matched = 0;
let score = 0;

let storedVal = null;
let clickedIndex = 0;
// let clickedIndex2
let target1;
// let target2
let count = 0;

function updateResults(matched, chances, score) {
  matchedCont.innerText = `Matched: ${matched}`;
  chancesCont.innerText = `Chances: ${chances}`;
  scoreCont.innerText = `Score: ${score}`;
}

function handleClick(e) {
  let target = e.target;
  if (target.getAttribute('class') !== 'cards') {
    if (!storedVal) {
      target1 = target;
      clickedIndex = target.getAttribute('class');
      //   console.log(clickedIndex);
      storedVal = shuffled[clickedIndex];
      //   console.log(storedVal);
      target.setAttribute('src', storedVal);
    } else {
      if (target.getAttribute('class') !== clickedIndex) {
        const clickedIndex2 = target.getAttribute('class');
        let storedVal2 = shuffled[clickedIndex2];
        console.log(clickedIndex2);
        console.log(storedVal2);
        target.setAttribute('src', storedVal2);
        chances++;
        if (storedVal === storedVal2) {
          setTimeout(() => {
            target1.setAttribute('src', './images/white.png');
            target.setAttribute('src', './images/white.png');
          }, 1200);
          matched++;
          score = Math.floor((matched / chances) * 1000);
          storedVal = '';
          clickedIndex = 0;
          count++;
        } else {
          setTimeout(() => {
            target1.setAttribute('src', './images/blank.png');
            target.setAttribute('src', './images/blank.png');
          }, 1200);
          score = Math.floor((matched / chances) * 1000);
          storedVal = '';
          clickedIndex = 0;
        }
      }
      updateResults(matched, chances, score);
      //   cards.removeEventListener('click', handleClick);
      //   console.log(target1);
      //   console.log(target);
    }
  }

  if (count >= 6) {
    const elem = document.createElement('h1');
    elem.innerText = `You Won! And Your Score is ${score}`;
    cards.innerHTML = elem;
  }
}

cards.addEventListener('click', handleClick);
