import React from 'react'
import AddNotes from './AddNotes';
import NotesList from './NotesList';

export default function Home(props) {


  return (
    <>
      <AddNotes showAlert={props.showAlert} ></AddNotes>
      <NotesList showAlert={props.showAlert}></NotesList>
    </>
  )
}
