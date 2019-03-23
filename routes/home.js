const express = require('express');
const homeRouter = express.Router();
const HomeService = require('../services/home');

// GET - READ FOLLOWER
homeRouter.get('/', (req, res) => {

    HomeService.read()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});


module.exports = homeRouter;