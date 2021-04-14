const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const parser = require('body-parser');
const cors = require('cors');

const customerRoutes = require('./routes/customerRoutes');
const floorRoutes = require('./routes/floorRoutes');

// Set up middleware
const app = express();
app.options('*', cors());
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use('/admin/customers', customerRoutes);
app.use('/floors', floorRoutes);


function start() {
    // declare port amnd start app
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`app is running on Port ${PORT}`);
    });
    // Health check in AWS
    app.get('/', (req, res) => {
        res.send('Up and running');
    });
}

module.exports = { app, start };