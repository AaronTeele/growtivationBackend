const db = require('./pgpromise');

const GoalService = {};

GoalService.create = (id, goal) => {
  return db.one('INSERT INTO goals (userID, goal) VALUES (${id}, ${goal}', {id, goal})
};

GoalService.read = (id) => {
  return db.any('SELECT * FROM goals WHERE userID=${id}', { id })
};


GoalService.update = (goalID, goal) => {
  return db.one('UPDATE goals SET goal=${goal} WHERE id={goalID})', { goalID, goal })
};

GoalService.delete = (goalID) => {
  return db.none('DELETE FROM goals WHERE goalID=${goalID}', { goalID })
};

module.exports = GoalService;