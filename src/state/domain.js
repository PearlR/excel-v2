import { update } from 'ramda'
 
export const updateCellValue = (spreadsheet, row, cell, value) => {
  return update(
    row, 
    update(
      cell,
      { value },
      spreadsheet[row]
      ),
    spreadsheet
  )
}
