import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import CreateCardForm from "./CreateCardForm";
import { UPDATE_CARD } from "../utils/mutation";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_CARD, QUERY_DECK } from "../utils/query";

const UpdateCardModal = ({ deckParam, cardId }) => {
  const [formState, setFormState] = useState({
    question: "",
    answer: "",
  });

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const [updateCard, { error }] = useMutation(UPDATE_CARD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = updateCard({
        variables: { cardId, ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "question" && value.length <= 40) {
      setFormState({ ...formState, [name]: value });
    } else if (name === "answer" && value.length <= 50) {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title className="modal-text" id="login-modal">
          Update Card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="cardQ">
          <Form.Label className="modal-text text-center" htmlFor="question">
            Question
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            name="question"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cardA">
          <Form.Label className="modal-text text-center" htmlFor="answer">
            Answer
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="answer"
            onChange={handleChange}
          />
        </Form.Group>{" "}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleFormSubmit}>
          Save Update
        </Button>
      </Modal.Footer>
    </>
  );
};

export default UpdateCardModal;
