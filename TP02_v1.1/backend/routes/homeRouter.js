const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/user/:id',homeController.home);

router.get('/',homeController.home)

module.exports = router; 