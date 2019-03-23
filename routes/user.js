const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

// POST - CREATE FOLLOWER
userRouter.post('/', (req, res) => {
    const { username, email, firstName, lastName, city, state_of_residence, zipcode } = req.body;

    UserService.create(username, email, firstName, lastName, city, state_of_residence, zipcode)
        .then(() => {
            res.json({ success: `User with name: ${username} created.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ FOLLOWER
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    UserService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// PUT - UPDATE FOLLOWER
userRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, firstName, lastName, city, state, zipcode } = req.body;


    UserService.update(id, username, email, firstName, lastName, city, state, zipcode)
        .then(() => {
            res.json({ success: `User with name: ${name} updated.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// DELETE - DELETE FOLLOWER
userRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    UserService.delete(id)
        .then(() => {
            res.json({ success: `User with ID: ${id} deleted.` });
        })
        .catch(err => {
            res.json(err.toString());
        });
});

module.exports = userRouter;