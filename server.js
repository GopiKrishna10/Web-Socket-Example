var express = require('express');
var socket = require('socket.io');

// App setup 
var app = express();
var server = app.listen('4000',() => {
    console.log('Port is running on 4000');
});

app.use(express.static('public'));

// Socket setup

var io = socket(server);
io.on('connection',(socket) => {
    console.log('socket connection made');

socket.on('chat',(data) => {
    console.log(data);
    io.sockets.emit('chat',data);
});
socket.on('typing',(data) => {
    socket.broadcast.emit('typing',data);
})
})
