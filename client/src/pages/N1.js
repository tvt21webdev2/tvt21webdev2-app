import React from 'react'
import V1 from '../components/V1';
import V3 from '../components/V3';
import V5 from '../components/V5';
import V6 from '../components/V6';
import V7 from '../components/V7';
import '../styles/n1.css';
import video from '../images/cherry.mp4';

function N1() {
    return (
      <div className='container-n1'>
        <video autoPlay loop muted playsInline className="back-video">
          <source src={video} type="video/mp4"></source>
        </video>
  
        <div className='content-n1'>
          <h1>Lämpötilatiedot ja CO<sub>2</sub>-pitoisuudet</h1>
        </div>
  
        <div id='v1'>
          <h2>Globaaleja sekä pallonpuoliskojen lämpötilan vaihteluita</h2>
          <p>Viivakaavio globaaleista pintalämpötilan vaihteluista kattaen 170 vuoden ajanjakson sekä <br/> 
          pohjoiselta pallonpuoliskolta 2000 vuoden ajanjaksolta. <br />
            Hadley Centren<a href="https://www.metoffice.gov.uk/hadobs/hadcrut5"> data & kuvaus.</a> <br />
            Bolin Centren<a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt"> data.</a> <br />
            Bolin Centren datan<a href="https://www.nature.com/articles/nature0326"> kuvaus.</a> <br />
          </p>
          <V1 />
        </div>

        <div id='v3'>
          <h2>Ilmakehän CO<sub>2</sub>-pitoisuuksia ja tapahtumia</h2>
          <p>Viivakaavio ilmakehän CO<sub>2</sub>-pitoisuuksista sekä historian merkittävistä tapahtumista kattaen 1000 vuoden ajanjakson, <br />
          perustuen Mauna Loan mittauksiin sekä Antarktiksen jääkairauksiin. <br/>
            Mauna Loan<a href="https://gml.noaa.gov/ccgg/trends"> data.</a> <br />
            Mauna Loan datan<a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html"> kuvaus.</a> <br />
            Law Domen<a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.da"> data.</a> <br />
            Law Domen datan<a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html"> kuvaus.</a> <br />
            South Hamptonin yliopiston<a href="https://www.southampton.ac.uk/~cpd/history.html"> data.</a> <br />
          </p>
          <V3 />
        </div>

        <div id='v5'>
          <h2>Ilmakehän CO<sub>2</sub>-pitoisuuksia 400 000 vuodelta</h2>
          <p>Viivagraafi ilmakehän CO<sub>2</sub>-pitoisuuksista kattaen yli 400 000 vuoden ajanjakson, <br />
          perustuen Antarktiksen jääkairauksiin. <br/>
            Vostokin<a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co"> data.</a> <br />
            Vostokin datan<a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html "> kuvaus.</a>
          </p>
          <V5 />
        </div>

        <div id='v6'>
          <h2>Ilmakehän CO<sub>2</sub>-pitoisuuksia 800 000 vuodelta</h2>
          <p>Viivagraafi ilmakehän CO<sub>2</sub>-pitoisuuksista kattaen 800 000 vuoden ajanjakson, <br />
          perustuen yhdistelmätutkimukseen useiden tutkimuslaitosten Antarktiksen jääkairauksista. <br/>
            Tutkimuksen<a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975"> data.</a> <br />
            Tutkimuksen<a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.tx"> kuvaus.</a>
          </p>
          <V6 />
        </div>

        <div id='v7'>
          <h2>Ilmakehän CO<sub>2</sub>-pitoisuuksia ja globaaleja lämpötilan vaihteluita</h2>
          <p>Moniakselinen viivagraafi arvioiduista lämpötilan muutoksista ja CO<sub>2</sub>-pitoisuuksista sekä historian merkittävistä <br/>
          tapahtumista kattaen 2 miljoonan vuoden ajanjakson, perustuen lukuisten tutkimusten ja mittaustulosten yhdistämiseen sekä keskiarvoistamiseen.  <br/>
            C. Snyderin tutkimuksen<a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip "> data.</a> <br/>
            C. Snyderin tutkimuksen<a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf"> kuvaus.</a> <br/>
            South Hamptonin yliopiston<a href="https://www.southampton.ac.uk/~cpd/history.html"> data.</a> <br />
          </p>
          <V7 />
        </div>
      </div>
    );
  }
  
  export default N1;