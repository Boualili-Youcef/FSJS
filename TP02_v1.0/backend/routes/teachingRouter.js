const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('teaching/index', { title: 'Enseignement' });
});

router.get('/javascript', (req, res) => {
    res.render('teaching/javascript', { title: 'Cours de JavaScript' });
});

router.get('/php', (req, res) => {
    res.render('teaching/php', { title: 'Cours de PHP' });
});

router.get('/node', (req, res) => {
    res.render('teaching/node/node', { title: 'Introduction à Node.js' });
});

router.get('/node/express', (req, res) => {
    res.render('teaching/node/express', { title: 'Cours sur le framework Express' });
});

module.exports = router;