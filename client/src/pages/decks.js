import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_DECKS } from "../utils/query";
import { UPDATE_DECK, DELETE_DECK, } from "../utils/mutation"
import DeckList from "../components/DeckList";
import {Row, Col, Container } from "react-bootstrap";

const Decks = () => {
  const { username } = useParams();
  const { loading, data } = useQuery(QUERY_DECKS, {
    variables: { username: username },
  });

  const decks = data?.findAllDecks || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  // TODO UPDATE_DECK, DELETE_DECK

  return (
    <Container>
    <Row>
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
