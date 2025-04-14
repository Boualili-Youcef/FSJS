const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/moviesController");

router.get("/", moviesController.home);
router.get("/movies", moviesController.home);

module.exports = router;