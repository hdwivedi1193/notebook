const mongoose = require('mongoose');
const mongooseURI='mongodb://127.0.0.1:27017';

const connectToMongo=()=>{
    mongoose.connect(mongooseURI,{
    dbName: 'notebook',
    });
    console.log("Connection Established")
}

module.exports =connectToMongo
