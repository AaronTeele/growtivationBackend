const express = require('express');
const likeRouter = express.Router();
const LikeService = require('../services/like');

// POST - CREATE LIKE
likeRouter.post('/:post_id', (req, res) => {
    const { post_id } = req.params;
    const { id } = req.body;

    LikeService.create(id, post_id)
        .then(() => {
            res.json({ success: `Post liked.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ LIKES
likeRouter.get('/', (req, res) => {
    const { id } = req.params;

    likeService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// DELETE - DELETE LIKE
likeRouter.delete('/:postID', (req, res) => {
    const { id, postID } = req.params;

    LikeService.delete(id, postID)
        .then(() => {
            res.json({ success: `Post unliked.` });
        })
        .catch(err => {
            res.json(err.toString());
        });
});

module.exports = likeRouter;