import React from 'react'
import { connect } from 'react-redux'

import { updateCell } from '../state/actions'

const Cell = (props) => {
  const {
    handleChange,
    value
  } = props

  return (
    <td>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </td>
  )
}

const mapStateToProps = ({ spreadsheet }, { cell, row }) => {
  return {
    value: spreadsheet && spreadsheet[row][cell].value
  }
}

const mapDispatchToProps = (dispatch, { cell, row }) => {
  return {
    handleChange(event) {
      dispatch(updateCell(row, cell, event.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
