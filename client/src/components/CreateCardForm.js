import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { CREATE_CARD } from "../utils/mutation";
import { useMutation } from '@apollo/client'

const CreateCardForm = ({ deckParam }) => {
    const [questionBody, setQuestionBody] = useState('')
    const [answerBody, setAnswerBody] = useState('')
    const [createCard, {error}] = useMutation(CREATE_CARD)

    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log(deckParam)
        try {
            console.log(questionBody)
            console.log(answerBody)
            const {data} = await createCard({
                variables: { deckId: deckParam, question: questionBody, answer: answerBody },
            })
            console.log(questionBody)
            console.log(answerBody)

            setQuestionBody('')
            setAnswerBody('')
        } catch (error) {
            console.log(JSON.stringify(error, null, 2))
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === 'questionName' && value.length <= 40) {
            setQuestionBody(value)
        } else if (name === 'answerName' && value.length <= 50) {
            setAnswerBody(value)
        }
    }

  return (
    <div>
      <>
        <Form.Group className="mb-3" controlId="cardQ">
          <Form.Label className="modal-text text-center" htmlFor="question">
            Question
          </Form.Label>
          <Form.Control
            name="questionName"
            as="textarea"
            onChange={handleChange}
            rows={1}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cardA">
          <Form.Label className="modal-text text-center" htmlFor="answer">
            Answer
          </Form.Label>
          <Form.Control name="answerName" as="textarea" onChange={handleChange} rows={2} />
        </Form.Group>

        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </>
    </div>
  );
};

export default CreateCardForm;
