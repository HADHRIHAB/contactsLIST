const mongoose = require('mongoose');

const Contact= mongoose.model('Contact',{
    

    name:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    tel:{
        type:String  
    },
    image:{
        type:String  
    },
    idUser:{
        type:String  
    },
    address:{
        type:String  
    },


});




module.exports= Contact;