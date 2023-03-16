// import React, { useState } from "react";
// import { Button, Modal, Form } from "react-bootstrap";
// import CreateCardForm from "./CreateCardForm";
// import { UPDATE_CARD } from "../utils/mutation";
// import { useMutation, useQuery } from "@apollo/client";
// import UpdateCard from "./UpdateCardForm";
// import { useParams } from "react-router-dom";
// import { QUERY_CARD, QUERY_DECK } from "../utils/query";

// function UpdateCardModal({ cardId, question, answer }) {
//   // const [questionBody, setQuestionBody] = useState({ question: questionBody });
//   // const [answerBody, setAnswerBody] = useState({ answer: answerBody });
//   // const [updateCard, { error }] = useMutation(UPDATE_CARD);
//   const [showModal, setShowModal] = useState(false);

//   const handleClose = () => setShowModal(false);

//   const [questionBody, setQuestionBody] = useState({ question });
//   const [answerBody, setAnswerBody] = useState({ answer });
//   const [updateCard, { error }] = useMutation(UPDATE_CARD);

//   // Get all cards from DB
//   // const { deckId: deckParam } = useParams();
//   const { loading, data } = useQuery(QUERY_CARD, {
//     variables: {
//       question: questionBody,
//       answer: answerBody,
//     },
//   });
//   // Update card
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log(deckParam);
//     try {
//       console.log(questionBody);
//       console.log(answerBody);
//       // const { data } = await updateCard({
//       //   variables: {
//       //     deckId: deckParam,
//       //     question: questionBody,
//       //     answer: answerBody,
//       //   },
//       // })
//       updateCard({
//         variables: {
//           cardId: cardId,
//           question: questionBody,
//           answer: answerBody,
//         },
//       });
//       // console.log(questionBody)
//       // console.log(answerBody)
//       window.location.reload();
//       // window.location.assign(`/cards`)
//       // setQuestionBody('')
//       // setAnswerBody('')
//     } catch (error) {
//       console.log(JSON.stringify(error, null, 2));
//     }
//   };

//   return (
//     <div
//       className="modal show"
//       style={{ display: "block", position: "initial" }}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title className="modal-text" id="login-modal">
//           Update Card
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//       <Form.Group className="mb-3" controlId="cardQ">
//             <Form.Label className="modal-text text-center" htmlFor="question">
//               Question
//             </Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={1}
//               name="questionName"
//               value={questionBody.question}
//               onChange={(e) => setQuestionBody(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="cardA">
//             <Form.Label className="modal-text text-center" htmlFor="answer">
//               Answer
//             </Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={2}
//               name="answerName"
//               value={answerBody.answer}
//               onChange={(e) => setAnswerBody(e.target.value)}
//             />
//           </Form.Group>      </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary">Close</Button>
//         {/*TODO: use handleSubmit for updating */}
//         <Button variant="primary" onClick={handleFormSubmit}>
//           Save Update
//         </Button>
//       </Modal.Footer>
//     </div>
//   );
// }

// export default UpdateCardModal;

import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import CreateCardForm from "./CreateCardForm";
import { UPDATE_CARD } from "../utils/mutation";
import { useMutation, useQuery } from "@apollo/client";
// import UpdateCard from "./UpdateCardForm";
import { useParams } from "react-router-dom";
import { QUERY_CARD, QUERY_DECK } from "../utils/query";

const UpdateCardModal = ({deckParam, cardId}) => {
  const [formState, setFormState] = useState({
    question: "",
    answer: "",
  });

useEffect(() => {
  console.log(formState)
},
[formState])

  // Set up our mutation with an option to handle errors
  // 🔑 Then, we set up our useMutation Hook to apply our mutation. We also add error handling:
  const [updateCard, { error }] = useMutation(UPDATE_CARD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log({...formState})

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation

    // 🔑 The useMutation Hook returns a mutation function, updateThought, that can then be used to execute the function as needed.
    // Because we want it to execute when a form is submitted, we add it to the form submit handler:

    // We wrap the function in a try...catch to allow graceful error handling:
    try {
      const { data } = updateCard({
        //🔑 We also set the value of our mutation variables to equal the current value of thoughtText and thoughtAuthor in our form state to allow use to pass the user-generated values back to our mutation:
        variables: { cardId, ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // If name of field/property is thoughtText
    if (name === "question" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      // setCharacterCount(value.length);
      //   thoughtAuthir
    } else if (name === "answer" && value.length <= 280) {
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
            // value={formState.question}
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
            // value={formState.answer}
            onChange={handleChange}
          />
        </Form.Group>{" "}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        {/*TODO: use handleSubmit for updating */}
        <Button variant="primary" onClick={handleFormSubmit}>
          Save Update
        </Button>
      </Modal.Footer>
    </>
  );
};

export default UpdateCardModal;
