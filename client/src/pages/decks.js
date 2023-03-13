import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { QUERY_DECKS } from "../utils/query";

import { Link } from "react-router-dom";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";


const Decks = () => {
    // const { username } = useParams();

    // const { loading, data } = useQuery(QUERY_DECKS, {
    //   // pass URL parameter
    //   variables: { username: username },
    // });
  
    // const findAllDecks = data?.findAllDecks || {};
  
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
    
    return (
        <div>
            <div>
                <h3 className="text-center">Card Decks</h3>
          
        
            </div>

            <>
            <Link to="/create">
        <Card className="text-center" style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Text className="card-page-text">+ Create NewDeck</Card.Text>
          </Card.Body>
        </Card>
        </Link>
        </>
            </div>
        
            );
};

export default Decks;