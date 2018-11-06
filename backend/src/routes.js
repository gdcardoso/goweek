const express = require("express");

const routes = express.Router(); //modulo de rotas do express

const TweetController = require("./controllers/TweetController");
const LikeController = require("./controllers/LikeController");

routes.get("/tweets", TweetController.index); // ao chamar a rota tweets aciona o TweetController.index
routes.post("/tweets", TweetController.store); 
routes.post("/likes/:id", LikeController.store);

// routes.get('/',  (req , res) => {    //req = requisicoes feitas para o servidor -- res = devolver resposta para o frontend
//     return res.send(' Hello World'); // envia para o frontend Hello World
// });

module.exports = routes;