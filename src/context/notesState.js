import React, { useState } from "react";
import NoteContext from "./noteContext"

const NotesState = (props)=>{
    const [notes,setNotes]=useState([])
    const [notesAlert,setNotesAlert]=useState([])

    // get all notes

    const getAllNotes=async()=>{
        const options={
            method:"GET",
            headers:{
              'Content-Type': 'application/json',
              "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTJiMmEwMDBiMjIyMzg0MzRhZGZlNSIsImlhdCI6MTcyMTk0MDk4NH0.G10moPoNzC6csMwWWa5HnzDWwGNzSjjOqxk7HFPWSxA"
            }
          }
        const getNotes=await fetch("http://localhost:3000/api/notes/all",options)
        const response=await getNotes.json();
        setNotes(response)
    }

    // add notes
    const addNotes=async(note)=>{
        const {title,description,tags="default",date="2024-11-11"}=note
        const options={
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTJiMmEwMDBiMjIyMzg0MzRhZGZlNSIsImlhdCI6MTcyMTk0MDk4NH0.G10moPoNzC6csMwWWa5HnzDWwGNzSjjOqxk7HFPWSxA"
          },
          body: JSON.stringify({ title,description,date,tags })
        }
        const addNotes=await fetch("http://localhost:3000/api/notes/create",options)
        const response= await addNotes.json();
        const newNotes= notes.concat(response)
        setNotes(newNotes)
    }

    // update notes

    

    // delete notes

    const deleteNotes=async(id)=>{
        const options={
          method:"DELETE",
          headers:{
            'Content-Type': 'application/json',
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTJiMmEwMDBiMjIyMzg0MzRhZGZlNSIsImlhdCI6MTcyMTk0MDk4NH0.G10moPoNzC6csMwWWa5HnzDWwGNzSjjOqxk7HFPWSxA"
          }
        }
        const addNotes=await fetch("http://localhost:3000/api/notes/delete/"+id,options)
        const response= await addNotes.json();
        const newNotes=notes.filter((elements)=>{
            return elements._id!==id
        })

        setNotesAlert({"status":"200"})

        setNotes(newNotes);

    }
    // Fetch edit notes value in modal
    const editNotes=async(id)=>{
        const newNotes=await notes.filter((elements)=>{
            return elements._id==id
        })
        return newNotes;
    }
    // update notes
    
    const updateNotes=async(note)=>{
      const {title,description,_id}=note
        const options={
          method:"PUT",
          headers:{
            'Content-Type': 'application/json',
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTJiMmEwMDBiMjIyMzg0MzRhZGZlNSIsImlhdCI6MTcyMTk0MDk4NH0.G10moPoNzC6csMwWWa5HnzDWwGNzSjjOqxk7HFPWSxA"
          },
          body: JSON.stringify({ title,description})
        }
        const updateNotes=await fetch("http://localhost:3000/api/notes/update/"+_id,options)
        const response= await updateNotes.json();
        const newNotes=notes;
        for(let i=0;i<notes.length;i++){
          const elements=notes[i]
          if(elements._id==_id){
            elements.title=title
            elements.description=description
          }
        }
        const updatedNotes=[];
        setNotes(updatedNotes.concat(newNotes));


    }
    return (
        <NoteContext.Provider value={{addNotes,getAllNotes,deleteNotes,editNotes,updateNotes,notesAlert,notes}}>
         {props.children}
        </NoteContext.Provider>
      );
}

export default NotesState