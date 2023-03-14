const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Card {
        _id: ID
        question: String
        answer: String
    }

    type Deck {
        _id: ID
        username: String
        name: String
        cards: [Card]
    }

    type User {
        _id: ID
        username: String
        email: String
        decks: [Deck]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        findUser(username: String!): User
        findAllDecks(username: String!): [Deck]
        findSingleDeck(deckId: ID!): Deck
        findSingleCard(cardId: ID): Card
    }

    type Mutation {
        createDeck(username: String!, name: String!): Deck
        createCard(deckId: ID!, question: String!, answer: String!): Card

        updateDeck(deckId: ID!, name: String!): Deck
        updateCard(cardId: ID!, question: String!, answer: String!): Card

        deleteDeck(userId: ID!, deckId: ID!): Deck
        deleteCard(deckId: ID!, cardId: ID!): Card

        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;