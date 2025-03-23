const Movie = require("../models/Movie");

module.exports.list = (req, res) => {
  Movie.find()
    .sort({ title: "asc" })
    .then((movies) => {
      res.render("pages/moviesList", { movies });
    })
    .catch((error)=> res.status(400).send(error));
};

module.exports.id = (req, res) => {
    Movie.findById(req.params.id)
      .sort({ title: "asc" })
      .then((movie) => {
        res.render("pages/movieID", { movie });
      })
      .catch((error)=> res.status(400).send(error));
  };
