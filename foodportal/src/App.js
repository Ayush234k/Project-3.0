import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login/Login'
import AboutUs from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Navbar />
            <Routes>
                <Route path="/" element={ <Login/> }/>
                <Route path="/about" element={ <AboutUs/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>
    </> 
  );
}

export default App;
