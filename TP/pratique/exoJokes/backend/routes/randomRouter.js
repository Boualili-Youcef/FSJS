const express = require("express");
const router = express.Router();

const randomController = require("../controllers/randomController");

router.get("/random", randomController.random);

module.exports = router;
