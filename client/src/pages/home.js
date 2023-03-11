import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
// import Image from "../images/icon-1.png";
import lpDeck from '../images/deck.png';
import lpCard from '../images/card.png';
import lpHabit from '../images/habit.png';

function Home() {
 
  return (
    <>
      <Container className="landing-container">
        <Row>
          <Col lg={6} md={6} sm={12} className="text-center">
            <h1 className="heading">Welcome to the ultimate study tool! </h1>
            <p className= "landing-text">
              Our flashcard study website is
              the perfect resource for anyone who wants to master any subject.
              With our interactive and customizable flashcards, you'll be able
              to study smarter, not harder.
            </p>
            <br></br>
            <p className= "landing-text">
             Ready to start learning?
             Sign up for free. Don't miss out on this opportunity to
              revolutionize the way you study!
            </p>
          </Col>
        </Row>
   </Container>
   <Container>
        <Row>
            <Col className="landing-middle" lg={4} sm={6}>
            <img src={lpDeck} className="landing-images" alt="Create a deck" />
            </Col>
            <Col  className="landing-middle"lg={4} sm={6}>
            <img src={lpCard} className="landing-images"  alt="Create a deck" />
            </Col>
            <Col  className="landing-middle" lg={4} sm={6}>
            <img src={lpHabit} className="landing-images"  alt="Create a deck" />
            </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
