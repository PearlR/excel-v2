import React from 'react'
import { connect } from 'react-redux'

import ControlBar from './ControlBar'
import Spreadsheet from './Spreadsheet'

const App = ({ spreadsheet }) => {
  return (
    <div className="App">
      <ControlBar />
      <Spreadsheet spreadsheet={spreadsheet} />
    </div>
  )
}

const mapStateToProps = ({ spreadsheet }) => {
  return {
    spreadsheet
  }
}

export default connect(mapStateToProps)(App)
