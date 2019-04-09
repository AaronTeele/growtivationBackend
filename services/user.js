const db = require('./pgpromise');

const UserService = {};

UserService.create = (email, auth_token) => {
  return db.none('INSERT INTO users (email, auth_token) VALUES (${email}, ${auth_token});', { email, auth_token })
};

UserService.read = (email) => {
  return db.one('SELECT * FROM users WHERE email=${email};', { email });
};

UserService.update = (email, auth_token) => {
  return db.none('UPDATE users SET email=${email}, ${auth_token}', {email, auth_token});
};


UserService.delete = (email) => {
  return db.none('DELETE FROM users WHERE email=${email};', { email });
};

module.exports = UserService;