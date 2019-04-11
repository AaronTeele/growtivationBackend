const db = require('./pgpromise')

const LikeService = {};

LikeService.create = (id, post_id) => {
  return db.none('INSERT INTO likes (person_liked_id, postID) VALUES ${id}, ${post_id})', {id, post_id})
};

LikeService.read = (id) => {
  return db.one('SELECT * FROM likes WHERE person_liked_id=${id}', {id});
};

LikeService.delete = (id, post_id) => {
  return db.none('DELETE * FROM likes WHERE postID=${post_id}, person_liked_id=${id};', {id, post_id});
};

module.exports = LikeService;