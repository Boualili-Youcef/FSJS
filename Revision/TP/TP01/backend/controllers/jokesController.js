const fs = require('fs/promises');

let jokes = undefined
let path = __dirname + '/../data/jokes.json'

readJokes = async () => {
    data = await fs.readFile(path)
    jokes = JSON.parse(data)
}

module.exports.list = async (req, res, next)=>{
    if(jokes === undefined){
        await readJokes()
    }

    res.render('pages/jokesList', {jokes: jokes})
}

module.exports.random = async (req, res, next)=>{
    if(jokes === undefined){
        await readJokes()
    }
    let index = Math.floor(Math.random() * jokes.length)
    let joke = jokes[index]
    console.log(joke)
    res.render('pages/joke', {joke: joke})
}

module.exports.joke =  async (req, res, next)=>{
    if(jokes === undefined){
        await readJokes()
    }
    let id = req.params.id;
    let joke = jokes.find((el)=>{
        return el.id === id
    })
    res.render('pages/joke', {joke: joke})
}

module.exports.info = (req, res)=>{
    const query = req.query
    res.render('pages/info', {query})
}