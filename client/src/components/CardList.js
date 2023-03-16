import React, { useState, useEffect, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
import { UPDATE_CARD } from "../utils/mutation";
import { useMutation } from "@apollo/client";

import { DeleteCardForm } from "./DeleteCardForm";
import UpdateCardModal from "./UpdateCardModal";

import { useParams } from "react-router-dom";
import { QUERY_CARD } from "../utils/query";
import { useQuery } from "@apollo/client";


const CardList = ({ deckParam, card }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
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
        show={showDeleteModal}
        onHide={handleDeleteClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
  <UpdateCardModal deckParam={deckParam} cardId={cardId}/>
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


