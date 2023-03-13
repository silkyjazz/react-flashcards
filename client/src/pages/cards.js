// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import { useQuery } from '@apollo/client';

// import { QUERY_DECK } from "../utils/query";
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button';

// import CardList from '../components/CardList';

// const CardPage = () => {
//     const { deckId } = useParams();

//     const { loading, data } = useQuery(QUERY_DECK, {
//       // pass URL parameter
//       variables: { deckId: deckId },
//     });
  
//     const findAllDecks = data?.findAllDecks || {};
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
//     return (
// <div>
//     <div>
//         <h3>Study cards!</h3>
//     </div>

//         <div>
//         <Link to={{pathname: "createCardModal", state: {modal: true},}} className="link">
//         <Card className="text-center">
//             <Card.Body>
//                 <Card.Text>+ Create New card</Card.Text>
//             </Card.Body>
//         </Card>
//     </Link>

//     <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>The correct answer is</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//       <CreateCardForm/>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
// {/* 
// <div>
// <CardList/>
// </div> */}

//     </div>
//     </div>

//     );
// };

// export default CardPage;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { QUERY_DECK } from "../utils/query";


import CardList from '../components/CardList';


import { Link } from "react-router-dom";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import CreateCardForm from "../components/CreateCardForm";

function CardWithModal() {


  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleCardClick = () => setShowModal(true);



  const { deckId } = useParams();

  const { loading, data } = useQuery(QUERY_DECK, {
    // pass URL parameter
    variables: { deckId: deckId },
  });

  const findAllDecks = data?.findAllDecks || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
           <h3 className="text-center" >
                <Link to="/study">Study!</Link>
              </h3>

        <Card className="text-center" onClick={handleCardClick} style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Text>+ Create New card</Card.Text>
          </Card.Body>
        </Card>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title class="flashcard-text">Create New Card</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CreateCardForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
        {/* <Card className="text-center" onClick={handleCardClick} style={{ width: '25rem' }}> */}

        <Card className="text-center" style={{ width: '25rem' }}>
          <Card.Body>
            {/* <Card.Text class="flashcard-text">Question: {'\n'} {userParams ?` ${findAllDecks.question}`: ""} </Card.Text> */}

            <Card.Text class="flashcard-text">Questions  </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
    </>
  );
}

export default CardWithModal;
