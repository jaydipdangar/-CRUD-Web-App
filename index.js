const express = require('express')
const app = express();
require('dotenv').config();
const mongose = require('mongoose');

const db =  require('./db')
const person = require('./person')

app.use(express.json());



const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('jaydip ahir')
})

app.get('/person', async (req, res) => {
    try {
        const data = await person.find();
        console.log('data feached');
        res.status(200).json(data);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal servar error' });
    }
})

app.post('/person', async (req, res) => {

    try {

        const data = req.body;

        const Uperson = new person(data);
        const responce = await Uperson.save();
        console.log('data saved');
        res.status(200).json(responce);

    }

    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' })


    }
})

app.put('/person/:id', (req, res) => {


    try {
        const upid = req.params.id;
        const updatedata = req.body;

        const update = person.findByIdAndUpdate(upid, updatedata, { new: true });

        console.log('update compale');
        res.status(200).json({ message: 'data updated ' });


    }
    catch (err) {
        console.log(err)
        res.status(200).json({ message: 'data deleted ' })

    }



})
app.delete('/person/all', async(req, res) => {



    try {
        
        const alldeletdata = await person.deleteMany({});
        if (!alldeletdata) {
            return res.status(404).json({ error: 'person not found' })
        }

        console.log('all data deleted ')
        res.status(200).json({ message: 'all data deleted ' })
    }

    catch (err) {

        console.log(err);
        res.status(500).json({ error: 'error found' })
    }


})


app.delete('/person/:id', async(req, res) => {



    try {
        const deid = req.params.id;
        const deletdata = await person.findByIdAndDelete(deid);

        if (!deletdata) {
            return res.status(404).json({ error: 'person not found' })
        }

        console.log('data deleted ')
        res.status(200).json({ message: 'data  deleted ' })
    }

    catch (err) {

        console.log(err);
        res.status(500).json({ error: 'error found' })
    }


})



app.listen(PORT, () => {
    console.log(`listning on port ${PORT}`);
})
