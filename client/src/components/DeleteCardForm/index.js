import React from "react";
import { Navbar, Nav, Container, Modal, Button, Form, SplitButton } from "react-bootstrap";
import { DELETE_CARD } from "../../utils/mutation";
import { useMutation } from "@apollo/client";

export const DeleteCardForm = ({deckParam, cardId}) => {
  // delete card
  const [deleteCard, { error }] = useMutation(DELETE_CARD);
  // console logging error from useMutation
  if (error) {
    console.error("error on line 11 DeleteCardForm.js", error);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await deleteCard({
        variables: {
          deckId: deckParam,
          cardId: cardId
        },
      });
      console.log('card ID ', data._id, ' has been deleted!');
      window.location.reload();
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  };

  return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to delete this card?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button className="btn" variant="secondary">Close</Button>
          <Button variant="danger" onClick={handleFormSubmit}>Confirm</Button>
        </Modal.Footer>
      </Modal.Dialog>

  );
};
