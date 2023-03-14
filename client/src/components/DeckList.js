import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const DeckList = ({ deck }) => {
  return (
    <Link className="btn" to={`/${deck._id}/cards`}>
      <Card className="text-center" style={{ height: "150px", width: "300px"}}>
        <Card.Text className="deck-text">{deck.name} </Card.Text>
      </Card>
    </Link>
  );
};

export default DeckList;
