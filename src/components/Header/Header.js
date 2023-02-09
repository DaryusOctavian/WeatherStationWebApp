import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
      <div className='Nav-Buttons'>
        <div className='Nav-Button'>
          <Link to='/'>Stats</Link>
        </div>
        <div className='Nav-Button'>
          <Link to='/about'>About Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
