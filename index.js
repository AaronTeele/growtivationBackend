require('dotenv').config();
// const app = require('./app')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const goalRouter = require('./routes/goal');
const commentRouter = require('./routes/comment');
const likeRouter = require('./routes/like');
const followerRouter = require('./routes/follower');
const homeRouter = require('./routes/home')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//landing page
app.use('/', homeRouter)

// user routes
app.use('/user', userRouter);

// post routes
app.use('/post/:id', postRouter);

// goal routes
app.use('/goals/:id', goalRouter);

// comment routes
app.use('/comments/:id', commentRouter);

// like routes
app.use('/like/:id', likeRouter);

// follower routes
app.use('/follower/:id', followerRouter);

module.exports = { app }
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('growtivation is running on Port: ' + port);
});
