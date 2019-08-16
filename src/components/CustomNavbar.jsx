import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
           <Navbar.Brand>
            <Link to="/">Blog</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse>
          <Nav className="mr-auto justify-content-end" style={{ width: "90%" }}>
            <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/About">About</Nav.Link>

            <Nav.Link href="/News">News</Nav.Link>
            <Nav.Link href="/search">Weather</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
