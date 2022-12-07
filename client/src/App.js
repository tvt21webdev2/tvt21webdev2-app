import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import Navbar from './components/Navbar';
import N2 from './pages/N2';
import Editor from './pages/Editor';
import N3 from './pages/N3';
import {Alert, Snackbar} from '@mui/material';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import V1 from "./components/V1";
import UserOptions from "./components/UserOptions";
// import './styles/App.css';

// https://stackoverflow.com/questions/66289122/how-to-create-a-protected-route/66289280#66289280


export default function App() {

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, []);


  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}>
        {currentUser ?
          <UserOptions/>
          :
          <Login setCurrentUser={setCurrentUser}>
            <SignUp setSnackbarOpen={setSnackbarOpen}/>
          </Login>
        }
      </Navbar>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/n2" element={<N2 />}/>
        <Route path="/v1" element={<V1 />}/>
        {currentUser ?
          <>
            <Route path="/myview" element={<N3 />}/>
            <Route path="/editor" element={<Editor />}/>
          </>
          :
          null
        }
        <Route path='*' element={<Navigate to ='/'/>}/>
      </Routes>
      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={() => setSnackbarOpen(false)}>
        <Alert variant="filled" severity="success">Registration successful!</Alert>
      </Snackbar>

    </div>
  );
}
