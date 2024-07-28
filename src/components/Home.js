import React from 'react'
import AddNotes from './AddNotes';
import NotesList from './NotesList';
import Alerts from './Alerts';

export default function Home() {


  return (
    <>
      <Alerts></Alerts>

      <AddNotes></AddNotes>
      <NotesList></NotesList>
    </>
  )
}
