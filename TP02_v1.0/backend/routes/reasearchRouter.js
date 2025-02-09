const express = require('express');
const router = express.Router();

const reasearchController = require('../controllers/reasearchController');

router.get("/", reasearchController.reasearch);

module.exports = router;