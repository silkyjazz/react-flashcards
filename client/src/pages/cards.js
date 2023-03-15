import React, { useEffect, useState } from "react";
// route should be /:deckId/cards
// get ID of the deck
import { useParams } from "react-router-dom";
// query GET the deck on the param
import { useQuery } from "@apollo/client";
import { QUERY_DECK } from "../utils/query";

import { useMutation } from "@apollo/client";
import { CREATE_CARD, UPDATE_CARD, DELETE_CARD } from "../utils/mutation";

import logo from "../images/logo-yellow.png";
import CardList from "../components/CardList";
import { Link } from "react-router-dom";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import CreateCardForm from "../components/CreateCardForm";

function CardWithModal() {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleCardClick = () => setShowModal(true);

  // Get all cards from DB
  const { deckId: deckParam } = useParams();
  const { loading, data } = useQuery(QUERY_DECK, {
    variables: { _id: deckParam },
  });

  // Create/ update/ delete

  const study = (event) => {
    event.preventDefault();
    window.location.assign(`/${deckParam}/study`);
  };

  const cards = data?.findSingleDeck.cards || [];

  // display loading
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {/* title for the page */}
      <Row>
        <h3 className="deck-title text-center">Study Cards</h3>
        {/* STUDY BUTTON */}
        <Col xs={12} sm={12} md={4} lg={12} className="d-flex justify-content-center">
          <Card
            className="text-center  m-3"
            onClick={study} 
            id="study-btn"
          >
            <Card.Body>
              <Card.Text className="card-page-text">
                {" "}
                <img className="study-logo" src={logo} alt="logo" />
                Study
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* create new card and Card List */}
      <Row className="g-4 m-1">
        <Col xs={12} sm={12} md={4} lg={3} >
          <Card className="text-center" onClick={handleCardClick}  style={{ height: "300px" }}>
            <Card.Body>
              <Card.Text className="new-card-text">
                + Create New Card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {cards.map((card, index) => (
          <Col key={card._id} xs={12} sm={12} md={6} lg={3} className="g-4">
            <CardList card={card} id={index} />
          </Col>
        ))}
      </Row>

      {/* create new card modal */}
      <Modal
        show={showModal}
        onHide={handleModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title className="modal-text ">Create New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body id="contained-modal-title-vcenter">
          <CreateCardForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardWithModal;
