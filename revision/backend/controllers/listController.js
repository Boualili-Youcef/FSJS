const Movie = require("../models/Movie");

module.exports.list = (req, res) => {
  Movie.find()
    .sort({ title: "asc" })
    .then((movies) => {
      res.render("pages/moviesList", { movies });
    })
    .catch((error) => res.status(400).send(error));
};

module.exports.id = (req, res) => {
  Movie.findById(req.params.id)
    .sort({ title: "asc" })
    .then((movie) => {
      res.render("pages/movieID", { movie });
    })
    .catch((error) => res.status(400).send(error));
};

module.exports.editPage = (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("pages/moviesEdit", { movie });
    })
    .catch((error) => res.status(400).send(error));
};

module.exports.edit = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      synopsis: req.body.synopsis,
      image: req.body.image,
    });
    console.log(req.body.title);
    res.redirect(`/movies/${req.params.id}`);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.createMovie = (req, res) => {
  res.render("pages/movieCreate");
};

module.exports.create = async (req, res) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      synopsis: req.body.synopsis,
      image: req.body.image,
    });
    await newMovie.save();
    res.redirect(`/movies/${newMovie._id}`);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.delete = async (req, res) => {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.redirect(`/movies`);
    } catch (e) {
      res.status(400).send(e);
    }
  };