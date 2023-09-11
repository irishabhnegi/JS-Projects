import { LEVEL, CLASSES } from './data.js'

class Dashboard {
  constructor(container) {
    this.board = container
    this.grid = []
  }

  createBoard(level) {
    this.board.innerHTML = ''

    this.board.style.cssText = `grid-template-columns: repeat(16,25px);`
    level.forEach((object) => {
      const div = document.createElement('div')
      div.classList.add(CLASSES[object], 'block')
      div.style.cssText = `width: 25px; height: 25px`
      this.board.appendChild(div)
      this.grid.push(div)
    })
  }
  static gameBoard(container, level) {
    const grid = new this(container)
    grid.createBoard(level)
    return grid
  }
}

export default Dashboard
