const db = require('./pgpromise')

const UserService = {};

UserService.create = (username, email, firstName, lastName, city, state, zipcode) => {
  return db.none('INSERT INTO users (${username}, ${email}, ${firstName}, ${lastName}, ${city}, ${state}, ${zipcode}) VALUES (username, email, firstName, lastName, city, state, zipcode)', {username, email, firstName, lastName, city, state, zipcode})
};


UserService.read = (id) => {
  return db.one('SELECT username FROM users WHERE id=${id}', {id: id});
};

UserService.readGoals = (id) => {
  return db.one('SELECT ')
}

UserService.update = (id, username, email, firstName, lastName, city, state, zipcode) => {
  return db.none('UPDATE users SET username=${username}, email=${email}, firstName=${firstName}, lastName=${lastname}, city=${city}, state=${state}, zipcode=${zipcode} WHERE id=${id}', {id, username, email, firstName, lastName, city, state, zipcode});
};

UserService.delete = (id) => {
  return db.none('DELETE FROM users WHERE user=${id};', {id});
};

module.exports = UserService;
