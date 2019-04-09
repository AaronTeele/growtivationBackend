const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

// POST - CREATE USER
userRouter.post('/', (req, res) => {
    const {  email, auth_token } = req.body;

    UserService.create(email, auth_token)
        .then(() => {
            res.json({ success: `User with name: ${email} created.` })
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
    const { email, auth_token } = req.body;

    UserService.read(id)
    .then(() => {
        UserService.update(id, email, auth_token)
        .then(() => {
            res.json({success: `${email} info updated`});
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
    UserService.read(id)
    .then (() => {
        UserService.delete(id)
        .then(() => {
            res.json({ success: `User with ID: ${id} deleted.` })
        })
        .catch(err => {
            res.json(err.toString());
        })
    })
    .catch(err => {
        res.json(err.toString());
    })   
});

module.exports = userRouter;