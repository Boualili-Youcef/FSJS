var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/moviesController')
router.get('/', controller.list);

router.get("/create", controller.createForm);
router.post("/create", controller.create);


router.get("/update/:id", controller.updateForm);
router.post("/update/:id", controller.update);

router.get("/:id", controller.info);


module.exports = router;