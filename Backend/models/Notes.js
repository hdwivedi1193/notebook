const mongoose=require('mongoose')
const { schema } = mongoose
schema
const NotesSchema=({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tags:{
        type:String,
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports=mongoose.model('notes',NotesSchema)