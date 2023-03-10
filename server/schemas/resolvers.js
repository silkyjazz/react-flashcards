const { AuthenticationError } = require('apollo-server-express');
const { Card, Deck, User } = require('../models');
const { Auth } = require('../utils/Auth');

const resolvers = {
    Query: {
        // Find by username populate decks
        user: async (_, { id, username }) => {
            return await User.findOne({
                $or: [{ _id: id }, { username: username }],
            }).populate('Deck');
        },
        // Find by userId sort deck
        decks: async (_, { username }) => {
            return Deck.find({ username: username }).sort({ _id: -1 });
        },
        // Find by deck id populate cards
        cards: async (_, { username }) => {
            return Deck.findOne({ username }).populate('Card');
        },
        // Find by card id sort cards
        card: async (_, { id }) => {
            return Card.findOne({ _id: id }).sort({ _id: -1 });
        },

    },

    Mutation: {

        createDeck: async (_, { name }, context) => {
            if (context.user) {
                const decks = await Deck.create({
                    name
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { deck: decks._id } }
                );

                return deck;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteDeck: async (parent, { deckId }) => {
            return Deck.findOneAndDelete({ _id: deckId })
        },
        updateDeck: async (parent, { deckId, name }) => {
            return Deck.findOneAndUpdate(
                { _id: deckId },
                { $addToSet: { name: name } },
                { new: true },
            )
        },
        createCard: async (_, { deckId, question, answer }, context) => {
            // find user using context.user after auth works
            const newCard = await Card.create({ question: question, answer: answer })
            await Deck.findOneAndUpdate(
                { _id: deckId },
                { $push: newCard },
                { new: true, runValidators: true, }
            )
        },
        updateCard: async (_, { question, choices, answer }) => {
            return await Card.findByIdAndUpdate({ question }, { choices }, { answer }, { new: true });
        },
        deleteCard: async (parent, { cardId }, context) => {
            if (context.user) {
                const updatedDeck = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { Cards: { cardId } } },
                    { new: true }
                );
                return updatedDeck;
            }
            throw new AuthenticationError("Couldn't find a deck with this id!");
        },

        createUser: async (parent, { username, email, password }) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

    },



};

module.exports = resolvers;