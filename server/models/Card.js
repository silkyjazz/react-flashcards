const { Schema } = require("mongoose");
const dateFormat = require('../utils/dateFormat')
const mongoose = require('mongoose')

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
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
})

// create an instance of Card schema
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;