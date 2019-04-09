const db = require('./pgpromise');

const UserService = {};

UserService.create = (email, auth_token) => {
  return db.none('INSERT INTO users (email, auth_token) VALUES (${email}, ${auth_token});', { email, auth_token })
};

UserService.read = (id) => {
  return db.one('SELECT * FROM users WHERE id=${id};', { id });
};

UserService.update = (email, auth_token) => {
  return db.none('UPDATE users SET email=${email}, ${auth_token}', {email, auth_token});
};


UserService.delete = (id) => {
  return db.none('DELETE FROM users WHERE id=${id};', { id });
};

module.exports = UserService;