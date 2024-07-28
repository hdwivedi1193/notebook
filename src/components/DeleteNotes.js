import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/noteContext'

export default function DeleteNotes(props) {
    const context = useContext(NoteContext)

    const deleteNote = async (id) => {
        await context.deleteNotes(id)
    }
    return (
        <div>
            <i className="fa fa-trash" style={{ color: "red" }} onClick={() => deleteNote(props.deleteId)}></i>
        </div>
    )
}
