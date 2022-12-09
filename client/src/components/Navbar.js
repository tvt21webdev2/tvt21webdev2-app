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
          <Typography variant="h6" component="div">
            <Link to="/">
              <ForestIcon sx={{fontSize: 45, color: "#fff", mt: 1}}/>
            </Link>
          </Typography>
          <Typography sx={{ml: 3, flexGrow: 1}}>
          <Link to="/n1">
              <Button sx={{color: "#fff"}}>
                N1
              </Button>
            </Link>
            <Link to="/n2">
              <Button sx={{color: "#fff"}}>
                N2
              </Button>
            </Link>
            {currentUser ?
              <>
                <Link to="/customviews">
                  <Button sx={{color: "#fff"}}>
                    Omat Näkymät
                  </Button>
                </Link>
                <Link to="/editor">
                  <Button sx={{color: "#fff"}}>
                    Luo Näkymä
                  </Button>
                </Link>

              </>

              :
              null
            }
          </Typography>
          <ClickAwayListener onClickAway={() => currentUser ? setUserOptionsOpen(false) : setLoginOpen(false)}>
            <div>
              <Button color="inherit"
                      onClick={() => currentUser ? setUserOptionsOpen(!userOptionsOpen) : setLoginOpen(!loginOpen)}
                      ref={anchorRef}>
                {currentUser ? currentUser : "Kirjaudu sisään"}
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
