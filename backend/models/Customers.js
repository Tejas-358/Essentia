const mongoose = require('mongoose')

const userData = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

})

const UserModel = mongoose.model("customers", userData)
module.exports = UserModel