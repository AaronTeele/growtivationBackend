const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

// MIDDLEWARE NEEDED
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// user routes
app.use('/users', userRouter);

//post routes
app.use('/post', postRouter);

app.listen(port, () => {
  console.log('growtivation is running on Port: ' + port);
});
