import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand>Superhero Search</Navbar.Brand>
      <Navbar.Toggle aria-controls='#collapseNav' />
      <Navbar.Collapse id='collapseNav'>
        <Nav className='ml-auto'>
          <Link to='/'>
            <Nav.Link href='/'>Home</Nav.Link>
          </Link>
          <Link to='/search'>
            <Nav.Link href='/search'>Search</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}
