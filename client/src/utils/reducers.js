
// // its for /:deck/study

// import { ADD_DECK, ADD_CARD, REMOVE_DECK, REMOVE_CARD } from '../utils/actions';

// const randomNum = () => Math.floor(Math.random() * 20000);

// // Notice we moved the initial state object from our CarComponent to the reducer itself
// const initalState = {
//   decks: [
//     {
//       id: randomNum(),
//       name: '',
//       cards: '[]',
//     },
//   ]
// }

// // Here we pass a default value of initalState if none is provided
// export default function reducer(state = initalState, action) {
//   switch (action.type) {
//     case ADD_DECK: {
//       const newDeckId = state.decks[state.decks.length - 1].id + 1;
//       const newDeck = { ...action.payload, id: newDeckId };

//       return {
//         ...state,
//         decks: [...state.decks, newDeck],
//       };
//     }
//     case ADD_CARD: {
//       const cardIndex = state.cards.findIndex((card) => card.id === action.payload);
//       const updatedCard = { ...state.cards[cardIndex], question, answer};

//       const cardsCopy = [...state.cards];
//       cardsCopy[cardIndex] = updatedCard;

//       return {
//         ...state,
//         cards: cardsCopy,
//       };
//     }
//     // case STOP_CAR: {
//     //   const carIndex = state.cars.findIndex((car) => car.id === action.payload);
//     //   const updatedCar = { ...state.cars[carIndex], isRunning: false };

//     //   const carsCopy = [...state.cars];
//     //   carsCopy[carIndex] = updatedCar;

//     //   return {
//     //     ...state,
//     //     cars: carsCopy,
//     //   };
//     // }
//     // default: {
//     //   return state;
//     // }
//   }
// }
