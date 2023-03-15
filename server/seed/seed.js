const { faker } = require("@faker-js/faker");
const { User, Deck, Card } = require("../models");
const connection = require("../config/connection");
const bcrypt = require("bcrypt");

const randomUser = (users) => {
  let index = Math.floor(Math.random() * users.length);
  return index;
};

// without hashing the password, it wouldn't work with login when it tried to decode
const generatePassword = async () => {
  const saltRounds = 10;
  const password = await bcrypt.hash("password123", saltRounds);
  return password;
};

// creating fake users
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

// creating fake cards
const seedingCards = (numOfCards) => {
  // Generate random cards
  const result = [];
  for (let i = 0; i < numOfCards; i++) {
    const card = new Card({
      question: faker.lorem.sentence(),
      answer: faker.lorem.words(),
    });
    result.push(card);
  }
  return result;
};

// creating fake decks
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

// connection to mongoDB
connection.on("error", (err) => console.error(err));
connection.once("open", async () => {
  console.log("connected to MongoDB connection");

  // Remove existing data
  await User.deleteMany({});
  await Deck.deleteMany({});
  await Card.deleteMany({});

  // seedingUsers(numberOfUsers), seedingDecks(seededUserData, numberOfDecks), seedingCards(numberOfCards)
  const seedUsers = await seedingUsers(2);
  const seedDecks = seedingDecks(seedUsers, 3);
  const seedCards = seedingCards(21);

  // assigning decks to random user
  for (let i = 0; i < seedUsers.length; i++) {
    for (let k = 0; k < seedDecks.length; k++) {
      if (seedDecks[k].username === seedUsers[i].username) {
        seedUsers[i].decks.push(seedDecks[k]);
      }
    }
  }

  // assigning cards to random deck
  for (let i = 0; i < seedCards.length; i++) {
    const randomDeckIndex = Math.floor(Math.random() * seedDecks.length);
    const cardId = seedCards[i]._id;
    seedDecks[randomDeckIndex].cards.push(cardId);
  }

  //   console.log("=============USER DATA================\n", ...users);
  //   console.log("=============DECK DATA================\n", ...decks);
  //   console.log("=============CARD DATA================\n", ...cards);
  // insert into data base
  const createdUsers = await User.collection.insertMany(seedUsers);
  const createdDecks = await Deck.collection.insertMany(seedDecks);
  const createdCards = await Card.collection.insertMany(seedCards);
  seedUsers.forEach((user) => {
    console.log(
      "\nusername - " +
        user.username +
        " \nemail - " +
        user.email +
        " \npassword - password123\n"
    );
  });
  console.log("Seed data generated and saved to the database");
  process.exit(0);
});
