const db = require('./pgpromise');

const GoalService = {};

GoalService.create = (user_name, goal) => {
  return db.none('INSERT INTO goals (user_id, goal) VALUES ((SELECT id FROM users WHERE user_name = ${user_name}), ${goal})', {user_name, goal})
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