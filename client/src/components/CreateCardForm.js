import React from 'react';


import { Form } from "react-bootstrap";


// import Auth from '../../utils/auth';

const CreateCardForm = ({ question, answer}) => {
    // const [username, setUsername] = useState({
    //         _id: "",
    //         question: "",
    //         answer: "",
    //         // createdAt: "",
    //       });

    //         const [createCard, { error }] = useMutation(CREATE_CARD, {
    //             update(cache, { data: { createCard } }) {
    //               try {
    //                 const { cards } = cache.readQuery({ query: QUERY_CARD });
            
    //                 cache.writeQuery({
    //                   query: QUERY_CARD,
    //                   data: { cards: [createCard, ...cards] },
    //                 });
    //               } catch (e) {
    //                 console.error(e);
    //               }
            
    //               const { deck } = cache.readQuery({ query: QUERY_DECK });
    //               cache.writeQuery({
    //                 query: QUERY_DECK,
    //                 data: { deck: { ...deck, cards: [...deck.cards, createCard] } },
    //               });
    //             },
    //           });
              

    //           const handleFormSubmit = async (event) => {
    //             event.preventDefault();
            
    //             try {
    //               const { data } = await createCard({
    //                 // variables: {
    //                 //   question,
    //                 //   thoughtAuthor: Auth.getProfile().data.username,
    //                 // },
    //               });
            
    //               setUsername('');
    //             } catch (err) {
    //               console.error(err);
    //             }
    //           };
    
    
    function handleQuestionChange(e) {
       question(e.target.value)
    }

    function handleAnswerChange(e) {
       answer(e.target.value)
    }

  


    return (
        <div>

            <>
           
                <Form.Group className="mb-3" controlId="cardQ">
                    <Form.Label className='modal-text text-center' htmlFor="question">Question</Form.Label>        
                    <Form.Control as="textarea" onChange={handleQuestionChange} rows={1} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cardA">
                    <Form.Label className='modal-text text-center' htmlFor="answer">Answer</Form.Label>        
                    <Form.Control as="textarea" onChange={handleAnswerChange} rows={2} />
                </Form.Group>    
         

        
            </>

        </div>

       

        // <div>

        //   {thoughts &&
        //     thoughts.map((thought) => (
        //       <div key={thought._id} className="card mb-3">
        //         <h4 className="card-header bg-primary text-light p-2 m-0">
        //           {showUsername ? (
        //             <Link
        //               className="text-light"
        //               to={`/profiles/${thought.thoughtAuthor}`}
        //             >
        //               {thought.thoughtAuthor} <br />
        //               <span style={{ fontSize: '1rem' }}>
        //                 had this thought on {thought.createdAt}
        //               </span>
        //             </Link>
        //           ) : (
        //             <>
        //               <span style={{ fontSize: '1rem' }}>
        //                 You had this thought on {thought.createdAt}
        //               </span>
        //             </>
        //           )}
        //         </h4>
        //         <div className="card-body bg-light p-2">
        //           <p>{thought.thoughtText}</p>
        //         </div>
        //         <Link
        //           className="btn btn-primary btn-block btn-squared"
        //           to={`/thoughts/${thought._id}`}
        //         >
        //           Join the discussion on this thought.
        //         </Link>
        //       </div>
        //     ))}
        // </div>
    );
};

export default CreateCardForm;
