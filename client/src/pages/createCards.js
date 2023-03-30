import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { QUERY_DECK } from '../utils/query'
import { CREATE_DECK } from '../utils/mutation'
import { Card, Modal, Button, Row, Col } from "react-bootstrap";


const Deck = () => {
   

    const create = (event) => {
        event.preventDefault();
        window.location.assign("/decks");
    };

    return (
        <div className='container'>
            <div className='deck-title text-center'>
                <h1>Create a New Deck</h1>
            </div>
            {/* <div className='deck-body'> */}
                {/* {loading ? ( */}
                    {/* <div>Loading...</div>
                ) : (
                    // <form onSubmit={handleFormSubmit}>
                    <form>
                        <div className=''>
                            <label>Deck Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Question 1</label>
                            <input type="text" name="question1" />
                        </div>
                        <div>
                            <label>Question 2</label>
                            <input type="text" name="question2" />
                        </div>
                        <div>
                            <label>Question 3</label>
                            <input type="text" name="question3" />
                        </div>
                        <div>
                            <label>Question 4</label>
                            <input type="text" name="question4" />
                        </div>
                        <div>
                            <label>Question 5</label>
                            <input type="text" name="question5" />
                        </div>
                        <div>
                            <label>Question 6</label>
                            <input type="text" name="question6" />
                        </div>
                        <div>
                            <label>Question 7</label>
                            <input type="text" name="question7" />
                        </div>
                        <div>
                            <label>Question 8</label>
                            <input type="text" name="question8" />
                        </div>
                        <div>
                            <label>Question 9</label>
                            <input type="text" name="question9" />
                        </div>
                        <div>
                            <label>Question 10</label>
                            <input type="text" name="question10" />
                        </div>
                        <button className='btn' type='submit'>
                            Create new Deck
                        </button>
                    </form>
                )} */}
                   <Button variant="secondary" onClick={create}>
            Create Deck
          </Button>
            </div>
            // {/* {error && <div>Somthing went wrong...</div>} */}
        // </div>
    )
}

export default Deck;