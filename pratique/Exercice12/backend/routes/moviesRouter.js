const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/moviesController");

router.get("/", moviesController.list);
router.get("/create", moviesController.create);
router.get("/read", moviesController.read);
router.get("/update", moviesController.update);
router.get("/delete", moviesController.delete);

module.exports = router; // Export router