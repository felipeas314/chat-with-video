const express = require('express');
const app = express();
const io  = require('socket.io')();
app.io = io;
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const users = require('./routes/user');
const rooms = require('./routes/room');
const chat = require('./chat_namespace');

app.use(cors())
app.use(bodyParser.json());
// Middleware
app.use((req, res, next) => { 
    console.log('Time: ', Date.now());
    next();
});
// Routing
app.use('/auth', users)
app.use('/rooms', rooms)

app.use(express.static(path.join(__dirname, '../dist'))); // Static routing
chat.createNameSpace(io) // Chat socket namespace

module.exports = app