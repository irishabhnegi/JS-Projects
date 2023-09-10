import { LEVEL, CLASSES } from './data.js'

class Dashboard {
  constructor(container) {
    this.container = container
    this.grid = []
  }

  createBoard(level) {
    this.container.innerHTML = ''

    this.container.style.cssText = `grid-template-columns: repeat(16,25px);`
    level.forEach((object) => {
      const div = document.createElement('div')
      div.classList.add(CLASSES[object], 'block')
      div.style.cssText = `width: 25px; height: 25px`
      this.container.appendChild(div)
      this.grid.push(div)
    })
  }
  static gameBoard(container, level) {
    const board = new this(container)
    board.createBoard(level)
    return board
  }
}

export default Dashboard
