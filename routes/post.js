const express = require('express');
const postRouter = express.Router();
const PostService = require('../services/post');

// POST - CREATE post
postRouter.post('/', (req, res) => {
    const { authorID, caption, image_url_array } = req.body;

    PostService.create(authorID, caption, image_url_array)
        .then(() => {
            res.json({ success: `post created.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ USER
postRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    PostService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// PUT - UPDATE USER
postRouter.put('/:id', (req, res) => {
    const { username, email, firstName, lastName, city, state, zipcode } = req.body;
    const { id } = req.params;

    PostService.update(id, username, email, firstName, lastName, city, state, zipcode)
        .then(() => {
            res.json({ success: `User with name: ${name} updated.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// DELETE - DELETE USER
postRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    PostService.delete(id)
        .then(() => {
            res.json({ success: `User with ID: ${id} deleted.` });
        })
        .catch(err => {
            res.json(err.toString());
        });
});

module.exports = postRouter;