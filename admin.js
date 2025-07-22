const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

name : {
    type: String,
    required : true
},
username : {
    type : String ,
    required : true ,
    unique :true 
},
password : 
{
    typr : Number ,
    required : true ,

}


})

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
