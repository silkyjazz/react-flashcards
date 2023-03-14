const { faker } = require("@faker-js/faker");
const { User, Deck, Card } = require("../models");
const connection = require('../config/connection');
const bcrypt = require("bcrypt");

const randomUser = (users) => {
  let index = Math.floor(Math.random() * users.length);
  return index;
};

const generatePassword = async () => {
  const saltRounds = 10;
  const password = await bcrypt.hash("password123", saltRounds);
  return password;
};

const seedingUsers = async (numberOfUsers) => {
  let result = [];
  for (let i = 0; i < numberOfUsers; i++) {
    const user = new User({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: await generatePassword(),
      decks: [],
    });
    result.push(user);
  }
  return result;
};

const seedingCards = (numOfCards) => {
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

const seedingDecks = (usersArray, numOfDecks) => {
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
  const seedUsers = await seedingUsers(2);
  const seedDecks = seedingDecks(seedUsers, 3);
  const seedCards = seedingCards(21);


  for (let i = 0; i < seedUsers.length; i++) {
    for ( let k = 0; k < seedDecks.length; k++) {
      if (seedDecks[k].username === seedUsers[i].username) {
        seedUsers[i].decks.push(seedDecks[k])
      }
    }
  }

  for (let i = 0; i < seedCards.length; i++) {
    const randomDeckIndex = Math.floor(Math.random() * seedDecks.length);
    const cardId = seedCards[i]._id;
    seedDecks[randomDeckIndex].cards.push(cardId)
  }
seedUsers
//   console.log("========================\n", ...users);
//   console.log("========================\n", ...decks);
  const createdUsers = await User.collection.insertMany(seedUsers);
  const createdDecks = await Deck.collection.insertMany(seedDecks);
  const createdCards = await Card.collection.insertMany(seedCards);
  seedUsers.forEach((user) => {
    console.log("information for each users are" + '\nusername - ' + user.username + " \nemail - " + user.email + " \npassword - password123")
  })
  console.log("Seed data generated and saved to the database");
  process.exit(0)
});
