import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import About from '../About/About';

function App() {
  return (
    <div className='App'>
      <Header />
      <header className='App-Header'>
        <p className='Header-Text'>Weather Station Data</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
