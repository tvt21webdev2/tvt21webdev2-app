import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useRef, useState} from "react";
import Login from "./Login";
import {ClickAwayListener, Popper} from "@mui/material";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const anchorRef = useRef(null);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Home
          </Typography>
          <ClickAwayListener onClickAway={() => setShowLogin(false)}>
            <div>
              <Button color="inherit" onClick={() => setShowLogin(!showLogin)} ref={anchorRef}>
                Log in
              </Button>
              <Popper id="login" open={showLogin} anchorEl={anchorRef.current}>
                <Login/>
              </Popper>
            </div>
          </ClickAwayListener>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
