import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const DeckList = ({ deck }) => {
  return (
    <Link className="btn" to={`/${deck._id}/cards`}>
      {" "}
      <Card className="text-center" style={{ width: "25rem" }}>
        <Card.Text className="flashcard-text">{deck.name} </Card.Text>
      </Card>{" "}
    </Link>
  );
};

export default DeckList;
