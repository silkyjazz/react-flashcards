import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/query";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Auth from '../utils/auth';

const CardPage = () => {
    // const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_CARDS);

  const cardList = data?.card || [];         
    

    return (
<div>
    <div>
        <h3>${deckId} study cards!</h3>
    </div>

        <div>
        <Link to={{pathname: "createCardModal", state: {modal: true},}} className="link">
        <Card className="text-center">
            <Card.Body>
                <Card.Text>+ Create New card</Card.Text>
            </Card.Body>
        </Card>
    </Link>

<div>
<CardList/>
</div>

    </div>
    </div>

    );
};

export default CardPage;


//   const [formData, setFormData] = useState({
//     _id: "",
//     question: "",
//     answer: "",
//     createdAt: "",
//   });

//   let navigate = useNavigate();

//   const [deleteCard, { error }] = useMutation(DELETE_CARD);

//   const [updateCard, { error }] = useMutation(UPDATE_CARD);

//   const [createCard, { error }] = useMutation(CREATE_CARD)

//   const handleDeleteSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await deleteCard({
//         variables: { ...formData },
//       });

//       cardList.filter(data.card._id);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleCreateSubmit = async (e) => {
//         e.preventDefault()

//         try {
//             const { data } = await createCard({
//                 variables: { ...formData }
//             })

//             navigate(`/:${data.username._id}/createCard`)
//         } catch (err) {
//             console.log(err)
//         }
//     }

//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await updateCard({
//         variables: { ...formData },
//       });

//       navigate(`/${data.deck._id}/cards`);
//     } catch (err) {
//       console.log(err);
//     }

    

//     setFormData({
//       _id: "",
//       username: "",
//       name: "",
//       cards: {
//         question: "",
//         answer: "",
//       },
//     });
//   };
            