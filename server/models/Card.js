const { Schema } = require("mongoose");

const cardSchema = new Schema({
    question: {
        type: String,
        require: true,
        maxLength: 255
    },
    choices:{
        type: [String],
        require: true
    },
    answer: {
        type: String,
        require: true
    }
})

// create an instance of Card schema
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;