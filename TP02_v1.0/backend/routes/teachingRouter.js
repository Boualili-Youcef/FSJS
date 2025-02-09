const express = require('express');
const router = express.Router();

router.get("/",(req, res)=>{
    res.send('<h1>Enseignement</h1>');
});

router.get('/javascript', (req, res) => {
    res.send('<h1>Cours de JavaScript</h1>') ;
});

router.get('/php', (req, res) => {
    res.send('<h1>Cours de PHP</h1>') ;
});

router.get('/node', (req, res) => {
    res.send('<h1>Introduction à Node.js</h1>') ;
});

router.get('/node/express', (req, res) => {
    res.send('<h1>Cours sur le framework Express</h1>') ;
});

module.exports = router;