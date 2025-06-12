const express = require('express')
const app = express();
const db = require('./db')
const person = require('./person')
// how is it run without calling db we just export it ?
require('dotenv').config()

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/',(req , res) => {
    res.send('jiteshbhnai dangar')
})

app.get('/person',async(req , res) => {
   try {
        const data = await person.find();
        console.log('data feached');
        res.status(200).json(data);

   }
   catch(err)
   {
         console.log(err);
        res.status(500).json({error : 'internal servar error'});
   }
})

app.post('/person',async(req ,res) => {

    try{

        const data = req.body

        const Uperson = new person(data);
        const responce = await Uperson.save('');
        console.log('data saved');
        res.status(200).json(responce);
        
    }

    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server error'})
        

    }
}) 



app.listen( PORT, () =>{
    console.log(`listning on port ${PORT}`);
})
 