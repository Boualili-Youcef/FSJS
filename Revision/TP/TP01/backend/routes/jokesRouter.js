var express = require('express');
var router = express.Router();

const jokeController = require('../controllers/jokesController')
router.get('/list', jokeController.list);
router.get('/random', jokeController.random);
router.get('/joke/:id', jokeController.joke);
router.get("/info", jokeController.info)

module.exports = router;