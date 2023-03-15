import { useReducer } from "react";
import {
  ADD_DECK,
  ADD_CARD,
  UPDATE_CARD,
  UPDATE_DECK,
  REMOVE_DECK,
  REMOVE_CARD,
} from "./actions";

const initialState = {
  decks: [{
    username: "",
    name: ""
  }],
  cards: [{
    question: "",
    answer: ""
  }],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case ADD_DECK: {
      const newDeck = { ...action.payload };
      return {
        ...state,
        decks: [...state.decks, newDeck],
      };
    }
    case ADD_CARD: {
      const newCard = { ...action.payload };
      return {
        ...state,
        cards: [...state.cards, newCard],
      };
    }

    default:
      return state;
  }
}

// case UPDATE_CARD:
//   return {
//     ...state,
//     cartOpen: true,
//     cart: [...state.cart, action.product],
//   };
// case REMOVE_DECK:
//   let newState = state.cart.filter((product) => {
//     return product._id !== action._id;
//   });
//   return {
//     ...state,
//     cartOpen: newState.length > 0,
//     cart: newState,
//   };
// case ADD_CARD:
//   return {
//     ...state,
//     cartOpen: true,
//     cart: state.cart.map((product) => {
//       if (action._id === product._id) {
//         product.purchaseQuantity = action.purchaseQuantity;
//       }
//       return product;
//     }),
//   };
// case UPDATE_DECK:
//   let newState = state.cart.filter((product) => {
//     return product._id !== action._id;
//   });
//   return {
//     ...state,
//     cartOpen: newState.length > 0,
//     cart: newState,
//   };

// case REMOVE_CARD:
//   let newState = state.cart.filter((product) => {
//     return product._id !== action._id;
//   });
//   return {
//     ...state,
//     cartOpen: newState.length > 0,
//     cart: newState,
//   };

// case TOGGLE_CART:
//   return {
//     ...state,
//     cartOpen: !state.cartOpen,
//   };

// case UPDATE_CATEGORIES:
//   return {
//     ...state,
//     categories: [...action.categories],
//   };

// case UPDATE_CURRENT_CATEGORY:
//   return {
//     ...state,
//     currentCategory: action.currentCategory,
//   };
