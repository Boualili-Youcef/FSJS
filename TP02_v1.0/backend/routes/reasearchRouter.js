const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('reasearch/reasearch', { title: 'Recherche' });
});

module.exports = router;