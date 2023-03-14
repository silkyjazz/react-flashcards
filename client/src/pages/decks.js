import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_DECKS } from "../utils/query";
import { UPDATE_DECK, DELETE_DECK, } from "../utils/mutation"
import DeckList from "../components/DeckList";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import CreateDeckForm from "../components/CreateDeckForm";

const Decks = () => {
  const { username: usernameParam } = useParams();
  const { loading, data } = useQuery(QUERY_DECKS, {
    variables: { username: usernameParam },
  });
    const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleCardClick = () => setShowModal(true);
  const decks = data?.findAllDecks || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  
  // TODO UPDATE_DECK, DELETE_DECK

  return (
    
    <Row>
        <Col md={{ span: 0 }}>
                <Card
                  className="text-center"
                  onClick={handleCardClick}
                  style={{ width: "25rem" }}
                >
                  <Card.Body>
                    <Card.Text className="card-page-text">
                      + Create New Deck
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Modal
                show={showModal}
                onHide={handleModalClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <CreateDeckForm/>
                </Modal>
      {decks.map((deck, index) => (
        <Col key={deck._id} xs={1} md={4} className="g-4">
        <DeckList deck={deck} id={index} />
        </Col>
      ))}
    </Row>
  );
};

export default Decks;
