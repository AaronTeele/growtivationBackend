const db = require('./pgpromise')

const LikeService = {};

LikeService.create = (id, postID) => {
  return db.none('INSERT INTO likes (person_liked_id, postID) VALUES ${id}, ${postID})', {id, postID})
};

LikeService.read = (id) => {
  return db.one('SELECT * FROM likes WHERE person_liked_id=${id}', {id});
};

LikeService.delete = (id, postID) => {
  return db.none('DELETE * FROM likes WHERE postID=${postID}, person_liked_id=${id};', {id, postID});
};

module.exports = LikeService;