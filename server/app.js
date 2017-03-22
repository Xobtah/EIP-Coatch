/**
 * Created by xobtah on 31/01/17.
 */

let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require('fs');

require('./configApp')(express, app);
require('./route')(app);

io.on('connection', socket => {
    console.log('Connexion');
    socket.emit('news', { hello: 'world' });
    socket.on('data', data => console.log(data) );
});

server.listen(8080);