const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/user/:id',homeController.home);

module.exports = router; 