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
        user(username: String!): User

        decks(username: String!): [Deck]
        deck(_id: ID!): Deck
        cards(username: String!): [Card]
        card(_id: ID!): Card
    }

    type Mutation {
        createDeck(usernameId: ID!, name: String! ): Deck
        createCard(input: newCard): Card
        deleteDeck(_id: ID!): Deck
        deleteCard(_id: ID!): Card

        updateDeck(_id: ID!, input: [newCard]!): Deck
        updateCard(_id: ID!, question: String!, answer: String!): Card

        addCardToDeck(_id: ID, CardId: ID): Deck
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
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
       
    }
`;

module.exports = typeDefs;

// addCardToDeck(_id:ID!, input: [newCard]!): Deck