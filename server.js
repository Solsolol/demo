const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.json());

// Ajout des routes pour les endpoints SFMC
app.post('/execute', (req, res) => {
  res.status(200).json({ success: true });
});

app.post('/save', (req, res) => {
  res.status(200).json({ success: true });
});

app.post('/publish', (req, res) => {
  res.status(200).json({ success: true });
});

app.post('/validate', (req, res) => {
  res.status(200).json({ success: true });
});

app.post('/stop', (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
