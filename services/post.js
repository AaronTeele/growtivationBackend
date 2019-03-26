const db = require('./pgpromise')

const PostService = {};

PostService.create = (id, caption = " ", imgURL = " ") => {
  return db.none('INSERT INTO posts (authorID, caption, imgURL) VALUES ${id}, ${caption}, ${imgURL})', {id, caption, imgURL})
};

PostService.read = (postID) => {
  return db.one('SELECT username FROM users WHERE id=${postID}', {postID});
};

PostService.update = (postID, caption) => {
  return db.none('UPDATE posts SET caption=${caption}, WHERE id=${postID}', {postID, caption});
};

PostService.delete = (postID) => {
  return db.none('DELETE FROM posts WHERE id=${postID};', {postID});
};

module.exports = PostService;