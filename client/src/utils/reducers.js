
// its for /:deck/study

import { CREATE_DECK, CREATE_CARD, DELETE_DECK, DELETE_CARD } from '../utils/actions';
import { UPDATE_CARD } from './mutation';



// Notice we moved the initial state object from our CarComponent to the reducer itself
const initalState = {
  decks: [
    {
      id: '',
      name: '',
      cards: '[]',
    },
  ]
}

// Here we pass a default value of initalState if none is provided
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case CREATE_DECK: {
      const newDeckId = state.decks[state.decks.length - 1].id + 1;
      const newDeck = { ...action.payload, id: newDeckId };

      return {
        ...state,
        decks: [...state.decks, newDeck],
      };
    }
    case CREATE_CARD: {
      const cardIndex = state.cards.findIndex((card) => card.id === action.payload);
      const updatedCard = { ...state.cards[cardIndex], question, answer};

      const cardsCopy = [...state.cards];
      cardsCopy[cardIndex] = updatedCard;

      return {
        ...state,
        cards: cardsCopy,
      };
    }
    case UPDATE_CARD:
        return {
          ...state,
          cart: state.cart.map((product) => {
            if (action._id === product._id) {
              product.purchaseQuantity = action.purchaseQuantity;
            }
            return product;
          }),
        };
    // case STOP_CAR: {
    //   const carIndex = state.cars.findIndex((car) => car.id === action.payload);
    //   const updatedCar = { ...state.cars[carIndex], isRunning: false };

    //   const carsCopy = [...state.cars];
    //   carsCopy[carIndex] = updatedCar;

    //   return {
    //     ...state,
    //     cars: carsCopy,
    //   };
    // }
    // default: {
    //   return state;
    // }
  }
}
