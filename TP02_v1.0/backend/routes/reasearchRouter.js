const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send('Bienvenue sur la page de recherche');
});

module.exports = router;