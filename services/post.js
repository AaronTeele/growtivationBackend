const db = require('./pgpromise')

const PostService = {};

PostService.create = (id, caption = null, img_url = null) => {
  if (!caption && !img_url) err
  return db.none('INSERT INTO posts (author_id, caption, img_url) VALUES (${id}, ${caption}, ${img_url})', {id, caption, img_url})
};

PostService.read = (post_id) => {
  return db.one('SELECT caption, img_url FROM posts WHERE id=${post_id}', {post_id});
};

PostService.update = (post_id, caption = null, img_url = null) => {
  return db.none('UPDATE posts SET caption=${caption}, img_url=${img_url} WHERE id=${post_id}', {post_id, caption, img_url});
};

PostService.delete = (post_id) => {
  return db.none('DELETE FROM posts WHERE id=${post_id};', {post_id});
};



module.exports = PostService;