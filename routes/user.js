const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

// POST - CREATE USER
userRouter.post('/', (req, res) => {
    const { username, email, firstName, lastName, city, state, zipcode } = req.body;

    UserService.create(username, email, firstName, lastName, city, state, zipcode)
        .then(() => {
            res.json({ success: `User with name: ${name} created.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ USER
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

 // PUT - UPDATE USER
userRouter.put('/:id', (req, res) => {
    const { username, email, firstName, lastName, city, state, zipcode } = req.body;
    const { id } = req.params;

    UserService.update(id, username, email, firstName, lastName, city, state, zipcode)
        .then(() => {
            res.json({ success: `User with name: ${name} updated.` });
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
        });
});


// -- INSERT INTO users (name, email) VALUES
// -- ('John', 'john@email.com'), ('Michelle', 'michelle@email.com');

// -- INSERT INTO pets (owner, type, name, age) VALUES
// -- (2, 'bunny', 'Marshmello', 1), (2, 'dog', 'Chai', 2), (1, 'cat', 'Pixel', 5);