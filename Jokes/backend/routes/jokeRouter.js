const express = require('express');
const router = express.Router();

const jokeRouter = require("../controllers/jokeController");

router.get('/jokes/joke/:id', jokeRouter.joke);

module.exports = router;