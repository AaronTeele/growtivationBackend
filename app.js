const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const userRouter = require('./routes/user');
//const postRouter = require('./routes/post');

// MIDDLEWARE NEEDED
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// user routes
app.use('/user', userRouter);

//post routes
// app.use('/post', postRouter);

module.exports = { app }