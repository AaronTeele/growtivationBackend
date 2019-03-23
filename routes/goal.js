const express = require('express');
const goalRouter = express.Router();
const GoalService = require('../services/goal');

// POST - CREATE GOAL
goalRouter.post('/', (req, res) => {
    const { id } = req.params;
    const { goal } = req.body;

    GoalService.create(id, goal)
        .then(() => {
            res.json({ success: `${goal} has successfully been added!` });
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
            res.json(data);
        })
        .catch(err => {
            res.json(err.toString())
        })
});

// PUT - UPDATE GOAL
goalRouter.put('/:goalID', (req, res) => {
    const { goalID } = req.params;
    const { goal } = req.body;
    
    GOalService.update(goalID, goal)
        .then(() => {
            res.json({ success: `${goal} has been updated` })
        })
        .catch(err => {
            res.json(err.toString());
        })
})

// DELETE - DELETE GOAL
goalRouter.delete('/goalID', (req, res) => {
    const { goalID } = req.params;

    Goalervice.delete(goalID)
        .then(() => {
            res.jsos({ success: `Goal has been deleted` })
        })
        .catch(err => {
            res.json(err.toString())
        })
});

module.exports = goalRouter;