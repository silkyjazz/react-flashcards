import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Image from "../images/icon-1.png";
import deckImage from '../images/deck.png';

function Home() {
  return (
    <>
      <Container className="landing">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img src={Image} alt="Card" />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h1 className="heading">Welcome to the ultimate study tool! </h1>
            <p>
              Our flashcard study website is
              the perfect resource for anyone who wants to master any subject.
              With our interactive and customizable flashcards, you'll be able
              to study smarter, not harder.
            </p>
            <br></br>
            <p>
             Ready to start learning?
             Sign up for free. Don't miss out on this opportunity to
              revolutionize the way you study!
            </p>
          </Col>
        </Row>
        <Row className="landing-image-row m-5">
            <Col lg={4}>
            <Card.Img variant="top" src={deckImage} />
            </Col>
            <Col lg={4}>
            <Card.Img variant="top" src={deckImage} />
            </Col>
            <Col lg={4}>
            <Card.Img variant="top" src={deckImage} />
            </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
