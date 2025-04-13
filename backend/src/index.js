require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { submitContact, validateContactForm } = require('./controllers/contactController');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Routes
app.post('/api/contact', validateContactForm, submitContact);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'An error occurred while processing your request'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 