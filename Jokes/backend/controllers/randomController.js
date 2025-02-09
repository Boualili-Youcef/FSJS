const path = require('path');
const fs = require('fs/promises');

module.exports.random = async (req, res) => {
    try {
        const dataPath = path.join(__dirname, '../data/jokes.json');
        const data = await fs.readFile(dataPath, 'utf8');
        const jsonData = JSON.parse(data);
        const randomJoke = jsonData[Math.floor(Math.random()*jsonData.length)];
        res.render('jokes/random', { title: 'Random', jokes: randomJoke });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error reading data');
    }
};