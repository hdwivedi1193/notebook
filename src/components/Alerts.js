import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/noteContext'

export default function Alerts() {
    const context=useContext(NoteContext)
     
  return (
    <div>
        {
       context.notesAlert && context.notesAlert.status=="200" && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Hey!</strong> Note Deleted Successfully.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
}
    </div>
    
  )
}
