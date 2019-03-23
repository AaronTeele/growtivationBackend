const express = require('express');
const followerRouter = express.Router();
const FollowerService = require('../services/follower');

// POST - CREATE FOLLOWER
followerRouter.post('/', (req, res) => {
    const { username, email, firstName, lastName, city, state, zipcode } = req.body;

    FollowerService.create(username, email, firstName, lastName, city, state, zipcode)
        .then(() => {
            res.json({ success: `User with name: ${name} created.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ FOLLOWER
followerRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    FollowerService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// PUT - UPDATE FOLLOWER
followerRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, firstName, lastName, city, state, zipcode } = req.body;
    

    FollowerService.update(id, username, email, firstName, lastName, city, state, zipcode)
        .then(() => {
            res.json({ success: `User with name: ${name} updated.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// DELETE - DELETE FOLLOWER
followerRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    FollowerService.delete(id)
        .then(() => {
            res.json({ success: `User with ID: ${id} deleted.` });
        })
        .catch(err => {
            res.json(err.toString());
        });
});

module.exports = followerRouter;