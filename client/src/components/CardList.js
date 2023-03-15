import React, { useState } from "react";
import { Card } from "react-bootstrap";

const CardList = ({ card }) => {
  //Sets the state to false so the question text will render on the card
  const [showAnswer, setShowAnswer] = useState(false);
  //Event listener that will display the answer on click
  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  //Checks the state to render question OR answer
  const display = showAnswer ? card.answer : card.question;

  return (
    <Card
      className="text-center"
      style={{ height: "300px" }}
      onClick={handleCardClick}
    >
      {/* changing the state of the card text */}
      <Card.Text className="flashcard-text">{display} </Card.Text>
    </Card>
  );
};

export default CardList;
