import { times } from 'ramda'

import { 
  COLS, 
  ROWS, 
  UPDATE_CELL 
} from './constants'
import { updateCellValue } from './domain'

const defaultState = {
  spreadsheet: times(
    rowIndex => times(
      colIndex => '',
      COLS
    ),
    ROWS
  )
}

export const reducer = (state = defaultState, actions) => {
  const { 
    payload, 
    type 
  } = actions

  switch(type) {
    case UPDATE_CELL:
      return {
        ...state,
        spreadsheet: updateCellValue(
          state.spreadsheet,
          payload.row,
          payload.cell,
          payload.value
        )
      }
    default:
      return state
  }
}
