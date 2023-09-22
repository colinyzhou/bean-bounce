import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../assets/logo.png'


const Header = () => {
  return (
    <header style={{ backgroundColor: '#4A2B1D', fontFamily: 'cursive' }}>
      <Navbar bg="dark" variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt="Proshop" />
              Proshop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <NavbarCollapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>

              <LinkContainer to='/cart'>
                <Nav.Link><FaShoppingCart />Cart</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link><FaUser />Sign In</Nav.Link>
              </LinkContainer>

            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  )
}


export default Header
