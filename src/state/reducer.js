import { times } from 'ramda'

import { COLS, ROWS } from './constants'

const defaultState = {
  spreadsheet: times(
    rowIndex => times(
      colIndex => '',
      COLS
    ),
    ROWS
  )
}

export const reducer = (state = defaultState, action) => {
  const { payload, type } = action

  switch(type) {
    default: 
      return state
  }
}