const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router.get("/delete/:id", listController.delete);
router.get("/create", listController.createMovie);
router.post("/create", listController.create);
router.get("/update/:id", listController.editPage);
router.post("/update/:id", listController.edit);
router.get("/:id", listController.id);
router.get("/", listController.list);

module.exports = router;