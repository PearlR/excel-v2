import React from 'react'

import { addIndex, map } from 'ramda'
import Cell from './Cell'

const mapIndexed = addIndex(map)

const getRowCells = (rowIndex, row) => {
  return mapIndexed(
    (data, index) => <Cell cell={index} key={index} row={rowIndex} data={data} />,
    row
  )
}

const Row = ({ index, row }) => {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      {getRowCells(index, row)}
    </tr>
  )
}

export default Row
