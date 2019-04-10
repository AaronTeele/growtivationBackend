const db = require('./pgpromise');

const CommentService = {};

CommentService.create = (post_id, author_id, content_text) => {
    return db.none('INSERT INTO comments (post_id, author_id, content_text) VALUES (${post_id}, ${author_id}, ${content_text});', { post_id, author_id, content_text })
};

CommentService.read = (comment_id) => {
    return db.one('SELECT * FROM comments WHERE id=${comment_id}', { comment_id });
};

CommentService.update = (author_id, comment_id, content_text) => {
    return db.none('UPDATE comments SET content_text=${content_text}, updatedAt=NOW() WHERE id=${comment_id}, author_id={author_id}', { author_id, comment_id, content_text });
};

CommentService.delete = (comment_id) => {
    return db.none('DELETE FROM comments WHERE id=${comment_id};', { comment_id });
};

module.exports = CommentService;