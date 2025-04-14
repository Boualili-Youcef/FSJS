const fs = require('fs/promises'); // https://nodejs.org/api/fs.html

let jokes = undefined
let path = __dirname + '/../data/jokes.json'

readJokes = async () => {
    data = await fs.readFile(path)
    jokes = JSON.parse(data)
}

module.exports.list = async (req, res, next) => {
    if(jokes == undefined) await readJokes()
    res.render(__dirname + '/../views/pages/jokesList', {jokes});
}

module.exports.random = async (req, res, next) => {
    if (jokes == undefined) await readJokes()
    let index = Math.floor(Math.random() * jokes.length);
    let elem = jokes[index];
    res.render(__dirname + '/../views/pages/joke', {joke: elem.joke})
}
