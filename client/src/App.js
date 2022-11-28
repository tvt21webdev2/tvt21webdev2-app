import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import Navbar from './components/Navbar';
import V1 from './components/V1'
import V5 from './components/V5';
import V8 from './components/V8';
import V9 from './components/V9';
import './styles/App.css';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/v1" element={<V1/>}/>
        <Route path="/v5" element={<V5/>}/>
        <Route path="/v8" element={<V8/>}/>
        <Route path="/v9" element={<V9/>}/>
      </Routes>
    </div>
  );
}