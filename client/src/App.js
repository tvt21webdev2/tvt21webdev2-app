import { Route, Routes } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage'
import V1 from './components/V1'
import V5 from './components/V5';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Homepage />} />
    //   <Route path="/v1" element={<V1 />} />
    //   <Route path="/v5" element={<V5 />} />
    // </Routes>
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Home
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}