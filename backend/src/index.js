const express  =  require('express');    // importando dependencia express ( dentro do package.json )
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app); // serve para retirar o servidor criado com express
const io = require('socket.io')(server); // habilita que o serve ouça o protocolo ws

mongoose.connect("mongodb://goweek:goweek123@ds155293.mlab.com:55293/goweek-gabriel", { //connectando ao banco
    useNewUrlParser: true 
});

app.use(cors());
app.use((req, res, next) => {
    req.io = io;

    return next(); // para que o processamento do backend nao seja interrompido
});
app.use(express.json()); //informa que vai usar json em todas requisições
app.use(require('./routes'));
//// retirado após o app.use(require('./routes')); ////
// app.get('/',  (req , res) => {    //req = requisicoes feitas para o servidor -- res = devolver resposta para o frontend
//     return res.send(' Hello World'); // envia para o frontend Hello World
// });

// app.listen(3000, () => { //escolhe a porta que o app vai "escutar"
server.listen(3000, () => { // habilita que o frontend tenha acesso
 console.log('Server started on port 3000'); //função a excutar quando o servidor subir
});

