const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema= new Schema ({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true  
    },
    password:{
        type:String,
        required:true,
        min:6,
        select: false // exclude from select statement
    },
    date:{
        type:Date,
        required:true,
        default: Date.now
    }
})

module.exports=mongoose.model('user', UserSchema);