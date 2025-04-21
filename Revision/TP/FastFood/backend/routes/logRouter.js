var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/logController')
router.get('/', controller.loginForm);
router.post('/', controller.login);


router.get('/create', controller.createForm);
router.post('/create', controller.create);


router.get('/update/:id', controller.updateForm);
router.post('/update/:id', controller.update);

router.get('/delete/:id', controller.delete);

module.exports = router;