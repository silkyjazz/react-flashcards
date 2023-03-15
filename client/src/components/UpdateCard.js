import React, { useState, useEffect, Fragment } from "react";
import { Form, Card, Modal, Button, Row, Col, Alert } from "react-bootstrap";
import { UPDATE_CARD } from "../utils/mutation";
import { QUERY_CARD } from "../utils/query";
import {useStoreContext} from './../utils/GlobalState'  ;
import { useQuery } from '@apollo/client';
import {idbPromise} from './../utils/helpers';
// import { Card } from "../../../server/models";
import addCardModal from "./CreateCardModal";
// import Swal from 'sweetalert2';

// CommonJS
// const Swal = require('sweetalert2');



const UpdateCard = ({card}) => {

  const [showUpdate, setShowUpdate] = useState(false);
  // const [showDelete, setShowDelete] = useState(false);
  

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  // const handleCloseDelete = () => setShowDelete(false);
  // const handleShowDelete = () => setShowDelete(true);

    // set state for alert
    // const [showAlert, setShowAlert] = useState(false);



  // Swal.fire({
  //   title: 'Do you want to save the changes?',
  //   showDenyButton: true,
  //   showCancelButton: true,
  //   confirmButtonText: 'Save',
  //   denyButtonText: `Don't save`,
  // }).then((result) => {
  //   /* Read more about isConfirmed, isDenied below */
  //   if (result.isConfirmed) {
  //     Swal.fire('Saved!', '', 'success')
  //   } else if (result.isDenied) {
  //     Swal.fire('Changes are not saved', '', 'info')
  //   }
  // })

  const [state, dispatch] = useStoreContext();

  const { currentDeck } = state;

  const { loading, data } = useQuery(QUERY_CARD);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_CARD,
        card: data.cards,
      });
      data.cards.forEach((card) => {
        idbPromise('cards', 'put', card);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((cards) => {
        dispatch({
          type: UPDATE_CARD,
          cards: cards,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterCards() {
    if (!currentDeck) {
      return state.cards;
    }

    return state.cards.filter(
      (card) => card.deck._id === currentDeck
    );
  }

  return (
    // <div>
    //   <div>
    // <Card className="text-center" style={{ width: "25rem" }}>
    //     <Card.Text className="flashcard-text">{card.question} </Card.Text>
    //     <Card.Text className="flashcard-text">{card.answer} </Card.Text>
    // </Card>
    // <Button variant="secondary" onClick={handleShowUpdate} style={{ backgroundColor: '#F7C04A' }} className="btn">
    //           Update
    //         </Button>
            // {/* <Button variant="secondary" onClick={} style={{ backgroundColor: '#F7C04A' }} className="btn">
            //   Delete
            // </Button> */}
// {/* </div>
// <Modal show={showUpdate} onHide={handleShowUpdate}    aria-labelledby="contained-modal-title-vcenter"
//         centered> */}
<Fragment>
        <Modal.Header closeButton>
          <Modal.Title className="modal-text" id="card-update-modal">Update Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                        <Form.Group className="mb-3" controlId="cardQ">
                    <Form.Label className='modal-text text-center' htmlFor="question">Question</Form.Label>        
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cardA">
                    <Form.Label className='modal-text text-center' htmlFor="answer">Answer</Form.Label>        
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseUpdate}>
            Save Update
          </Button>
        </Modal.Footer>
        </Fragment>



  );
};

export default UpdateCard;
