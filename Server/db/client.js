const { Client } = require('pg');

const client = new Client(`postgres://localhost:3546/${slime}`)

module.exports = client;