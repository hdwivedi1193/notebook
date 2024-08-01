import './App.css';

import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import React, { useState } from 'react';
import AuthUserState from './context/authState';

import NotesState from './context/notesState';
import Login from './components/Login';
import Signup from './components/Signup';
import Alerts from './components/Alerts';

function App() {
  const [alert,setAlert]=useState({status:null,message:null});
     const showAlert=(status,message)=>{
        setAlert({
          status:status,
          message:message
        })
     }
  return (
    <AuthUserState>
    <NotesState>
    <BrowserRouter>
      <Navbar showAlert={showAlert}></Navbar>
      <Alerts alert={alert}></Alerts>
      <Routes>
        <Route path="/" element={<Home key="/" showAlert={showAlert}   />} />
        <Route path="/about" element={<About key="/about" />} />
        <Route path="/login" element={<Login key="/login" showAlert={showAlert}  />} />
        <Route path="/signup" element={<Signup key="/signup" showAlert={showAlert}  />} />

      </Routes>
    </BrowserRouter>
    </NotesState>
    </AuthUserState>

  );
}

export default App;
