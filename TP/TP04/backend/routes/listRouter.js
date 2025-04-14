const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router.get("/list", listController.list);
router.get("/id/:id", listController.id);
router.get("/delete", listController.delete);

module.exports = router;