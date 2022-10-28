const Pool = require('pg').Pool;
require('dotenv').config();

const password = process.env.PSQL_PASSWORD;

const pool = new Pool({
    user: 'postgres',
    password: password,
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports = pool;