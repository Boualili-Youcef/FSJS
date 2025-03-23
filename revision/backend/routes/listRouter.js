const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router.get("/", listController.list);
router.get("/:id", listController.id);

module.exports = router;