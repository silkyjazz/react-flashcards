import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const DeckList = ({ deck }) => {
  return (
    <Card className="text-center" style={{ width: "25rem" }}>
      <Link className="btn" to={`/${deck._id}/cards`}>
        <Card.Text className="flashcard-text">{deck.name} </Card.Text>
      </Link>
    </Card>
  );
};

export default DeckList;
