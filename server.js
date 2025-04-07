const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.static(__dirname));

// Route pour l'exécution de l'activité
app.post('/execute', (req, res) => {
  console.log('Execute payload:', req.body);
  
  // Récupération des données de la requête
  const { inArguments } = req.body;
  const emailAddress = inArguments[0].emailAddress;
  const phoneNumber = inArguments[1].phoneNumber;
  
  // Log des données reçues
  console.log('Email:', emailAddress);
  console.log('Phone:', phoneNumber);

  // Réponse à SFMC
  res.status(200).json({
    status: 'ok',
    foundSignupDate: new Date().toISOString()
  });
});

// Routes pour les autres endpoints
app.post('/save', (req, res) => {
  console.log('Save payload:', req.body);
  res.status(200).json({ status: 'ok' });
});

app.post('/publish', (req, res) => {
  console.log('Publish payload:', req.body);
  res.status(200).json({ status: 'ok' });
});

app.post('/validate', (req, res) => {
  console.log('Validate payload:', req.body);
  res.status(200).json({ status: 'ok' });
});

app.post('/stop', (req, res) => {
  console.log('Stop payload:', req.body);
  res.status(200).json({ status: 'ok' });
});

// Route par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
