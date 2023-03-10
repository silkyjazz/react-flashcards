import { Card} from "react-bootstrap";

const CardList = ({card}) => {
  return (
    <Card className="text-center"  style={{ height: "300px" }}>
        <Card.Text className="flashcard-text">{card.question} </Card.Text>
        <Card.Text className="flashcard-text">{card.answer} </Card.Text>
    </Card>
  );
};

export default CardList;
