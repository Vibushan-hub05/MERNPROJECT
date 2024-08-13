import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="sandal-bg">
      <Container className='change'>
        <Navbar.Brand as={Link} to="/" className="nav-brand" >
          <FaUtensils style={{ marginRight: '8px', fontWeight:'bolder'}} className='icon'/> <b className='tit'>Tasty'Hut</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links nai" >
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/recipe">
              <FontAwesomeIcon icon={faBook} /> Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/favourites">
              <FontAwesomeIcon icon={faStar} /> My Favourites
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto nav-buttons but">
            <Nav.Link as={Link} to="/login" className="login-btn " >Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" className="register-btn">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
