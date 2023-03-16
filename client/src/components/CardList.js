import React, { useState, useEffect, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
// import { UPDATE_CARD } from "../utils/mutation";
// import { useMutation } from "@apollo/client";

import { DeleteCardForm } from "./DeleteCardForm";

const CardList = ({ deckParam, card }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteMondal, setShowDeleteModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleDeleteClose = () => setShowDeleteModal(false);
  const handleDeleteShow = () => setShowDeleteModal(true);

  //Sets the state to false so the question text will render on the card
  const [showAnswer, setShowAnswer] = useState(false);
  //Event listener that will display the answer on click
  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };
  //Checks the state to render question OR answer
  const display = showAnswer ? card.answer : card.question;
  const cardId = card._id;

  return (
    <>
      <div>
        <Card
          className="text-center"
          style={{ height: "200px" }}
          onClick={handleCardClick}
        >
          {/* changing the state of the card text */}
          <Card.Text className="flashcard-text">{display} </Card.Text>
        </Card>

        <Button
          variant="secondary"
          onClick={handleDeleteShow}
          style={{ backgroundColor: "#F7C04A" }}
          className="btn"
        >
          Update
        </Button>

        <Button
          variant="danger"
          onClick={handleShow}
          className="btn"
        >
          Delete
        </Button>
      </div>

      {/* update modal */}
      <Modal
        show={showDeleteMondal}
        onHide={handleDeleteClose}
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
          {/*TODO: use handleSubmit for updating */}
          <Button variant="primary" onClick={handleClose}>
            Save Update
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <DeleteCardForm deckParam={deckParam} cardId={cardId}/>
      </Modal>
    </>
  );
};

export default CardList;
