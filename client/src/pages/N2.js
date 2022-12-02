import React from 'react'
import V8 from '../components/V8';
import V9 from '../components/V9';
import '../styles/n2.css';
import video from '../images/cherry.mp4';

function N2() {
  return (
    <div className='container-n2'>
      <video autoPlay loop muted playsInline className="back-video">
        <source src={video} type="video/mp4"></source>
      </video>

      <div className='content-n2'>
        <h1>Päästölähteet</h1>
        <p>Kuvaus: lorem</p>
      </div>

      <div id='v8'>
        <h2>Hiilidioksidipäästöt valtion mukaan</h2>
        <p>Kuvaus: lorem</p>
        <V8 />
      </div>

      <div id='v9'>
        <h2>Hiilidioksidipäästöt sektoreittain</h2>
        <p>Piirakkakaavio co2 päästöistä toimialoittain. Sektoria klikkaamalla voidaan tarkastella alasektoreita. Painamalla kuvaajaa hiiren oikealla painikkeella</p>
        <V9 />
      </div>

      

    </div>
  );
}

export default N2;