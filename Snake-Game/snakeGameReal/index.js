const board = document.querySelector('.board')

let inputDir = { x: 0, y: 0 }

let lastTime = 0
const speed = 5
let snakeArr = [{ x: 14, y: 14 }]
let foodDir = { x: 5, y: 5 }

function main(ctime) {
  window.requestAnimationFrame(main)
  if ((ctime - lastTime) / 1000 < 1 / speed) {
    return
  }
  lastTime = ctime
  gameEngine()
}

function isCollide(snake) {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true
    }
  }
  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true
  }
  return false
}

function gameEngine() {
  if (isCollide(snakeArr)) {
    inputDir = { x: 0, y: 0 }
    alert('Game-over!, press any key to restart')
    snakeArr = [{ x: 13, y: 15 }]
    score = 0
  }
  if (snakeArr[0].x === foodDir.x && snakeArr[0].y === foodDir.y) {
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    })
    let a = 2
    let b = 16
    foodDir = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    }
  }

  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] }
  }

  snakeArr[0].x += inputDir.x
  snakeArr[0].y += inputDir.y

  board.innerHTML = ''
  snakeArr.forEach((e, index) => {
    let snakeElem = document.createElement('div')
    index === 0
      ? snakeElem.classList.add('head')
      : snakeElem.classList.add('body')
    snakeElem.style.gridRowStart = e.x
    snakeElem.style.gridColumnStart = e.y
    board.appendChild(snakeElem)
  })

  let food = document.createElement('div')
  food.classList.add('food')
  food.style.gridRowStart = foodDir.x
  food.style.gridColumnStart = foodDir.y
  board.appendChild(food)
}

window.requestAnimationFrame(main)

window.addEventListener('keydown', (e) => {
  inputDir = { x: 0, y: 0 }
  console.log(e.key)
  switch (e.key) {
    case 'ArrowUp':
      inputDir.x = -1
      inputDir.y = 0

      console.log(e.key)
      break
    case 'ArrowDown':
      inputDir.x = 1
      inputDir.y = 0

      console.log(e.key)
      break
    case 'ArrowLeft':
      inputDir.x = 0
      inputDir.y = -1
      console.log(e.key)
      break
    case 'ArrowRight':
      inputDir.x = 0
      inputDir.y = 1
      console.log(e.key)
      break

    default:
      break
  }
})
