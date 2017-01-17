import React from 'react'
import { Table } from 'react-bootstrap'
import { addIndex, map, times } from 'ramda'

import { HEADER_COLS } from '../state/constants'
import Row from './Row'

const mapIndexed = addIndex(map)

const addHeaderRow = (spreadsheet) => {
  const numColumns = spreadsheet[0].length

  return (
    <thead>
      <tr>
        <th></th>
        {times(
          (index) => (
            <th key={index} style={{ textAlign: 'center' }}>{HEADER_COLS[index]}</th>
          ),
          numColumns
        )}
      </tr>
    </thead>
  )
}

const getBodyRows = (spreadsheet) => {
  return mapIndexed(
    (row, index) => <Row index={index} key={index} row={row}/>,
    spreadsheet
  )
}

const Spreadsheet = ({ spreadsheet }) => {
  return (
    <Table striped bordered>
      {addHeaderRow(spreadsheet)}
      <tbody>
        {getBodyRows(spreadsheet)}
      </tbody>
    </Table>
  )
}

export default Spreadsheet
