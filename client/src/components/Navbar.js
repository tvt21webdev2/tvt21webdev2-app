import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {cloneElement, useRef, useState} from "react";
import {ClickAwayListener, Popper} from "@mui/material";
import { Link } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';
import axios from "axios";

export default function Navbar({children, currentUser, setCurrentUser}) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);

  const anchorRef = useRef(null);

  // function handleLogout() {
  //   localStorage.removeItem("user")
  //   setCurrentUser(null);
  // }

  function handleDelete() {
    (async () => {
      try {
        const response = await axios.delete("http://localhost:8080/user/delete", {withCredentials: true});
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <Link to="/">
              <ForestIcon sx={{ fontSize: 45, color: "#fff", mt: 1 }} />
            </Link>
          </Typography>
          <ClickAwayListener onClickAway={() => setLoginOpen(false)}>
            <div>
              {currentUser ?
                <Link to="/editor">
                  <Button sx={{color: "#fff"}}>
                    Editor
                  </Button>
                </Link>
                :
                null
              }
              <Button color="inherit" onClick={() => currentUser ? setUserOptionsOpen(!userOptionsOpen) : setLoginOpen(!loginOpen)} ref={anchorRef}>
                {currentUser ? currentUser : "Log in" }
              </Button>
              <Button color="inherit" onClick={handleDelete}>
                DELETE
              </Button>
              <Popper open={currentUser ? userOptionsOpen : loginOpen} anchorEl={anchorRef.current}>
                {cloneElement(children, currentUser ? {setUserOptionsOpen} : {setLoginOpen})}
              </Popper>
            </div>
          </ClickAwayListener>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
