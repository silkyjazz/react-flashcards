import React from "react";
import { Form } from 'react-bootstrap'

const CreateDeckForm = ({deckName}) => {

    function handleDeckName(e) {
        deckName(e.target.value)
    }

    return (
        <div>
            
                <Form.Group className="mb-3" controlId="cardQ">
                    <Form.Label className='modal-text text-center' htmlFor="deckName">Deck Name</Form.Label>        
                    <Form.Control as="textarea" onChange={handleDeckName} rows={1} />
                </Form.Group>
           
        </div>
    )
}

export default CreateDeckForm