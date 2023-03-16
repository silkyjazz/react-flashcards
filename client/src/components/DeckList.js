import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const DeckList = ({ deck }) => {
  return (
    <Link className="deck-btn" to={`/${deck._id}/cards`}>
      <Card className="text-center"  style={{ height: "200px" }}>
        <Card.Text className="deck-text">{deck.name} </Card.Text>
      </Card>
    </Link>
  );
};

export default DeckList;
