const express = require('express');
const EventEmitter = require('events');

const app = express();
const PORT = 2000;

// Create a custom EventEmitter
class RequestEmitter extends EventEmitter {}
const requestEmitter = new RequestEmitter();

// Listener for custom event
requestEmitter.on('requestReceived', (req) => {
  console.log('--- New Request ---');
  console.log('Method:', req.method);   
  console.log('URL:', req.url);
  console.log('Time:', new Date().toISOString());
  console.log('-------------------');
});

// Middleware to emit event for every request
app.use((req, res, next) => {
  requestEmitter.emit('requestReceived', req);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
