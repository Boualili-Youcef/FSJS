var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/menuController')
router.get('/', controller.menu);
router.get("/:id", controller.details);

module.exports = router;