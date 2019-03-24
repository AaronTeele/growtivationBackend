const express = require('express');
const homeRouter = express.Router();
const {HomeService} = require('../services/home');

// GET - READ FOLLOWER
homeRouter.get('/', (req, res) => {
    res.json(HomeService.read());
});


module.exports = homeRouter;