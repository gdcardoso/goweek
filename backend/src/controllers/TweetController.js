const Tweet = require("../models/Tweet");
 
module.exports = {
    async index(req, res) {
        const tweets = await Tweet.find({}).sort("-createdAt"); // await para cod que pode demorar a ter resposta

        return res.json(tweets);
    },

    async store(req, res) {
        const tweet = await Tweet.create(req.body); // body = corpo da requisição

        req.io.emit('tweet', tweet); // envia um evento que teve um novo tweet criado

        return res.json(tweet);
    }
};