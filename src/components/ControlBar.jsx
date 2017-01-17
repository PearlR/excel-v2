import React from 'react'
import {
  Button,
  Navbar
} from 'react-bootstrap'

const ControlBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Excel</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight>
          <Button type="button" bsStyle="danger">Reset</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ControlBar
