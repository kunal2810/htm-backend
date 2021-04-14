const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const parser = require('body-parser');
const cors = require('cors');

const customerRoutes = require('./routes/customerRoutes');

// Set up middleware
const app = express();
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use('/customers', customerRoutes);

// Health check for admin
app.get('/', (req, res) => {
    res.send('Up and running');
  });

  function start() {
    // declare port and start app
    const PORT = process.env.PORT || 4004;
    app.listen(PORT, () => {
      console.log(`Admin app is running on Port ${PORT}`);
    });
  }
  
  module.exports = { app, start };