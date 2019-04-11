const db = require('./pgpromise');

const GoalService = {};
GoalService.create = ( email, goal) => {
    return db.none('INSERT INTO goals (email, goal) VALUES (${email}, ${goal})', {email, goal})
};

GoalService.read = (goal_id) => {
  return db.any('SELECT goal FROM goals WHERE user_id=${goal_id}', { goal_id })
};


GoalService.update = (goal_id, goal) => {
  return db.none('UPDATE goals SET goal=${goal}, updatedAt=NOW() WHERE id=${goal_id}', { goal_id, goal })
};

GoalService.delete = (goal_id) => {
  return db.none('DELETE FROM goals WHERE id=${goal_id}', { goal_id })
};

module.exports = GoalService;