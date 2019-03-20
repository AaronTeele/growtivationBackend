const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/growtivation');

const PostService = {};

PostService.create = (authorID, caption, image_url_array) => {
  return db.none('INSERT INTO users (${authorID}, ${caption}, ${image_url_array}, ${lastName}, ${city}, ${state}, ${zipcode}) VALUES (username, email, firstName, lastName, city, state, zipcode)', {username, email, firstName, lastName, city, state, zipcode})
};

PostService.read = (id) => {
  return db.one('SELECT username FROM users WHERE id=${id}', {id: id});
};

PostService.update = (id) => {
  return db.none('UPDATE users SET username=${username}, email=${email}, firstName=${firstName}, lastName=${lastname}, city=${city}, state=${state}, zipcode=${zipcode} WHERE id=${id}', {username, email, firstName, lastName, city, state, zipcode});
};

PostService.delete = (id) => {
  return db.none('DELETE FROM users WHERE user=${id};', {id});
};

module.exports = PostService;