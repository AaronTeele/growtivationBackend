const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comment');

// POST - CREATE COMMENT
commentRouter.post('/', (req, res) => {
    const { id } = req.params;
    const { post_id, content_text } = req.body;

    CommentService.create(id, post_id, content_text)
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
commentRouter.put('/:comment_id', (req, res) => {
    const { id, comment_id } = req.params;
    const { content_text } = req.body;


    CommentService.update(id, comment_id, content_text)
        .then(() => {
            res.json({ success: `Comment updated.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// DELETE - DELETE COMMENT
commentRouter.delete('/:comment_id', (req, res) => {
    const { comment_id } = req.params;

    CommentService.delete(comment_id)
        .then(() => {
            res.json({ success: `Comment ${comment_id} deleted.` });
        })
        .catch(err => {
            res.json(err.toString());
        });
});

module.exports = commentRouter;