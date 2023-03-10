const { Schema } = require("mongoose");

const cardSchema = new Schema({})

// create an instance of Card schema
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;