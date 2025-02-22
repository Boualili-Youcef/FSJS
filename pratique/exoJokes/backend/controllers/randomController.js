const fs = require('fs').promises;

module.exports.random = async function random(req, res) {
	try {
		const data = await fs.readFile('./data/jokes.json', 'utf-8');
		const jokes = JSON.parse(data);
		const joke = jokes[Math.floor(Math.random() * jokes.length)];
		res.render('pages/random', { title: "Random", joke });
	} catch (err) {
		console.error('Error reading jokes.json:', err);
		res.status(500).send('Server Error');
	}
}

