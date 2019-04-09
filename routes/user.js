const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

// POST - CREATE USER
userRouter.post('/', (req, res) => {
    const {  email, auth_token } = req.body;

    UserService.create(email, auth_token)
        .then(() => {
            res.json({ success: `User with email: ${email} created.` })
        })
        .catch(err => {
            res.json(err.toString())
        })
});

// GET - READ USER
userRouter.get('/', (req, res) => {
    const { email } = req.body;

    UserService.read(email)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err.toString())
        })
});

// PUT - UPDATE USER
userRouter.put('/', (req, res) => {
    const { email, auth_token } = req.body;

    UserService.read(email)
    .then(() => {
        UserService.update(auth_token)
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
userRouter.delete('/', (req, res) => {
    const { email } = req.body;
    UserService.read(email)
    .then (() => {
        UserService.delete(email)
        .then(() => {
            res.json({ success: `User with ID: ${email} deleted.` })
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