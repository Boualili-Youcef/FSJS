const Movie = require("../models/Movie");
module.exports.list = (req, res) => {
  Movie.find()
    .sort({ title: "asc" })
    .then((movies) => {
      res.render("pages/moviesList", { movies });
    })
    .catch((error) => res.status(400).send(error));
};

module.exports.create = async (req, res) => {
  try {
    // Vérifier si le film existe déjà
    const existingMovie = await Movie.findOne({ title: "House" });

    if (existingMovie) {
      console.log("Le film existe déjà");
      return res.redirect("/movies");
    }

    // Ajouter le film
    const newMovie = await Movie.create({ title: "House" });

    console.log(newMovie);
    res.redirect("/movies");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.read = async (req, res) => {
  try {
    const movie = await Movie.findOne({ title: "House" });

    if (!movie) {
      console.log("Le film n'existe pas");
      return res.redirect("/movies");
    }
    console.log(movie);
    res.render("pages/moviesRead", { movie });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { title: "House" },
      { $set: { title: "New House", synopsis: "Welcome to the house" } },
      { new: true }
    );
    console.log(movie);
    res.redirect("/movies");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.delete = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({ title: "New House" });
    console.log(movie);
    res.redirect("/movies");
  } catch (error) {
    res.status(400).send(error);
  }
}
