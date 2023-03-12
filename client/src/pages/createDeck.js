import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { QUERY_DECK } from '../utils/query'
import { CREATE_DECK } from '../utils/mutation'

const createDeck = () => {
    const { loading, data } = useQuery(QUERY_DECK)

    const deck = data?.deck || []

    const [formData, setFormData] = useState({
        _id: '',
        usernameId: '',
        name: ''
    })
    let navigate = useNavigate()

    const [makeDeck, { error }] = useMutation(CREATE_DECK);

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        try {
            const { data } = await makeDeck({
                variables: { ...formData }
            })

            navigate(`/deck/${data.makeDeck._id}`)
        } catch (err) {
            console.log(err)
        }

        setFormData({
            _id: '',
            usernameId: '',
            name: ''
        })
    }

    return (
        <div className='container'>
            <div className='deck-title'>
                <h1>Decks</h1>
            </div>
            <div className='deck-body'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <form onSubmit={handleFormSubmit}>
                        <button>Create new Deck</button>
                    </form>
                )}
            </div>
            {error && <div>Somthing went wrong...</div>}
        </div>
    )
}

export default createDeck