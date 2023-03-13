import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { QUERY_DECK } from "../utils/query";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import CardList from '../components/CardList';

const CardPage = () => {
    const { deckId } = useParams();

    const { loading, data } = useQuery(QUERY_DECK, {
      // pass URL parameter
      variables: { deckId: deckId },
    });
  
    const findAllDecks = data?.findAllDecks || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
<div>
    <div>
        <h3>${findAllDecks.name} study cards!</h3>
    </div>

        <div>
        <Link to={{pathname: "createCardModal", state: {modal: true},}} className="link">
        <Card className="text-center">
            <Card.Body>
                <Card.Text>+ Create New card</Card.Text>
            </Card.Body>
        </Card>
    </Link>

<div>
<CardList/>
</div>

    </div>
    </div>

    );
};

export default CardPage;
