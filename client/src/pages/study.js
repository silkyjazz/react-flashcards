import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import {useQuery} from '@apollo/client';
import {QUERY_DECK} from '../utils/query';

// const deckId='6410bf0ced9d1fd11327a177';

function Study({deckId}) {

  const [flipped, setFlipped] = useState(false);
  const { loading, error, data } = useQuery(QUERY_DECK, {
    variables: {deckId},
  });
  const [cards, setCards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    if(data){
      const shuffledCards = data.queryDeck.cards.sort(() => Math.random() - 0.5);
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
              {flipped ? currentCard.answer : currentCard.question}
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
        <Row className="mx-0">
          <Col className="d-flex justify-content-between">
            <Button
              variant="secondary"
              style={{ backgroundColor: "#F7C04A" }}
              // className="mr-2"
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
