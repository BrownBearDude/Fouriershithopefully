import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function TopBar() {
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Cirlces and arms</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="">Home</Nav.Link>
          <Nav.Link as={Link} to="/app">Circles</Nav.Link>
          <Nav.Link as={Link} to="/help">Help</Nav.Link>
        </Nav>
      </Navbar>
    )
}