import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_CARD, QUERY_DECK } from "../utils/query";
import { CREATE_CARD, CREATE_DECK } from "../utils/mutation";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import CreateCardForm from "../components/CreateCardForm";
import CardList from '../components/CardList'

// const ACTIONS = {
//   NEW_CARD: "new-card",
//   DELETE_CARD: "delete-card",
// };

// function reducer(newCard, action) {
//   switch (action.type) {
//     case ACTIONS.NEW_CARD:
//       return [...newCard, newCards(action.payload.formData)];
//     case ACTIONS.DELETE_CARD:
//       return;
//     default:
//   }
// }

// function newCards(formData) {
//   return { id: Date.now(), formData: formData };
// }

const Create = () => {
//   const [cards, dispatch] = useReducer(reducer, []);

  const { loading, data } = useQuery(QUERY_CARD);

  const [formData, setFormData] = useState({
    deckId: "",
    question: "",
    answer: "",
  });
  
  function handleDeckIdChange(e) {
    setFormData({
        ...formData,
        deckId: e
    })
  }

  function handleQuestionsChange(e) {
    setFormData({
        ...formData,
        question: e
    })
  }

  function handleAnswersChange(e) {
    setFormData({
        ...formData,
        answer: e
    })
  }

  let navigate = useNavigate();

  const [makeCard, { error }] = useMutation(CREATE_CARD);

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleCardClick = () => setShowModal(true);

  
  const handleFormSubmit = async (event) => {
      console.log(formData);
    event.preventDefault();
    // dispatch({ type: ACTIONS.NEW_CARD, payload: { formData: formData } });

    try {
        console.log('test2')
      const { data } = await makeCard({
        variables: { deckId: Date.now(), question: formData.question, answer:formData.answer },
        
      });
      
      navigate(`/decks`);
    } catch (err) {
      console.log(err);
    }
    console.log('test2')
    setFormData({
      deck_name: "",
      question: "",
      answer: "",
    });

  };

  return (
    <div className="container">
      <div className="create-deck-title text-center">
        <h1>Create a New Deck</h1>
      </div>
      <div className="create-deck-body">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form >
            <div className="create-form text-center">
              <div>
                <label>Deck Name: </label>
                <input
                  type="text"
                  value={formData.deck_name}
                  onChange={(e) => setFormData(e.target.value)}
                />
                <br></br>
                <div id="root"></div>
              </div>
              <Col md={{ span: 0 }}>
                <Card
                  className="text-center"
                  onClick={handleCardClick}
                  style={{ width: "25rem" }}
                >
                  <Card.Body>
                    <Card.Text className="card-page-text">
                      + Create New Card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Modal
        show={showModal}
        onHide={handleModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-text ">Create New Card</Modal.Title>
        </Modal.Header>

        <Modal.Body id="contained-modal-title-vcenter">
          <CreateCardForm deckId={handleDeckIdChange} question={handleQuestionsChange} answer={handleAnswersChange}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleFormSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
          </form>

            // <CardList />
        )}
        <Button
          variant="secondary"
          className="create-card item-align-center"
          onClick={makeCard}
        >
          Create Deck
        </Button>
      </div>
      {error && <div>Somthing went wrong...</div>}
    </div>
  );
};

export default Create;
