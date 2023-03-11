import { gql } from '@apollo/client'

export const QUERY_USER = gql`
    query user($username: String!){
        user(username: $username){
            _id
            username
            email
            decks{
                deck{
                    _id
                    question
                    cards{
                        card{
                            _id
                            question
                            answer
                        }
                    }
                }
            }
        }
    }
`

export const QUERY_DECKS = gql`
    query decks($username: String!) {
        decks(username: $username) {
            deck {
                _id
                question
                cards {
                    card{
                        _id
                        question
                        answer
                    }
                }
            }
        }
    }
`

export const QUERY_DECK = gql`
    query deck($_id: ID!){
        deck(_id: $_id){
            _id
        }
    }
`

export const QUERY_CARDS = gql`
    query cards($username: String!){
        cards(username: $username){
            card {
                _id
                question
                answer
            }
        }
    }
`

export const QUERY_CARD = gql`
    query card($_id: ID!){
        card(_id: $_id) {
            _id
            question
            answer
        }
    }
`
// GET for cards, decks, users from the db
