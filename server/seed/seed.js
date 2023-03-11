const { faker } = require("@faker-js/faker");
const { User, Deck, Card } = require("../models");
const connection = require('../config/connection');
const { isCompositeType } = require("graphql");

const randomUser = (users) => {
  let index = Math.floor(Math.random() * users.length);
  return index;
};

const seedUsers = (numberOfUsers) => {
  let result = [];
  for (let i = 0; i < numberOfUsers; i++) {
    const user = new User({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: "password123",
      deck: [],
    });
    result.push(user);
  }
  return result;
};

// if card is subdocument of deck use this instead
// const seedCards = (numOfCards) => {
//     const cards = [];
//     for (let i = 0; i < numOfCards; i++) {
//       cards.push({
//         question: faker.lorem.sentence(),
//         answer: faker.lorem.words(),
//       });
//     }
//     return cards;
//   };

const seedCards = (numOfCards) => {
    // Generate random cards
    const result = [];
    for (let i = 0; i < numOfCards; i++) {
      const card = new Card({
        question: faker.lorem.sentence(),
        answer: faker.lorem.words(),
      })
      result.push(card);
    }
    return result;
  };

const seedDecks = (usersArray, numOfDecks) => {
  let result = [];
  for (let i = 0; i < numOfDecks; i++) {
    const deck = new Deck({
      name: faker.word.noun(),
      username: usersArray[randomUser(usersArray)].username,
      cards: [],
    });
    result.push(deck);
  } 
  return result;
};

connection.on("error", (err) => console.error(err));
connection.once("open", async () => {
  console.log("connected to MongoDB connection");

  // Remove existing data
  await User.deleteMany({});
  await Deck.deleteMany({});
  await Card.deleteMany({});
  
  // Generate random users
  const users = seedUsers(2);
  const decks = seedDecks(users, 3);
  const cards = seedCards(21);


  for (let i = 0; i < users.length; i++) {
    for ( let k = 0; k < decks.length; k++) {
      if (decks[k].username === users[i].username) {
        users[i].deck.push(decks[k])
      }
    }
  }

  for (let i = 0; i < cards.length; i++) {
    const randomDeckIndex = Math.floor(Math.random() * decks.length);
    const cardId = cards[i]._id;
    decks[randomDeckIndex].cards.push(cardId)
  }

//   console.log("========================\n", ...users);
//   console.log("========================\n", ...decks);
  const createdUsers = await User.collection.insertMany(users);
  const createdDecks = await Deck.collection.insertMany(decks);
  const createdCards = await Card.collection.insertMany(cards);
  console.log("Seed data generated and saved to the database");
  process.exit(0)
});
