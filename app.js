const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded form data

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, '../client')));

// Route for API
app.use('/api', indexRouter);

// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API');
});

// Route for handling form submissions
app.post('/order', (req, res) => {
  const { name, quantity } = req.body;
  console.log(`Order received: Name=${name}, Quantity=${quantity}`);
  res.json({ message: 'Order received' });
});

// Server listening on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
