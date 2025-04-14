var express = require('express');
var router = express.Router();

const controller = require('../controllers/aproposController')
router.get('/', controller.about);

module.exports = router;