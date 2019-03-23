const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comment');

// POST - CREATE COMMENT
commentRouter.post('/', (req, res) => {
    const { id } = req.params;
    const { postID, content_text } = req.body;

    CommentService.create(id, postID, content_text)
        .then(() => {
            res.json({ success: `Comment created.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ COMMENT
commentRouter.get('/', (req, res) => {
    const { id } = req.params;

    CommentService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// PUT - UPDATE COMMENT
commentRouter.put('/:commentID', (req, res) => {
    const { id, commentID } = req.params;
    const { content_text } = req.body;


    CommentService.update(id, commentID, content_text)
        .then(() => {
            res.json({ success: `Comment updated.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// DELETE - DELETE COMMENT
commentRouter.delete('/:commentID', (req, res) => {
    const { commentID } = req.params;

    CommentService.delete(commentID)
        .then(() => {
            res.json({ success: `Comment ${commentID} deleted.` });
        })
        .catch(err => {
            res.json(err.toString());
        });
});

module.exports = commentRouter;