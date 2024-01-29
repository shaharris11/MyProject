const { Client } = require('pg');

const dbName = "slime"
const client = new Client(`https://theslimewebsite.onrender.com/${dbName}`)

module.exports = client;