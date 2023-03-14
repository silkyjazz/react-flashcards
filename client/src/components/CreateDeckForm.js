import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CREATE_DECK } from "../utils/mutation";
import { useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_DECKS } from "../utils/query";
import { Modal, Button } from "bootstrap";

const CreateDeckForm = () => {
    const [deckName, setDeckName] = useState('')
    const [createDeck, {error}] = useMutation(CREATE_DECK, {
        
        update(cache, { data: { createDeck } }) {
            try {
                const { decks } = cache.readQuery({ query: QUERY_DECKS})

                cache.writeQuery({
                    query: QUERY_DECKS,
                    data: { deckName: [createDeck, ...decks]}
                })
            } catch (e) {
                console.error(e)
            }

            const { user } = cache.readQuery({ query: QUERY_USER })
            cache.writeQuery({
                query: QUERY_USER,
                data: { user: { ...user, decks: [...user.decks, createDeck]}}
            })
        }

    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await createDeck({
                variables: { deckName },
            })

            setDeckName('')
        } catch (err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "deckName" && value.length <= 30) {
            setDeckName(value)
        }
    }

  return (
    <div>
         {/* <Modal.Header closeButton>
          <Modal.Title className="modal-Text">Create New Deck</Modal.Title>
        </Modal.Header>

        <Modal.Body> */}
      <Form.Group className="mb-3" controlId="cardQ">
        <Form.Label className="modal-text text-center" htmlFor="deckName">
          Deck Name
        </Form.Label>
        <Form.Control as="textarea" name="deckName" onChange={handleChange} rows={1} />
      </Form.Group>
      {/* </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleFormSubmit}>
            Save changes
          </Button>
        </Modal.Footer> */}
    </div>
  );
};

export default CreateDeckForm;
