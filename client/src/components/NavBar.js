import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Button } from "react-bootstrap";
import logo from "../images/logo-yellow.png";
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
// import Auth from '../utils/auth';

const AppNavbar = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <Navbar id="navbar">
        <Container>
          <Navbar.Brand href="/" id="title">
            <img className="navbar-logo" src={logo} alt="logo" />
            STUDY.io
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Button variant="secondary" onClick={handleShow} style={{ backgroundColor: '#3F497F' }} className="btn">
              Log In
            </Button>
            <Button variant="secondary" onClick={handleShowLogin} style={{ backgroundColor: '#3F497F' }}  className="btn">
              Sign Up
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="login-modal">Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm handleModalClose={() => setShow(false)} />
        </Modal.Body>
      </Modal>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title id="signup-modal">Create an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm handleModalClose={() => setShowLogin(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AppNavbar;

{/* <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  
  <Modal.Title id="signup-modal">Create an Account</Modal.Title>

</Modal.Header> */}
{/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
<Modal.Footer>
  <Button  variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button  variant="secondary" onClick={handleClose}>
    Save Changes
  </Button> */}
{/* </Modal.Footer> */}
{/* <Modal.Body>
  <SignUpForm handleModalClose={() => setShow(false)}/>
</Modal.Body>
</Modal> */}