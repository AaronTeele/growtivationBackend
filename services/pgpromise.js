const pgp = require('pg-promise')({});
const db = pgp('postgres://postgres@localhost:5432/growtivation');

module.exports = db;