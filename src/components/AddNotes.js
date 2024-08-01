import React,{ useContext, useEffect, useState }  from 'react'
import NoteContext from '../context/noteContext';

export default function AddNotes(props) {

    const context=useContext(NoteContext)
    const [notes,setNotes]=useState({title:"",description:""})    

    
    const handleOnClick=async(e)=>{
        e.preventDefault();
        if(notes.title.length==0||notes.description.length==0){
          props.showAlert(400,"Title or Description can't be left blank")
        }else{
          await context.addNotes(notes)
          props.showAlert(200,"Added Successfully")
        }
        
        setNotes({title:"",description:""})
        
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
          <input name="title" type="text" className="form-control" id="notesTitle" value={notes.title}  required onChange={handleOnChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="notesDescription" className="form-label">Description</label>
          <textarea  name="description" className="form-control" id="notesDescription" value={notes.description} required rows="3" onChange={handleOnChange}></textarea>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
      </form>

    </div>
    </div>
  )
}
