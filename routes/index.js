const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('kaka');
});

module.exports = router;