import React,{ useContext, useEffect, useState }  from 'react'
import NoteContext from '../context/noteContext';

export default function AddNotes() {
    const context=useContext(NoteContext)
    const [notes,setNotes]=useState([])    


    const handleOnClick=async(e)=>{
        e.preventDefault();
        await context.addNotes(notes)
        
      }

    
      const handleOnChange=(e)=>{
        setNotes({...notes,[e.currentTarget.name]:e.currentTarget.value})
      }

  return (
    <div>
      <div className='container' style={{ 'marginTop': "100px" }}>
      <h1 style={{"textAlign":"center"}}>ADD NOTES</h1>
      <form id="addNotes">
        <div className="mb-3">
          <label htmlFor="notesTitle" className="form-label" >Title</label>
          <input name="title" type="text" className="form-control" id="notesTitle" onChange={handleOnChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="notesDescription" className="form-label">Description</label>
          <textarea  name="description" className="form-control" id="notesDescription" rows="3" onChange={handleOnChange}></textarea>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
      </form>

    </div>
    </div>
  )
}
