const mangose = require('mongoose');


require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
mangose.connect(MONGO_URL);

const db = mangose.connection;
// if 'connect ' and 'error' is string then how can db reader know that mangobd server is on ro error ?
    

db.on('connected', () => {
    console.log('MongoDB connected successfully');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

 module.exports = db;

