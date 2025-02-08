// C'est pour charger des variables d'environnement à partir d'un fichier .env
require('dotenv').config({ path: './.env'} ) ;

const port = process.env.PORT || 3000

const http = require('http'); // Module HTTP natif de Node.js

const app = require('./app'); // inclusion d'Express

// mise en oeuvre : on délègue la gestion des requêtes à Express
const server = http.createServer(app);

const os = require('os');

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}

server.listen(port, ()=> {
    console.log(`Le serveur écoute sur http://${getLocalIP()}:${port}/`);
});