const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) => {
    res.send('OK');
});

router.use('/characters', require('./characters'));

// router.use('/places', require('../'));

// router.use('/monsters', require('./monsters'));

module.exports = router;