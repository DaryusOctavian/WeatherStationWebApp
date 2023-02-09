import React from 'react';
import './Stats.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Stats() {
  return (
    <div className='Stats'>
      <Header />
      <header className='Stats-Header'>
        <p className='Header-Text'>Weather Station Data</p>
      </header>
      <Footer />
    </div>
  );
}

export default Stats;
