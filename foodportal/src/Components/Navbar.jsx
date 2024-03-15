import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="navbar-brand">KIIT UNIVERSITY</div>
      <div className="navbar-toggle" onClick={toggleNav}>
        ☰
      </div>
      <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/feedback">Feedback</Link>
      </div>
    </nav>
  );
};

export default Navbar;
