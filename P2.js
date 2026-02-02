const express = require('express');

const app = express();
const PORT = 8080;

// Home page
app.get('/', (req, res) => {
  res.send('Hello World');
});

// About page
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Contact page
app.get('/contact', (req, res) => {
  res.send('This is the Contact Page');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
