var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/pagesController')
router.get('/browse', controller.browse);

router.get("/login", controller.loginForm);
router.post("/login", controller.login);

module.exports = router;