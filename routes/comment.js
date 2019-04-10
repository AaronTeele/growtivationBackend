const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comment');

// POST - CREATE COMMENT
commentRouter.post('/:post_id', (req, res) => {
    const { post_id } = req.params;
    const { author_id, content_text } = req.body;

    CommentService.create(post_id, author_id, content_text)
        .then(() => {
            res.json({ success: `Comment created.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ COMMENT
commentRouter.get('/:post_id/:comment_id', (req, res) => {
    const { comment_id } = req.params;

    CommentService.read(comment_id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// PUT - UPDATE COMMENT
commentRouter.put('/:post_id/:comment_id', (req, res) => {
    const { comment_id } = req.params;
    const { author_id, content_text } = req.body;
    
    CommentService.read = (comment_id)
    .then(()=> {
        CommentService.update(author_id, comment_id, content_text)
        .then(() => {
            res.json({ success: `Comment updated.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
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