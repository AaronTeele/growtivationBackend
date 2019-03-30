const db = require('./pgpromise');

const CommentService = {};

CommentService.create = (post_id, author_id, content_text) => {
    return db.one('INSERT INTO comments (post_id, author_id, content_text) VALUES (${post_id}, ${author_id}, ${content_text})', { post_id, author_id, content_text })
};

CommentService.read = (id) => {
    return db.any('SELECT * FROM comments WHERE authorID=${id}', { id });
};

CommentService.update = (id, comment_id, content_text) => {
    return db.none('UPDATE comments SET content_text=${content_text}, updatedAt=NOW() WHERE id=${comment_id}, authorID={id}', { id, comment_id, content_text });
};

CommentService.delete = (comment_id) => {
    return db.none('DELETE FROM comments WHERE id=${comment_id};', { comment_id });
};

module.exports = CommentService;