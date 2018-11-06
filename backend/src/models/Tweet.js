const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date, // tipo timestamp pega hora minuto e segundo
        default: Date.now, // pega a hora exata do tweet
    },
});

module.exports = mongoose.model("Tweet", TweetSchema);  // se importado o que será devolvido é o que vem após o module.experts
