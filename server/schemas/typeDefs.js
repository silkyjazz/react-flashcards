const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Card {
        _id: ID
        question: String!
        answer: String!
    }

    type Deck {
        _id: ID
        name: String
        cards: [Card]
    }

    type User {
        _id: ID
        username: String!
        email: String!
        decks: [Deck]
    }

    type Auth {
        token: ID!
        username: User
    }

    type Query {
        user: User
        decks: [Deck]
        deck(_id: ID!): Deck
        cards: [Card]
        card(_id: ID!): Card
    }

    input newUser {
        username: String!
        email: String!
        password: String!
    }

    input newCard {
        question: String!
        answer: String!
    }

    input newDeck {
        name: String!
        cards: [Card]
    }

    type Mutation {
        createDeck(input: newDeck): Deck
        createCard(input: newCard): Card
        deleteDeck(_id: ID!): Deck
        deleteCard(_id: ID!): Card

        updateDeck(_id: ID!, input: [newCard]!): Deck
        updateCard(_id: ID!, question: String!, answer: String!): Card


        createUser(input: newUser!): User!
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;

// addCardToDeck(_id:ID!, input: [newCard]!): Deck