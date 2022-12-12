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
      </div>

      <div id='v8'>
        <h2>Hiilidioksidipäästöt valtion mukaan</h2>
        <p>Pinottu viivakaavio valtiokohtaisista hiilidioksidipäästöistä. <br />
          Tutkimuksen<a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D"> data.</a> <br />
          Tutkimuksen<a href="https://essd.copernicus.org/articles/14/1917/2022/"> kuvaus.</a>
        </p>
        <V8 />
      </div>

      <div id='v9'>
        <h2>Hiilidioksidipäästöt sektoreittain</h2>
        <p>Piirakkakaavio hiilidioksidipäästöistä toimialoittain.
          Sektoria klikkaamalla voidaan tarkastella alasektoreita. <br />
          Painamalla kuvaajaa hiiren oikealla painikkeella voidaan palata edelliseen sektorinäkymään. <br />
          Tutkimuksen<a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector"> kuvaus.</a>
        </p>
        <div id='helper'>
          <V9 />
        </div>
      </div>
    </div>
  );
}

export default N2;