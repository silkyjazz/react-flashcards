import React, { useState } from "react";
// route should be /:deckId/cards
// get ID of the deck
import { useParams } from "react-router-dom";
// query GET the deck on the param
import { useQuery } from "@apollo/client";
import { QUERY_DECK } from "../utils/query";

import logo from "../images/logo-yellow.png";
import CardList from "../components/CardList";
import { Link } from "react-router-dom";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import CreateCardForm from "../components/CreateCardForm";

function CardWithModal() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleCardClick = () => setShowModal(true);

  const study = (event) => {
    event.preventDefault();
    window.location.assign("/study");
  };

  // TODO: change to param id instead of hardcoded one
  const sampleDeckId = '640d3a2352d85bcf33334650';
  // const { deckId: deckParam } = useParams();
  // const { loading, data } = useQuery(QUERY_DECK, {
  //   variables: { _id: deckParam },
  // });

  // getting all the cards associate with the deck (params ID)
  const { loading, data } = useQuery(QUERY_DECK, {
      variables: { _id: sampleDeckId },
  });

  const cards = data?.findSingleDeck.cards || [];

  // display loading
  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {/* title for the page */}
      <Row>
        <h3 className="deck-title text-center">Study Cards</h3>
        {/* STUDY BUTTON */}
        <Col md={{ span: 3, offset: 3 }}>
          <Card
            className="text-center"
            onClick={study}
            style={{ width: "25rem" }}
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
      <Row className="g-4">
        <Col md={{ span: 0 }}>
          <Card
            className="text-center"
            onClick={handleCardClick}
            style={{ width: "25rem" }}
          >
            <Card.Body>
              <Card.Text className="flashcard-text">
                + Create New Card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* {Array.from({ length: 4 }).map((card, index) => ( */}
        {cards.map((card, index) => (
          <Col key={card._id} xs={1} md={4} className="g-4">
            <CardList card={card} id={index} />
          </Col>
        ))}
      </Row>

      {/* create new card modal */}
      <Modal
        show={showModal}
        onHide={handleModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
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
