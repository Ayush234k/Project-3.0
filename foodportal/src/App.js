import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login/Login'
import AboutUs from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <>
      <Navbar />
            <Routes>
                <Route path="/" element={ <Login/> }/>
                <Route path="/dashboard" element={ <Signup/> }/>
                <Route path="/about" element={ <AboutUs/> }/>
                <Route path="/contact" element={ <Contact/> }/>
                <Route path="*" element={<NotFound />} />
            </Routes>
    </> 
  );
}

export default App;
