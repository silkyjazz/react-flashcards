import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import logo from "../images/logo-yellow.png";
import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
// import Auth from '../utils/auth';

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar id="navbar">
        <Container>
          <Navbar.Brand href="/" id="title">
            <img className="navbar-logo" src={logo} alt="logo" />
            STUDY.io
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Button variant="secondary" onClick={handleShow} style={{ backgroundColor: '#F7C04A' }} className="btn">
              Log In
            </Button>
            <Button variant="secondary" onClick={handleShow} style={{ backgroundColor: '#F7C04A' }}  className="btn">
              Sign Up
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title  id='signup-modal'>Create an account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <SignUpForm handleModalClose={() => setShow(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AppNavbar;
