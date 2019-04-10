const express = require('express');
const goalRouter = express.Router();
const GoalService = require('../services/goal');
const UserService = require('../services/user')

// POST - CREATE GOAL
goalRouter.post('/', (req, res) => {
    const { email, goal } = req.body;

    UserService.read(email)
    .then(() => {
        GoalService.create(id, goal)
        .then(() => {
            res.json({ success: `${goal} has successfully been added!` });
        })
        .catch(err => {
            res.json(err.toString());
        })
    })
    .catch(err => {
        res.json(err.toString());
    })
    
});

//GET - READ GOALS
goalRouter.get('/:goal_id', (req, res) => {
    const { goal_id } = req.params;

    GoalService.read(goal_id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString())
        })
});

// PUT - UPDATE GOAL
goalRouter.put('/:goal_id', (req, res) => {
    const { goal_id } = req.params;
    const { goal } = req.body;
    
    GoalService.update(goal_id, goal)
        .then(() => {
            res.json({ success: `${goal} has been updated` })
        })
        .catch(err => {
            res.json(err.toString());
        })
})

// DELETE - DELETE GOAL
goalRouter.delete('/:goal_id', (req, res) => {
    const { goal_id } = req.params;

    GoalService.delete(goal_id)
        .then(() => {
            res.json({ success: `Goal has been deleted` })
        })
        .catch(err => {
            res.json(err.toString())
        })
});

module.exports = goalRouter;