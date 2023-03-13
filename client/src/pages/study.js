import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
// import {useQuery} from '@apollo/client';
// import {QUERY_CARD} from '../utils/query';


function Study() {
  const [flipped, setFlipped] = useState(false);
//   const { loading, error, data } = useQuery(QUERY_CARD);

  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <Container className="flashcard-container">
      <Row>
        <Col className="mx-auto m-5 mb-5" lg={6} md={6} sm={12}>
          <Card onClick={handleClick}>
            <Card.Body className={`flashcard ${flipped ? "flipped" : ""}`}>
              <Card.Text className="flashcard-text front">
              {flipped ? "Answer" : "Question"}
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
        <Row className="mx-0">
          <Col className="d-flex justify-content-between">
            <Button
              variant="secondary"
              style={{ backgroundColor: "#F7C04A" }}
              className="mr-2"
            >
              Previous
            </Button>
            <Button variant="secondary" style={{ backgroundColor: "#F7C04A" }}>
              Next
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Study;
