import React from 'react';
import Login from './Components/Login'
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Login path="/login"/>
      <Routes>
          <Route path="/register" element = { <Signup/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
