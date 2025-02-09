const path = require('path');
const fs = require('fs/promises');

module.exports.all = async (req, res) => {
    try {
        const dataPath = path.join(__dirname, '../data/jokes.json');
        const data = await fs.readFile(dataPath, 'utf8');
        const jsonData = JSON.parse(data);
        res.render('jokes/list', { title: 'Accueil', jokes: jsonData });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error reading data');
    }
};