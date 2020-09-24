const express = require('express');
const router = express.Router();

router.get('/test', (req, res, next) => {
    // res.send('test page');
    res.sendFile('../index.html', { root: __dirname });
});

module.exports = router;