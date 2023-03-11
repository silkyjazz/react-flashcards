const mongoose = require('mongoose');
const { Schema } = mongoose;

const deckSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card',
    }]
})

// create an instance of deck schema
const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck; 