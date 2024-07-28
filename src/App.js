import './App.css';

import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import React from 'react';
import NotesState from './context/notesState';

function App() {
  
  return (
    <NotesState>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home key="/"  />} />
        <Route path="/about" element={<About key="/about" />} />
      </Routes>
    </BrowserRouter>
    </NotesState>

  );
}

export default App;
