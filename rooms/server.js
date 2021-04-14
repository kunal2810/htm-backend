const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const parser = require('body-parser');
const cors = require('cors');

const floorRoutes = require('./routes/floorRoutes');

// Set up middleware
const app = express();
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use('/floors', floorRoutes);

// Health check for admin
app.get('/', (req, res) => {
    res.send('Up and running');
});

function start() {
    // declare port and start app
    const PORT = process.env.PORT || 4003;
    app.listen(PORT, () => {
        console.log(`Rooms app is running on Port ${PORT}`);
    });
}

module.exports = { app, start };