const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Servir archivos HTML estáticos
app.use(express.static(__dirname));

// Mock auth
app.post('/api/login', (req, res) => {
 res.json({ token: 'mock-token-12345', usuario: req.body.usuario });
});

// Get folios
app.get('/api/folios', (req, res) => {
 const folios = JSON.parse(fs.readFileSync('./folios.json'));
 res.json(folios);
});

// Update folio
app.patch('/api/folios/:id', (req, res) => {
 const folios = JSON.parse(fs.readFileSync('./folios.json'));
 const folio = folios.find(f => f.id === parseInt(req.params.id));
 if (folio) {
 folio.estado = req.body.estado;
 fs.writeFileSync('./folios.json', JSON.stringify(folios, null, 2));
 res.json(folio);
 } else {
 res.status(404).json({error: 'Not found'});
 }
});

app.listen(3000, () => console.log('Server running on port 3000'));
