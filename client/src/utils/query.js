import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query FindUser($username: String!) {
    findUser(username: $username) {
      _id
      username
      email
      decks {
        name
        username
        cards {
          question
          answer
        }
      }
    }
  }
`;

export const QUERY_DECKS = gql`
  query findAllDecks($username: String!) {
    findAllDecks(username: $username) {
      _id
      username
      name
      cards {
        _id
        question
        answer
      }
    }
  }
`;

export const QUERY_DECK = gql`
  query FindSingleDeck($_id: ID!) {
    findSingleDeck(deckId: $_id) {
      _id
      username
      name
      cards {
        _id
        question
        answer
      }
    }
  }
`;

export const QUERY_CARD = gql`
  query FindSingleCard($_id: ID!) {
    findSingleCard(cardId: $_id) {
      _id
      question
      answer
    }
  }
`;
