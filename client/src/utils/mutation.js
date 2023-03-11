import { gql } from '@apollo/client'

export const CREATE_DECK = gql`
    mutation createDeck($usernameId: ID!, $name: String!){
        createDeck(usernameId: usernameId, name: $name) {
            _id
            usernameId
            name
        }
    }
`

export const CREATE_CARD = gql`
    mutation createCard($input: newCard){
        createCard(input: $input){
            _id
            input
        }
    }
`

export const DELETE_DECK = gql`
    mutation deleteDeck($_id: ID!){
        deleteDeck(_id: $_id){
            _id
        }
    }
`

export const DELETE_CARD = gql`
    mutation deleteCard($_id: ID!) {
        deleteCard(_id: $_id){
            _id
        }
    }
`

export const UPDATE_DECK = gql`
    mustation updateDeck($_id: ID!, $input: [newCard]!){
        updateDeck(_id: $_id, input: $input) {
            _id
            input
        }
    }
`

export const UPDATE_CARD = gql`
    mutation updateCard ($_id: ID!, $question: String!, $answer: String!){
        updateCard(_id: $_id, question: $question, answer: $answer) {
            _id
            question
            answer
        }
    }
`

export const ADD_CARD_TO_DECK = gql`
    mutation addCardToDeck($_id: ID, $CardId: ID) {
        addCardToDeck(_id: $_id, CardId: $CardId) {
            _id
            CardId
        }
    }
`

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login( email: $email, password: $password) {
            _id
            email
            password
        }
    }
`

// create update delete for deck and cards to the db
// /:user/decks
// create user