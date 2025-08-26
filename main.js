const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Servir ton fichier index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
