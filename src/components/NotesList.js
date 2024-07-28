import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/noteContext'
import DeleteNotes from './DeleteNotes';
import EditNotes from './EditNotes';

export default function NotesList() {
    const context = useContext(NoteContext)
    const modalRef = useRef(0);
    const closeRef= useRef(0);
    const [note,setNote]=useState({
        title:"",
        description:"",
        tags:"",
        _id:""
    });
    useEffect(() => {
         context.getAllNotes();

    },[])
    const editNoteData = async (id) => {
        const editData= await context.editNotes(id)
        if(editData && editData.length>0){
            setNote(editData[0]);
            modalRef.current.click();
        }  
    }

    const handleModalData=async(e)=>{
        setNote({...note,[e.currentTarget.name]:e.currentTarget.value})
    }

    const updateNote=async(id)=>{
        closeRef.current.click()
        const updateData=await context.updateNotes(note)


    }
    return (

        <div className='container' style={{ 'marginTop': "100px" }}>
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={modalRef} data-bs-target="#exampleModal" ></button>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" name='title' id="recipient-name" value={note.title} onChange={handleModalData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Description:</label>
                                    <textarea className="form-control"  name="description" id="message-text" value={note.description} onChange={handleModalData}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeRef}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>updateNote(note._id)}>Update Notes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                {
                    context.notes.map((elements) => {
                        return <div className="col-sm-6" key={elements._id} >
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{elements.title}</h5>
                                    <p className="card-text">{elements.description}</p>
                                    <p className="card-text">{new Date(elements.date).toLocaleDateString()}</p>
                                </div>
                                <DeleteNotes deleteId={elements._id}></DeleteNotes>
                                
                                <EditNotes editId={elements._id} editNoteData={editNoteData} ></EditNotes>
                            </div>

                        </div>
                    })

                }
            </div>
        </div>
    )
}
