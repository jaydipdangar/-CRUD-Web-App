const express = require('express')

const mongose = require('mongoose');
const db =  require('./db')

const person = require('./person');
const admin = require('./admin');

const PORT = process.env.PORT || 3000;
require('dotenv').config();

const app = express();
app.use(express.json());


//routers
const personrouter = require('./personrouter');
const adminrouter = require('./adminrouter'); 

//midalwares
app.use('/person' , personrouter );
app.use('/admin' , adminrouter)

app.listen(PORT, () => {
    console.log(`listning on port ${PORT}`);
})
 
