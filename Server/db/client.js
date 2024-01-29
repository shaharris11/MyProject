const { Client } = require('pg');

const dbName = "MyWebsite"
const client = new Client(`postgres://localhost:3546/${dbName}`)

module.exports = client;