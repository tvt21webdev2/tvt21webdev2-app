import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {cloneElement, useRef, useState} from "react";
import {ClickAwayListener, Popper} from "@mui/material";
import {Link} from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';

export default function Navbar({children, currentUser}) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);

  const anchorRef = useRef(null);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <Link to="/">
              <ForestIcon sx={{fontSize: 45, color: "#fff", mt: 1}}/>
            </Link>
          </Typography>
          <ClickAwayListener onClickAway={() => currentUser ? setUserOptionsOpen(false) : setLoginOpen(false)}>
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
              <Button color="inherit"
                      onClick={() => currentUser ? setUserOptionsOpen(!userOptionsOpen) : setLoginOpen(!loginOpen)}
                      ref={anchorRef}>
                {currentUser ? currentUser : "Log in"}
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
