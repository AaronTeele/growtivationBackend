const express = require('express');
const goalRouter = express.Router();
const GoalService = require('../services/goal');

// POST - CREATE GOAL
goalRouter.post('/', (req, res) => {
    const { id } = req.params;
    const { username, goal } = req.body;
    GoalService.read(id)
    .then(() => {
        GoalService.create(username, goal)
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
goalRouter.get('/', (req, res) => {
    const { id } = req.params;

    GoalService.read(id)
        .then(data => {
            alert(data)
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
goalRouter.delete('/goal_id', (req, res) => {
    const { goal_id } = req.params;

    GoalService.delete(goal_id)
        .then(() => {
            res.jsos({ success: `Goal has been deleted` })
        })
        .catch(err => {
            res.json(err.toString())
        })
});

module.exports = goalRouter;