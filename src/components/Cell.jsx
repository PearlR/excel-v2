import React from 'react'

const Cell = props => {
  const {
    value
  } = props

  return (
    <td>
      <input 
        className="form-control" 
        type="text" 
        value={value}
      />
    </td>
  )
}

export default Cell
