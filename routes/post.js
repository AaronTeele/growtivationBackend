const express = require('express');
const postRouter = express.Router();
const PostService = require('../services/post');

// POST - CREATE POST
postRouter.post('/:id', (req, res) => {
    const { id } = req.params;
    const { caption, img_url } = req.body;

    PostService.create(id, caption, img_url)
        .then(() => {
            res.json({ success: `Post successfully created.` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ POST
postRouter.get('/:post_id', (req, res) => {
    const { post_id } = req.params;

    PostService.read(post_id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
})

    // PUT - UPDATE POST
    postRouter.put('/:post_id', (req, res) => {
        const { post_id } = req.params;
        const { caption } = req.body;

        PostService.update(post_id, caption)
            .then(() => {
                res.json({ success: `Post updated.` });
            })
            .catch(err => {
                res.json(err.toString());
            })
    })

    // DELETE - DELETE POST
    postRouter.delete('/:post_id', (req, res) => {
        const { post_id } = req.params;

        PostService.delete(post_id)
            .then(() => {
                res.json({ success: `Post deleted.` });
            })
            .catch(err => {
                res.json(err.toString());
            });
    });

    module.exports = postRouter;