import React from 'react';
import './Stats.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Chart_Temperatura from '../../charts/Chart_temperatura/Chart';
import Chart_Umiditate from '../../charts/Chart_umiditate/Chart_umi';
import Chart_viteza_vant from '../../charts/Chart_viteza_vant/Chart_viteza_vant'; 

function Stats() {
  return (
    <div className='Stats'>
      <Header />
      <header className='Stats-Heumiader'>
        <p className='Header-Text'>Weather Station Data</p>
      </header>
      <Chart_Temperatura />
      <Chart_Umiditate />
      <Chart_viteza_vant />
      <Footer />
    </div>
  );
}

export default Stats;