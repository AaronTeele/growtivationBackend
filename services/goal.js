const db = require('./pgpromise');

const GoalService = {};

GoalService.create = (id, goal) => {
  return db.one('INSERT INTO goals (user_id, goal) VALUES (${id}, ${goal}', {id, goal})
};

GoalService.read = (id) => {
  return db.any('SELECT * FROM goals WHERE user_id=${id}', { id })
};


GoalService.update = (goal_id, goal) => {
  return db.one('UPDATE goals SET goal=${goal} WHERE id={goal_id})', { goal_id, goal })
};

GoalService.delete = (goal_id) => {
  return db.none('DELETE FROM goals WHERE goal_id=${goal_id}', { goal_id })
};

module.exports = GoalService;