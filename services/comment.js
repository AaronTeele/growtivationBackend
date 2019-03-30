const db = require('./pgpromise');

const CommentService = {};

CommentService.create = (id, post_id, content_text) => {
    return db.one('INSERT INTO comments (post_id, authorID, content_text) VALUES (${post_id}, ${id}, ${content_text})', { id, post_id, content_text })
};

CommentService.read = (id) => {
    return db.any('SELECT * FROM comments WHERE authorID=${id}', { id });
};

CommentService.update = (id, comment_id, content_text) => {
    return db.none('UPDATE comments SET content_text=${content_text} WHERE id=${comment_id}, authorID={id}', { id, comment_id, content_text });
};

CommentService.delete = (comment_id) => {
    return db.none('DELETE FROM comments WHERE id=${comment_id};', { comment_id });
};

module.exports = CommentService;