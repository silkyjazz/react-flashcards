import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_DECKS } from "../utils/query";
import { UPDATE_DECK, DELETE_DECK } from "../utils/mutation";
import DeckList from "../components/DeckList";
import { Container, Card, Modal, Button, Row, Col } from "react-bootstrap";
import CreateDeckForm from "../components/CreateDeckForm";

const Decks = () => {
  const { username: usernameParam } = useParams();
  const { loading, data } = useQuery(QUERY_DECKS, {
    variables: { username: usernameParam },
  });

  // handles visibility of createDeck Modal
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleCardClick = () => setShowModal(true);


  const decks = data?.findAllDecks || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  // TODO UPDATE_DECK, DELETE_DECK

  return (
    <Container>
    <Row>
      {/* button to show Card modal */}
      <Col md={{ span: 0 }}>
        <Card
          className="text-center"
          onClick={handleCardClick}
          style={{ width: "25rem" }}
        >
          <Card.Body>
            <Card.Text className="card-page-text">+ Create New Deck</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* modal card */}
        <Modal.Header closeButton>
          <Modal.Title className="modal-Text">Create New Deck</Modal.Title>
        </Modal.Header>

        <Modal.Body id="contained-title-vcenter">
          <CreateDeckForm />
        </Modal.Body>
        
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleFormSubmit}>
            Save changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      {/* list of our decks */}
      {decks.map((deck, index) => (
        <Col key={deck._id} xs={1} md={4} className="g-4">
          <DeckList deck={deck} id={index} />
        </Col>
      ))}
    </Row> 
    </Container>
  );
};

export default Decks;
