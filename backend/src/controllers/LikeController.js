const Tweet = require("../models/Tweet");

module.exports = {
    async store(req, res){ // so vamos usar store porque vai CRIAR um novo like
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({ likes: tweet.likes + 1 }); //adiciona um like a variavel

        await tweet.save();

        req.io.emit('like', tweet);

        return res.json(tweet);
    },
}