const db = require('./pgpromise');

const UserService = {};

UserService.create = (username, email, firstName, lastName, city, state_of_residence, zipcode) => {
  return db.none('INSERT INTO users (username, email, firstName, lastName, city, state_of_residence, zipcode) VALUES (${username}, ${email}, ${firstName}, ${lastName}, ${city}, ${state_of_residence}, ${zipcode});', {username, email, firstName, lastName, city, state_of_residence, zipcode})
};

UserService.read = (id) => {
  return db.one('SELECT * FROM users WHERE id=${id};', {id});
};

UserService.update = (id, username, email, firstName, lastName, city, state_of_residence, zipcode) => {
  return db.none('UPDATE users SET username=${username}, email=${email}, firstName=${firstName}, lastName=${lastName}, city=${city}, state_of_residence=${state_of_residence}, zipcode=${zipcode} WHERE id=${id};', {id, username, email, firstName, lastName, city, state_of_residence, zipcode});
};


UserService.delete = (id) => {
  UserService.read(id) ? db.none('DELETE FROM users WHERE id=${id};', {id}) : "user not found";
};

module.exports = UserService;