require('dotenv').config({ path: 'Backend/.env' })
const express = require('express')
const router = express.Router()
const NotesSchema = require('../models/Notes.js')
const { body, validationResult } = require('express-validator');
const fetchAuthUser = require('../middlewares/fetchUser.js');

// route to create note

router.post('/create', fetchAuthUser, [
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('date').isISO8601().toDate()
], async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const notes = await NotesSchema.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        tags: req.body.tags,
        user: req.user_id

    })

    res.json(notes);

})

// Update Notes

router.put('/update/:id', fetchAuthUser, [
    body('title').notEmpty(),
    body('description').notEmpty(),
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const findNotes= await NotesSchema.findById(req.params.id)
    if(!findNotes){
        return res.status(400).json({error:"No notes found"})
    }
    if(findNotes.user.toString()!=req.user_id){
        return res.status(400).json({error:"Unauthenticate user"})
 
    }

    const updateNote=await NotesSchema.findByIdAndUpdate(req.params.id,{title:req.body.title,description:req.body.description})
    res.send(updateNote)

})

router.get('/all',fetchAuthUser,async(req,res)=>{
    const findNotes= await NotesSchema.find({user:req.user_id})
    res.json(findNotes)


})

router.delete('/delete/:id',fetchAuthUser,async(req,res)=>{
        const deleteNotes=await NotesSchema.findByIdAndDelete(req.params.id)
        res.json({status:"200"})

})

module.exports = router