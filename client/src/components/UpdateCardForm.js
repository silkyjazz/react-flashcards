// import React, { useState } from "react";
// import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
// import { UPDATE_CARD } from "../utils/mutation";
// import { useMutation } from "@apollo/client";

//  const UpdateCard = ({ cardId, question, answer }) => {
//     const [showModal, setShowModal] = useState(false);

//     const handleClose = () => setShowModal(false);
//     // const handleShow = () => setShowModal(true);
//     // const handleDeleteClose = () => setShowDeleteModal(false);
//     // const handleDeleteShow = () => setShowDeleteModal(true);
 

//   const [questionBody, setQuestionBody] = useState({ question });
//   const [answerBody, setAnswerBody] = useState({ answer });
//   const [updateCard, { error }] = useMutation(UPDATE_CARD);


//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "questionName" && value.length <= 40) {
//       setQuestionBody(value);
//     } else if (name === "answerName" && value.length <= 50) {
//       setAnswerBody(value);
//     }
//   };

//   return (
//     <>
      

 
//           <Form.Group className="mb-3" controlId="cardQ">
//             <Form.Label className="modal-text text-center" htmlFor="question">
//               Question
//             </Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={1}
//               name="questionName"
//               value={questionBody.question}
//               onChange={handleChange}
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
//               onChange={handleChange}
//             />
//           </Form.Group>
   


     
//     </>
//   );
// };

// export default UpdateCard;
