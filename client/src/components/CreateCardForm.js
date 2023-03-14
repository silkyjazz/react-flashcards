import React from 'react';
import { Form } from "react-bootstrap";

const CreateCardForm = ({ question, answer}) => {
    
    function handleQuestionChange(e) {
       question(e.target.value)
    }

    function handleAnswerChange(e) {
       answer(e.target.value)
    }

    return (
        <div>
            <>
                <Form.Group className="mb-3" controlId="cardQ">
                    <Form.Label className='modal-text text-center' htmlFor="question">Question</Form.Label>        
                    <Form.Control as="textarea" onChange={handleQuestionChange} rows={1} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cardA">
                    <Form.Label className='modal-text text-center' htmlFor="answer">Answer</Form.Label>        
                    <Form.Control as="textarea" onChange={handleAnswerChange} rows={2} />
                </Form.Group>    
            </>
        </div>
    );
};

export default CreateCardForm;
