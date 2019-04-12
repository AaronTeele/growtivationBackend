const db = require('./pgpromise');

const FollowerService = {};

FollowerService.create = (id, followed_id) => {
    return db.none('INSERT INTO followers (person_following_id, person_being_followed_id) VALUES (person_following_id=${id}, person_being_followed_id=${followed_id})', { id, followed_id })
};

FollowerService.read = (id) => {
    return db.any('SELECT * FROM followers WHERE person_being_followed_id=${id}', { id });
};

FollowerService.delete = (id, followedID) => {
    return db.none('DELETE * FROM followers WHERE person_following_id=${id}, person_being_followed_id=${followedID};', { id, followedID });
};

module.exports = FollowerService;