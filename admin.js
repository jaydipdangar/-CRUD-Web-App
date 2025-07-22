const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

name : {
    type: String,
    required : true
},
age : {
    type: Number,
    required : true
},
role : {
    type: String,
    rname : ['cheif' , 'owner', 'security'],
    required : true
},
mobileno : {
    type: Number,
    required : true
},
email : {
    type : String ,
    required : true ,
    unique :true 
},
address : {
    type : String ,
},
salary : {
    type : Number ,
    required : true
}


})

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
