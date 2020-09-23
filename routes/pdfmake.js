const express = require('express');
const router = express.Router();

router.post('/pdf', (req, res, next) => {
    res.send('is this page working as well?');
});

module.exports = router;