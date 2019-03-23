require('dotenv').config();
// const app = require('./app')
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
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('growtivation is running on Port: ' + port);
});
