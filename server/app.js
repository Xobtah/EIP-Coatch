/**
 * Created by xobtah on 31/01/17.
 */

let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

server.listen(8080);

app.use(express.static('client'));
app.use('/node_modules', express.static('node_modules'));

io.on('connection', socket => {
    console.log('Connexion');
    socket.emit('news', { hello: 'world' });
    socket.on('data', data => console.log(data) );
});