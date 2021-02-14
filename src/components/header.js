/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import {Navbar, Nav} from 'react-bootstrap'
import navbar from '../assets/navbar.png'

function Header(){
    return <Navbar fixed='top' bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="/"><img css={brand} src={navbar}></img></Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
      <Nav className="ml-auto">
        <Nav.Link href="/mylist">My Pokemon</Nav.Link>
      </Nav>
    {/* </Navbar.Collapse> */}
  </Navbar>
}
const brand = css `
width: 100px;`

export default Header;