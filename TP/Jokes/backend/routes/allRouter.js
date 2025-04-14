const express = require('express');
const router = express.Router();

const allController = require('../controllers/allController');

router.get('/', allController.all);
router.get('/jokes', allController.all);
router.get('/jokes/list', allController.all);


module.exports = router;