const Food = require("../models/Food");

module.exports.menu = (req, res, next) => {
  Food.find()
    .sort("name : 1")
    .then((foods) => {
      res.render("./pages/Menu", { foods });
    })
    .catch((error) => res.status(400).send(error));
};


module.exports.details = (req, res, next) => {
  const id = req.params.id
  Food.findById(id)
    .then((food) => {
      res.render("./pages/details", { food: food });
    })
    .catch((error) => res.status(400).send(error));
};
