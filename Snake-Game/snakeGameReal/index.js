const board = document.querySelector('.board')

let inputDir = { x: 0, y: 0 }

let lastTime = 0
let speed = 5
let snakeArr = [{ x: 13, y: 15 }]
let foodDir = { x: 4, y: 6 }

function gameEngine() {
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

function main(ctime) {
  window.requestAnimationFrame(main)
  if ((ctime - lastTime) / 1000 < 1 / speed) {
    return
  }
  lastTime = ctime
  gameEngine()
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
