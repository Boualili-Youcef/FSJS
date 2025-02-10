const path = require("path");
const fs = require("fs/promises");

module.exports.joke = async (req, res) => {
  try {
    const dataPath = path.join(__dirname, "../data/jokes.json");
    const data = await fs.readFile(dataPath, "utf8");
    const jsonData = JSON.parse(data);
    const query = req.params.id;
    
    // Trouver la blague correspondant à l'ID de la requête
    let joke = jsonData.find(j => j.id === query);
        
    console.log(joke.id);


    if (joke) {
      res.render("jokes/joke", { title: "The Joke", joke: joke.joke });
    } else {
      res.status(404).send("Joke not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error reading data");
  }
};