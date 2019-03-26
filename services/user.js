const db = require('./pgpromise');

const UserService = {};

UserService.create = (username, email, first_name, lastName, city, state_of_residence, zipcode) => {
  return db.none('INSERT INTO users (username, email, first_name, lastName, city, state_of_residence, zipcode) VALUES (${username}, ${email}, ${first_name}, ${lastName}, ${city}, ${state_of_residence}, ${zipcode});', { username, email, first_name, lastName, city, state_of_residence, zipcode })
};

UserService.read = (id) => {
  return db.one('SELECT * FROM users WHERE id=${id};', { id });
};

UserService.update = (id, username, email, first_name, lastName, city, state_of_residence, zipcode) => {
  return db.none('UPDATE users SET username=${username}, email=${email}, first_name=${first_name}, lastName=${lastName}, city=${city}, state_of_residence=${state_of_residence}, zipcode=${zipcode}, updatedAt=NOW() WHERE id=${id};', { id, username, email, first_name, lastName, city, state_of_residence, zipcode });
};


UserService.delete = (id) => {
  return db.none('DELETE FROM users WHERE id=${id};', { id });
};

module.exports = UserService;