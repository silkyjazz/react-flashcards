import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import {useQuery} from '@apollo/client';
import {QUERY_DECK} from '../utils/query';
import { useParams } from "react-router-dom";


function Study({deckId}) {

  const [flipped, setFlipped] = useState(false);

  //Get all cards by deck ID
  //Display question
  //Show answer on click
  //Click through array of cards
  //Shuffle deck


  const { deckId: deckParam } = useParams();

  const { loading, data, error } = useQuery(QUERY_DECK, {
    variables: { _id: deckParam },
  });

  const [cards, setCards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    if(data){
      const shuffledCards = data.findSingleDeck.cards.sort(() => Math.random() - 0.5);
      setCards(shuffledCards);
    }
  }, [data]);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const currentCard = cards[currentIndex];

  return (
    <Container className="flashcard-container">
      <Row>
        <Col className="mx-auto m-5 mb-5" lg={6} md={6} sm={12}>
          <Card onClick={handleClick}>
            <Card.Body className={`flashcard ${flipped ? "flipped" : ""}`}>
              <Card.Text className="flashcard-text front">
              {flipped ? currentCard.findSingleDeckanswer : currentCard.findSingleDeck.question}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Row className="mx-0">
          <Col className="d-flex justify-content-between">
            <Button
              variant="secondary"
              style={{ backgroundColor: "#F7C04A" }}
              onClick={handlePrev}
            >
              Previous
            </Button>
            <Button variant="secondary" 
             onClick={handleNext} 
             style={{ backgroundColor: "#F7C04A" }}>
              Next
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Study;
