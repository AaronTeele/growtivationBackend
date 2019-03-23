const db = require('./pgpromise');

const CommentService = {};

CommentService.create = (id, postID, content_text) => {
    return db.one('INSERT INTO comments (postID, authorID, content_text) VALUES (${postID}, ${id}, ${content_text})', { id, postID, content_text })
};

CommentService.read = (id) => {
    return db.any('SELECT * FROM comments WHERE authorID=${id}', { id });
};

CommentService.update = (id, commentID, content_text) => {
    return db.none('UPDATE comments SET content_text=${content_text} WHERE id=${commentID}, authorID={id}', { id, commentID, content_text });
};

CommentService.delete = (commentID) => {
    return db.none('DELETE FROM comments WHERE id=${commentID};', { commentID });
};

module.exports = CommentService;