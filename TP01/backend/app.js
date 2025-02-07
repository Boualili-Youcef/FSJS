const express = require('express'); // inclusion d'express

const path = require('path'); // inclusion du module path
// Instanciation d'une application express
const app = express();

app.use((req, res, next) => {
    const now = new Date().toDateString() ;
    console.log(`${now} : une requête ${req.method} est arrivée !`);
    next(); // l'appel à next() transmet les informations pour traitement dans le middleware suivant
});

// 2ème middleware : préparation de la réponse
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    next(); // l'appel à next() transmet les informations pour traitement dans le middleware suivant
});

// Configuration de l'application : une première gestion "basique" des requêtes.
app.use((req, res ) => {
    // Une fois encore, les requêtes sont pour l'instant toutes traitées de la même manière.
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

// Exportation de notre application express
module.exports = app;