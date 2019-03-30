const db = require('./pgpromise')

const PostService = {};

PostService.create = (id, caption = " ", img_url = " ") => {
  return db.none('INSERT INTO posts (author_id, caption, img_url) VALUES ((SELECT id FROM users WHERE username = ${username}), ${caption} ${img_url})', {id, caption, img_url})
};

PostService.read = (post_id) => {
  return db.one('SELECT username FROM users WHERE id=${postID}', {post_id});
};

PostService.update = (post_id, caption) => {
  return db.none('UPDATE posts SET caption=${caption}, WHERE id=${post_id}', {post_id, caption});
};

PostService.delete = (post_id) => {
  return db.none('DELETE FROM posts WHERE id=${post_id};', {post_id});
};



module.exports = PostService;