const express = require('express');
const router =  express.Router();

const admin = require('./admin');

router.get('/', async (req, res) => {
    try {
        // const data = await admin.find();
        // console.log('data feached');
        // res.status(200).json(data);
        res.send('jay murlidhar');

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal servar error' });
    }
})

    // for insert data 
router.post('/', async (req, res) => {

    try {

        const data = req.body;

        const Uadmin = new admin(data);
        const responce = await Uadmin.save();
        console.log('data saved');
        res.status(200).json(responce);

    }

    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' })


    }
})
    
    //if you want to update  data by id
router.put('/:id', async(req, res) => {


    try {
        const upid = req.params.id;
        const updatedata = req.body;

        const update = await admin.findByIdAndUpdate(upid, updatedata, { new: true });

        console.log('update compale');
        res.status(200).json({ message: 'data updated ' });


    }
    catch (err) {
        console.log(err)
        res.status(200).json({ message: 'data deleted ' })

    }



})

    //if you want to clear all data

router.delete('/all', async(req, res) => {



    try {
        
        const alldeletdata = await admin.deleteMany({});
        if (!alldeletdata) {
            return res.status(404).json({ error: 'admin not found' })
        }

        console.log('all data deleted ')
        res.status(200).json({ message: 'all data deleted ' })
    }

    catch (err) {

        console.log(err);
        res.status(500).json({ error: 'error found' })
    }


})

    //if you want to delete data by id
router.delete('/id/:id', async(req, res) => {



    try {
        const deid = req.params.id;
        const deletdata = await admin.findByIdAndDelete(deid);

        if (!deletdata) {
            return res.status(404).json({ error: 'admin not found' })
        }

        console.log('data deleted ')
        res.status(200).json({ message: 'data  deleted ' })
    }

    catch (err) {

        console.log(err);
        res.status(500).json({ error: 'error found' })
    }


})

//if you want to  delete data by name

router.delete('/name/:name', async(req, res) => {



    try {
        const deid = req.params.name;
        const deletdata = await admin.findOneAndDelete({ name : deid });

        if (!deletdata) {
            return res.status(404).json({ error: 'admin not found' })
        }

        console.log('data deleted ')
        res.status(200).json({ message: 'data  deleted ' })
    }

    catch (err) {

        console.log(err);
        res.status(500).json({ error: 'error found' })
    }


})



module.exports = router;