// C'est pour charger des variables d'environnement à partir d'un fichier .env
require('dotenv').config({ path: './.env'} ) ;

const port = process.env.PORT || 3000

const http = require('http'); // Module HTTP natif de Node.js

const app = require('./app'); // inclusion d'Express

// mise en oeuvre : on délègue la gestion des requêtes à Express
const server = http.createServer(app);

server.listen(port,  ()=>{
    console.log(`Le server écoute sur http://0.0.0.0:${port}/`);
})