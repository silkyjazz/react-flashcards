import { Modal } from "bootstrap";
import { useQuery, useMutation } from '@apollo/client'
import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap'
import { QUERY_DECK } from "../utils/query";
import { CREATE_DECK } from "../utils/mutation";

const CreateDeckForm = ({deckName}) => {

    const { loading, data } = useQuery(QUERY_DECK)

    const [deck, setDeck] = useState({
        deck_name: '',
    })

    const [createDeck, {error}] = useMutation(CREATE_DECK)

    function handleDeckName(e) {
        deckName(e.target.value)
    }

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);

    const handleDeckFormSubmit = async (e) => {
        console.log(deck)
        e.preventDefault()

        try {
            const { data } = await createDeck({
                variables: {deckId: Date.now(), username: deck.username, name: deck.name }
            })
        } catch (err) {
            console.log(err)
        }

        setDeck({
            deckId:'',
            username: '',
            name: ''
        })
    }

    return (
        <div>
            {loading ? (
                <div> loading...</div>
            ) : (
            <Modal>
            <Modal.Header>
                <Modal.Title className='modal-Text'>Create New Deck</Modal.Title>
            </Modal.Header>
            <Modal.Body id="contained-title-vcenter">
                <Form.Group className="mb-3" controlId="cardQ">
                    <Form.Label className='modal-text text-center' htmlFor="question">Deck Name</Form.Label>        
                    <Form.Control as="textarea" onChange={handleDeckName} rows={1} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleDeckFormSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
        </Modal>
            )}
            {error && <div>Something went wrong...</div>}
        </div>
    )
}

export default CreateDeckForm