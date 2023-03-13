import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { QUERY_DECKS } from "../utils/query";

const Decks = () => {
    const { username } = useParams();

    const { loading, data } = useQuery(QUERY_DECKS, {
      // pass URL parameter
      variables: { username: username },
    });
  
    const findAllDecks = data?.findAllDecks || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
        <div>
            <div>
                <h3>Decks!</h3>
          
        
            </div>
            </div>
        
            );
};

export default Decks;