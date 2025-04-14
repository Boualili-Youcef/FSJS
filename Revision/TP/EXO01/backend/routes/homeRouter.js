var express = require('express');
var router = express.Router();

const controller = require('../controllers/homeController')
router.get('/', controller.home);


module.exports = router;