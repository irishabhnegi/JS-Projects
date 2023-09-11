const board = document.querySelector('.board')

let direction = { x: 0, y: 1 }

let lastTime = 0
let speed = 2
let snakeArr = [{ x: 13, y: 15 }]
let foodDir = { x: 4, y: 6 }

function gameEngine() {
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
  console.log(e.key)
  switch (e.key) {
    case 'ArrowUp':
      console.log('up')
      break
    case 'ArrowDown':
      console.log('down')
      break
    case 'ArrowLeft':
      console.log('left')
      break
    case 'ArrowRight':
      console.log('right')
      break

    default:
      break
  }
})
