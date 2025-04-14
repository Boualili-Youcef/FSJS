const fs = require('fs/promises'); // https://nodejs.org/api/fs.html

let jokes = undefined
let path = __dirname + '/../data/jokes.json'

fs.readFile(path)
    .then((data) => {
        jokes = JSON.parse(data) ;
    })
    .catch((error) => {
        console.log(error)
    });


module.exports.list = (req, res, next)=>{
    res.render(__dirname + '/../views/pages/jokesList', { jokes }) ;
}

module.exports.random = (req, res,next)=>{
    let index = Math.floor(Math.random() * jokes.length);
    let elem = jokes[index] ;
    res.render(__dirname + '/../views/pages/joke', { joke : elem.joke })
}

module.exports.joke = (req, res,next)=>{
    let id = req.params.id
    let elem = jokes.find(el => el.id === id) ;
    res.render(__dirname + '/../views/pages/joke', { joke : elem.joke })
}
