const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  // NB : le champ _id est automatiquement créé

  name: { type: String, required: true },
  description: { type: String, default: "No description available yet !" },
  price: { type: Number, required: true },
  category: { type: String },
  image: { type: String },
});

// Si on ne précise pas le nom de la collection, un nom basé sur le nom du Schéma
// est automatiquement créé : schéma Movie -> collection movies
module.exports = mongoose.model("Food", foodSchema, "menu");
// NB : on aurait pu donner un nom de collection personnalisé -> ex. 'oldmovies'
// module.exports = mongoose.model('Movie', movieSchema, 'oldmovies') ;
