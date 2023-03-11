import React, { useState } from 'react'
import { useNavigation } from 'react-router-dom'
import { useMutation. useQuery } from '@apollo/client'
import { QUERY_DECK, QUERY_DECKS } from '../utils/query'
import { CREATE_DECK, UPDATE_DECK, DELETE_DECK } from '../utils/mutation'

const createDeck = () => {
    const { loading, data } = useQuery(CREATE_DECK)

    const deck = data?.deck || []

    const []
}