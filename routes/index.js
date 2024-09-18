const express = require('express');
const router = express.Router();

// A simple GET route
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

// A POST route
router.post('/data', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Received data for ${name}, age ${age}` });
});

module.exports = router;
