const db = require('./pgpromise')

const LikeService = {};

LikeService.create = (post_id, id) => {
  return db.none('INSERT INTO likes (post_id, person_liked_id) VALUES ${post_id}, ${id})', {post_id, id})
};

LikeService.read = (id) => {
  return db.one('SELECT * FROM likes WHERE person_liked_id=${id}', {id});
};

LikeService.delete = (post_id, id) => {
  return db.none('DELETE * FROM likes WHERE post_id=${post_id}, person_liked_id=${id};', {post_id, id});
};

module.exports = LikeService;