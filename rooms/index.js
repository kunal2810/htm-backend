const dotenv = require('dotenv');

dotenv.config();
const mongoose = require('mongoose');
const app = require('./server');

// Connect to db
try {
    mongoose.connect(
        process.env.NODE_DB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        },
        () => {
            console.log('Connected to MongoDB:', process.env.NODE_DB);
        },
    );
} catch (err) {
    console.log('Connecting to MongoDB:', err);
}

app.start();