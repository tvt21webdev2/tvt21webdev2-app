import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {cloneElement, useEffect, useRef, useState} from "react";
import {ClickAwayListener, Menu, MenuItem, Popper} from "@mui/material";
import {Link} from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';
import axios from "axios";

export default function Navbar({children, currentUser}) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);
  const [userViewsOpen, setUserViewsOpen] = useState(false);

  const [views, setViews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const userMenuRef = useRef(null);
  const userViewsRef = useRef(null);

  useEffect(() => {
    if (userViewsOpen) {
      (async function () {
        try {
          const response = await axios.get("http://localhost:8080/view/USERNAME");
          setViews(response.data);
          setLoaded(true);
        } catch (err) {
          console.log(err)
        }
      })();
    }
  }, [userViewsOpen]);

  function renderUserViewMenuItems() {
    return (views.map(item =>
      <MenuItem key={item.url}>
        <Link to={item.url}>
          {item.title}
        </Link>
      </MenuItem>
    ))
  }

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
            <Link to="/n2">
              <Button sx={{color: "#fff"}}>
                N2
              </Button>
            </Link>
            {currentUser ?
              <>
                <Button sx={{color: "#fff"}} onClick={() => setUserViewsOpen(true)} ref={userViewsRef}>
                  Omat Näkymät
                </Button>
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
          <Menu open={userViewsOpen} onClose={() => setUserViewsOpen(false)} anchorEl={userViewsRef.current}>
            {views.length && loaded ? renderUserViewMenuItems() : <Typography sx={{p: 2}}>Nothing here...</Typography>}
          </Menu>

          <ClickAwayListener onClickAway={() => currentUser ? setUserOptionsOpen(false) : setLoginOpen(false)}>
            <div>
              <Button color="inherit"
                      onClick={() => currentUser ? setUserOptionsOpen(!userOptionsOpen) : setLoginOpen(!loginOpen)}
                      ref={userMenuRef}>
                {currentUser ? currentUser : "Kirjaudu sisään"}
              </Button>
              <Popper open={currentUser ? userOptionsOpen : loginOpen} anchorEl={userMenuRef.current}>
                {cloneElement(children, currentUser ? {setUserOptionsOpen} : {setLoginOpen})}
              </Popper>
            </div>
          </ClickAwayListener>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
