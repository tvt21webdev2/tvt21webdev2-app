import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import Navbar from './components/Navbar';
import N1 from './pages/N1';
import N2 from './pages/N2';
import Editor from './pages/Editor';
import N3 from './pages/N3';
import {Alert, Snackbar} from '@mui/material';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserOptions from "./components/UserOptions";
import './styles/App.css';
import Util from "./util";


export default function App() {

  const [snackbarOpen, setSnackbarOpen] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div>
      <Navbar currentUser={currentUser} setSnackbarOpen={setSnackbarOpen}>
        {currentUser ?
          <UserOptions setCurrentUser={setCurrentUser} setSnackbarOpen={setSnackbarOpen}/>
          :
          <Login setCurrentUser={setCurrentUser} setSnackbarOpen={setSnackbarOpen}>
            <SignUp setSnackbarOpen={setSnackbarOpen}/>
          </Login>
        }
      </Navbar>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/n1" element={<N1/>}/>
        <Route path="/n2" element={<N2/>}/>
        <Route path="/userview/:id" element={<N3/>}/>
        {currentUser ?
          <>
            <Route path="/editor" element={<Editor/>}/>
          </>
          :
          null
        }
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <Snackbar open={snackbarOpen !== null} autoHideDuration={5000} onClose={() => setSnackbarOpen(null)}>
        <Alert variant="filled" severity="success">
          {Util.selectAlertMessage(snackbarOpen)}
        </Alert>
      </Snackbar>
    </div>
  );
}
