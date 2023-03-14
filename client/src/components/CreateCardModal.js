import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateCardForm from './CreateCardForm';
import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import Form from 'react-bootstrap/Form'
import { QUERY_CARD, QUERY_DECK } from "../utils/query";
import { CREATE_CARD } from "../utils/mutation";



function AddCardModal() {
  const [username, setUsername] = useState({
    _id: "",
    question: "",
    answer: "",
    // createdAt: "",
  });

    const [createCard, { error }] = useMutation(CREATE_CARD, {
        update(cache, { data: { createCard } }) {
          try {
            const { cards } = cache.readQuery({ query: QUERY_CARD });
    
            cache.writeQuery({
              query: QUERY_CARD,
              data: { cards: [createCard, ...cards] },
            });
          } catch (e) {
            console.error(e);
          }
    
          const { deck } = cache.readQuery({ query: QUERY_DECK });
          cache.writeQuery({
            query: QUERY_DECK,
            data: { deck: { ...deck, cards: [...deck.cards, createCard] } },
          });
        },
      });
      

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('nerd')
    try {
      const { data } = await createCard({
        // variables: {
        //   question,
        //   thoughtAuthor: Auth.getProfile().data.username,
        // },
      });

      setUsername('');
    } catch (err) {
      console.error(err);
    }}
    console.log('test')
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>The correct answer is</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleFormSubmit}>
        <Modal.Body>
      <CreateCardForm/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button type='submit' variant="primary">Save changes</Button>
        </Modal.Footer>
        </Form>
      </Modal.Dialog>
    </div>
  );
};

export default AddCardModal