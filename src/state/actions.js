import { UPDATE_CELL } from './constants'

export const updateCell = (cell, row, value) => ({
  type: UPDATE_CELL,
  payload: {
    cell, 
    row,
    value
  }
})
