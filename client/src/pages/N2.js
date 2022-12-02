import React from 'react'
import V8 from '../components/V8';
import V9 from '../components/V9';
import '../styles/n2.css';

function N2() {
  return (
    <div className='container'>
      <div>
        <h1>keskitetty n2 otsikko</h1>
        <div id='v8'>
          <h2>keskitetty otsikko tänne?</h2>
          <V8 />
        </div>
        <div id='v9'>
          <h2>keskitetty otsikko tänne? (^^lisää väliä!)</h2>
          <V9 />
        </div>
      </div>
    </div>
  );
}

export default N2;