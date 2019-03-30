const db = require('./pgpromise');

const GoalService = {};
//************************************//
GoalService.create = ( id, goal) => {
  // const { username } = db.one('SELECT username From users WHERE id = ${id}', { id })
    return db.none('INSERT INTO goals (user_id, goal) VALUES (${id}, ${goal})', {id, goal})
  // return db.none('INSERT INTO goals (user_id, goal) VALUES ((SELECT id FROM users WHERE username = ${username}), ${goal})', {username, goal})
};

GoalService.read = (goal_id) => {
  return db.any('SELECT goal FROM goals WHERE user_id=${goal_id}', { goal_id })
};


GoalService.update = (goal_id, goal) => {
  return db.one('UPDATE goals SET goal=${goal} WHERE id={goal_id}', { goal_id, goal })
};

GoalService.delete = (goal_id) => {
  return db.none('DELETE FROM goals WHERE goal_id=${goal_id}', { goal_id })
};

module.exports = GoalService;