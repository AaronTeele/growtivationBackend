const db = require('./pgpromise');

const FollowerService = {};

FollowerService.create = (id, followedID) => {
    return db.one('INSERT INTO followers (person_following_id, person_being_followed_id) VALUES (person_following_id=${id}, person_being_followed_id=${followedID})', { id, followedID })
};

FollowerService.read = (id) => {
    return db.any('SELECT * FROM followers WHERE person_being_followed_id=${id}', { id });
};

FollowerService.delete = (id, followedID) => {
    return db.none('DELETE * FROM followers WHERE person_following_id=${id}, person_being_followed_id=${followedID};', { id, followedID });
};

module.exports = FollowerService;