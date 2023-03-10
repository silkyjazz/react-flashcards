const { Schema } = require("mongoose");

const deckSchema = new Schema({})

// create an instance of deck schema
const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;