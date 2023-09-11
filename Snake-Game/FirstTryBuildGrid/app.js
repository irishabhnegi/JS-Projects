import { OBJECT_TYPE, LEVEL, CLASSES } from './data.js'
import Dashboard from './dashboard.js'

export const container = document.querySelector('.container')

const board = Dashboard.gameBoard(container, LEVEL)
