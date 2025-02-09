const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('teaching/index', { title: 'Enseignement' });
});

router.get('/javascript', (req, res) => {
    res.render('teaching/javascript', { title: 'JavaScript' });
});

router.get('/php', (req, res) => {
    res.render('teaching/php', { title: 'PHP' });
});

router.get('/node', (req, res) => {
    res.render('teaching/node/node', { title: 'Node.js' });
});

router.get('/node/express', (req, res) => {
    res.render('teaching/node/express', { title: 'Express' });
});

module.exports = router;