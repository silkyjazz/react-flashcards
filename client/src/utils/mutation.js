import { gql } from "@apollo/client";

export const CREATE_DECK = gql`
  mutation createDeck($username: String!, $name: String!) {
    createDeck(username: $username, name: $name) {
      _id
      username
      name
    }
  }
`;

export const CREATE_CARD = gql`
  mutation CreateCard($deckId: ID!, $question: String!, $answer: String!) {
    createCard(deckId: $deckId, question: $question, answer: $answer) {
      _id
      deckId
      question
      answer
    }
  }
`;

export const DELETE_DECK = gql`
  mutation DeleteDeck($userId: ID!, $deckId: ID!) {
    deleteDeck(userId: $userId, deckId: $deckId) {
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

export const DELETE_CARD = gql`
  mutation DeleteCard($deckId: ID!, $cardId: ID!) {
    deleteCard(deckId: $deckId, cardId: $cardId) {
      _id
      question
      answer
    }
  }
`;

export const UPDATE_DECK = gql`
  mutation UpdateDeck($deckId: ID!, $name: String!) {
    updateDeck(deckId: $deckId, name: $name) {
      username
      name
      _id
    }
  }
`;

export const UPDATE_CARD = gql`
  mutation UpdateCard($cardId: ID!, $question: String!, $answer: String!) {
    updateCard(cardId: $cardId, question: $question, answer: $answer) {
      _id
      question
      answer
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        decks {
          username
          name
          cards {
            _id
            question
            answer
          }
          _id
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
