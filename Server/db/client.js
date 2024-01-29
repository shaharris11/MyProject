const { Client } = require('pg');


const client = new Client(`postgres://slime_user:ay6svxJWGhv9JFcBDcFW9rkIedTAbjD8@dpg-cmrv2a0cmk4c7383qp9g-a/slime`)

module.exports = client;