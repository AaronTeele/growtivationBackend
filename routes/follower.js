const express = require('express');
const followerRouter = express.Router();
const FollowerService = require('../services/follower');

// POST - FOLLOW
followerRouter.post('/:followed_id', (req, res) => {
    const { followed_id } = req.params;
    const { id } = req.body;
    FollowerService.create(id, followed_id)
        .then(() => {
            res.json({ success: `You are now following ${followed_id}!` });
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// GET - READ FOLLOWERS
followerRouter.get('/', (req, res) => {
    const { id } = req.params;

    FollowerService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString());
        })
});

// DELETE - STOP FOLLOWING
followerRouter.delete('/:followedID', (req, res) => {
    const { id, followedID } = req.params;

    FollowerService.delete(id, followedID)
        .then(() => {
            res.json({ success: `${followedID} unfollowed.` });
        })
        .catch(err => {
            res.json(err.toString());
        });
});

module.exports = followerRouter;