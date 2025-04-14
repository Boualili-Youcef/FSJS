const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');

router.get('/', formController.form);
  
router.post('/', formController.form);

module.exports = router; 