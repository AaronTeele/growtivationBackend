const { DATABASE_URL } = process.env
const pgp = require('pg-promise')({});
// pgp.pg.defaults.ssl = true;
const db = pgp(DATABASE_URL);

module.exports = db;