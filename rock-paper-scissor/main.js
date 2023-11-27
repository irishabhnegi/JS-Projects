const computerChoice = document.querySelector('.computer-choice');
const playerChoice = document.querySelector('.player-choice');
const result = document.querySelector('.result');
const playButtons = document.querySelector('.play-buttons');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const scoreComp = document.querySelector('.score');
let score = 0;

function handlePlayerChoice(target) {
  playerChoice.innerText = `Your choice: ${target}`;
}

function handleComputerChoice() {
  const arr = ['Rock', 'Paper', 'Scissor'];
  let random = Math.floor(Math.random() * 3);
  computerChoice.innerText = `Computer choice: ${arr[random]}`;
  return arr[random];
}

function youWin() {
  result.innerText = `Result: You win!`;
  score++;
}
function youLose() {
  result.innerText = `Result: You lose!`;
  score--;
}

function handleWinner(player, computer) {
  if (player === computer) {
    result.innerText = `Result: Draw!`;
  } else if (player === 'Rock' && computer === 'Scissor') {
    youWin();
  } else if (player === 'Paper' && computer === 'Rock') {
    youWin();
  } else if (player === 'Scissor' && computer === 'Paper') {
    youWin();
  } else if (computer === 'Rock' && player === 'Scissor') {
    youLose();
  } else if (computer === 'Paper' && player === 'Rock') {
    youLose();
  } else if (computer === 'Scissor' && player === 'Paper') {
    youLose();
  }
}

function reset() {
  computerChoice.innerText = `Computer choice:`;
  playerChoice.innerText = `Your choice:`;
  result.innerHTML = 'Result:';
  score = 0;
  console.log('test');
}

function handleScore() {
  if (score >= 3) {
    reset();
    scoreComp.innerText = 'You Won The Game!';
  } else if (score <= -3) {
    reset();
    scoreComp.innerText = 'You Lose The Game!';
  } else {
    const markup = `Score: <span class="red">-3</span> ${score} <span class="green">3</span>
  </div>`;
    scoreComp.innerHTML = '';
    scoreComp.insertAdjacentHTML('afterbegin', markup);
  }
}

playButtons.addEventListener('click', (e) => {
  e.preventDefault();
  const playerText = e.target.innerText;
  if (
    playerText === 'Rock' ||
    playerText === 'Paper' ||
    playerText === 'Scissor'
  ) {
    handlePlayerChoice(playerText);
    const computerText = handleComputerChoice();
    handleWinner(playerText, computerText);
    handleScore();
  }
  console.log(playerText);
});
