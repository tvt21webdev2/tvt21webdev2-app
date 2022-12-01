import React, { useState } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import Navbar from './components/Navbar';
import V1 from './components/V1'
import V5 from './components/V5';
import V8 from './components/V8';
import V9 from './components/V9';
import Editor from './pages/Editor';
import N3 from './pages/N3';
import { Switch } from '@mui/material';
// import './styles/App.css';

// https://stackoverflow.com/questions/66289122/how-to-create-a-protected-route/66289280#66289280

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
        <Route path="/myview" element={<N3 />}/>
        <Route path="/editor" element={<Editor />}/>
        <Route path='*' element={<Navigate to ='/'/>}/>
      </Routes>
    </div>
  );
}