const express = require('express');
const postRouter = express.Router();
const PostService = require('../services/post');

// POST - CREATE POST
postRouter.post('/', (req, res) => {
    const { id } = req.params;
    const { caption, imgURL } = req.body;

    PostService.create( id, caption, imgURL)
        .then(() => {
            res.json({ success: `Post successfully created.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ POST
postRouter.get('/:postID', (req, res) => {
    const { postID } = req.params;

    PostService.read(postID)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// PUT - UPDATE POST
postRouter.put('/:postID', (req, res) => {
    const { postID } = req.params;
    const { caption } = req.body;
    
    PostService.update(postID, caption)
        .then(() => {
            res.json({ success: `Post updated.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// DELETE - DELETE POST
postRouter.delete('/:postID', (req, res) => {
    const { postID } = req.params;

    PostService.delete(postID)
        .then(() => {
            res.json({ success: `Post deleted.` });
        })
        .catch(err => {
            res.json(err.toString());
        });
});

module.exports = postRouter;