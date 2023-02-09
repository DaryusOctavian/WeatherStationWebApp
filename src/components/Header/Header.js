import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='Header'>
      <div className='Nav-Buttons'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div className='Nav-Button'>Stats</div>
        </Link>
        <Link to='/about' style={{ textDecoration: 'none' }}>
          <div className='Nav-Button'>About Us</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
