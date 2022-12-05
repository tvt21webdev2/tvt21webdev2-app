import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useRef, useState} from "react";
import {ClickAwayListener, Popper} from "@mui/material";
import { Link } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';

export default function Navbar({children}) {
  const [showLogin, setShowLogin] = useState(false);

  const anchorRef = useRef(null);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <Link to="/">
              <ForestIcon sx={{ fontSize: 45, color: "#fff", mt: 1 }} />
            </Link>
          </Typography>
          <ClickAwayListener onClickAway={() => setShowLogin(false)}>
            <div>
              <Link to="/editor">
                <Button sx={{color: "#fff"}}>
                  Editor
                </Button>
              </Link>
              <Button color="inherit" onClick={() => setShowLogin(!showLogin)} ref={anchorRef}>
                Log in
              </Button>
              <Popper id="login" open={showLogin} anchorEl={anchorRef.current}>
                {children}
              </Popper>
            </div>
          </ClickAwayListener>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
