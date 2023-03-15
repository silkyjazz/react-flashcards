import React, { useState, useEffect, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";

const CardList = ({ card }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Card className="text-center" style={{ height: "300px" }}>
          <Card.Text className="flashcard-text">{card.question} </Card.Text>
          <Card.Text className="flashcard-text">{card.answer} </Card.Text>
        </Card>
        <Button
          variant="secondary"
          onClick={handleShow}
          style={{ backgroundColor: "#F7C04A" }}
          className="btn"
        >
          Update
        </Button>
        {/* //    <Button variant="secondary" onClick={handleShowLogin} style={{ backgroundColor: '#3F497F' }}  className="btn">
    //      Sign Up
    //    </Button> */}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-text" id="login-modal">
            Update Card
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="cardQ">
            <Form.Label className="modal-text text-center" htmlFor="question">
              Question
            </Form.Label>
            <Form.Control as="textarea" rows={1} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cardA">
            <Form.Label className="modal-text text-center" htmlFor="answer">
              Answer
            </Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Update
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default CardList;
