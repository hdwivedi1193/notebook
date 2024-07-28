import React from 'react'

export default function EditNotes(props) {
    return (
        <div>
            <i className="fa fa-edit" style={{ color: "blue" }} onClick={() => props.editNoteData(props.editId)}  ></i>

        </div>
    )
}
