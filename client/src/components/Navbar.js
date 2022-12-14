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
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export default function Navbar({children, currentUser, setSnackbarOpen}) {
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
          const response = await axios.get(`/view?username=${currentUser}`);
          setViews(response.data);
          // console.log(response.data);
          setLoaded(true);
        } catch (err) {
          console.log(err)
        }
      })();
    }
  }, [userViewsOpen]);

  async function handleDeleteView(id) {
    try {
      await axios.post(`/view/delete?id=${id}`, {username: currentUser}, {withCredentials: true})
      setViews(views.filter(v => v.id !== id));
      setSnackbarOpen("deleteview");
    } catch (err) {
      console.log(err)
    }
  }

  function renderUserViewMenuItems() {
    const longestButtonText = views.reduce((longest, item) => {
      return item.name.length > longest.length ? item.name : longest;
    }, "");

    const buttonWidth = `${longestButtonText.length + 6}ch`;

    return (views.map(item =>
      <MenuItem key={item.url}>
        <Link to={`/userview/${item.url}`}>
          <Button
            sx={{width: buttonWidth}}
            onClick={() => setUserViewsOpen(false)}
            variant="outlined"
            color="primary"
          >{item.name}
          </Button>
        </Link>
        <Button
          sx={{ml: 2, textAlign: 'center'}}
          onClick={() => handleDeleteView(item.id)}
          variant="contained"
          color="error"
        ><DeleteIcon/>
        </Button>
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
            <Link to="/n1">
              <Button sx={{color: "#fff"}}>
                Lämpötilatiedot ja CO2-pitoisuudet
              </Button>
            </Link>
            <Link to="/n2">
              <Button sx={{color: "#fff"}}>
                Päästölähteet
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
            {views.length && loaded ? renderUserViewMenuItems() :
              <Typography sx={{p: 2}}>Sinulla ei ole vielä yhtään luotua näkymää</Typography>}
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
