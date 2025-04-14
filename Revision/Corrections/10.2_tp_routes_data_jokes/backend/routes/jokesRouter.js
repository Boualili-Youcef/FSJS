var express = require('express');
var router = express.Router();

const jokesController = require('../controllers/jokesController')
router.get('/list', jokesController.list);

router.get('/random', jokesController.random);

router.get('/joke/:id', jokesController.joke);

module.exports = router;