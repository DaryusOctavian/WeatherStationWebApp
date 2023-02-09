import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Header.css';
import App from '../../wwwroot/App/App';
import About from '../../wwwroot/About/About';

function Header() {
  return (
    <Router>
      <div className='Header'>
        <div className='Nav-Buttons'>
          <div className='Nav-Button'>
            <Link to={App}>Stats</Link>
          </div>
          <div className='Nav-Button'>
            <Link to={About}>About Us</Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Header;
