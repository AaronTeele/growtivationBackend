const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

// POST - CREATE USER
userRouter.post('/', (req, res) => {
    const { username, email, first_name, last_name, city, state_of_residence, zipcode } = req.body;

    UserService.create(username, email, first_name, last_name, city, state_of_residence, zipcode)
        .then(() => {
            res.json({ success: `User with name: ${username} created.` })
        })
        .catch(err => {
            res.json(err.toString())
        })
});

// GET - READ USER
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    UserService.read(id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err.toString())
        })
});

// PUT - UPDATE USER
userRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, first_name, last_name, city, state_of_residence, zipcode } = req.body;

    UserService.read(id)
    .then(() => {
        UserService.update(id, username, email, first_name, last_name, city, state_of_residence, zipcode)
        .then(data => {
            const { username } = data
            res.json({success: `${username} info updated`});
        })
        .catch(err => {
            res.json(err.toString());
        })
    })
    .catch(err => {
        res.json(err.toString());
    })
});

// DELETE - DELETE USER
userRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    UserService.delete(id)
        .then(() => {
            res.json({ success: `User with ID: ${id} deleted.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

module.exports = userRouter;