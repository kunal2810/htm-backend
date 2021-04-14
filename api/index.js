const dotenv = require('dotenv');

dotenv.config();
const app = require('./server');

app.start();