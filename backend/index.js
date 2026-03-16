require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sessions', require('./routes/sessions'));
app.use('/api/templates', require('./routes/templates'));
app.use('/api/participants', require('./routes/participants'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/dashboard', require('./routes/dashboard'));

// Health check
app.get('/', (req, res) => res.json({ success: true, message: 'SOC API is running' }));

// 404 handler
app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found' }));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/soc';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
