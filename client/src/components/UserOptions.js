import * as React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import {Dialog, DialogActions, DialogTitle} from "@mui/material";
import {useContext, useState} from "react";
import {LoadingContext} from "../context.js";

export default function UserOptions({setUserOptionsOpen, setCurrentUser, setSnackbarOpen}) {

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const loading = useContext(LoadingContext);

  async function handleLogOut() {
    loading(true);

    try {
      await axios.get("http://localhost:8080/logout", {withCredentials: true});
      localStorage.removeItem("user");
      setCurrentUser(null);
      setUserOptionsOpen(false);
      setSnackbarOpen("logout");
      loading(false);
    } catch (err) {
      console.log(err);
      loading(false);
    }
  }
  
  async function handleDeleteAccount() {
    loading(true);
    try {
      await axios.delete("http://localhost:8080/user/delete", {withCredentials: true});
      await handleLogOut();
      setSnackbarOpen("deleteuser");
      loading(false);
    } catch (err) {
      console.log(err);
      loading(false);
    }
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: 220,
      p: 2,
      border: 1,
      borderRadius: "10px",
      bgcolor: "#FFFFFF",
      gap: 2
    }}>
      <Button onClick={handleLogOut}
              variant="contained"
      >
        Kirjaudu ulos
      </Button>
      <Button onClick={() => setDeleteDialogOpen(true)}
              variant="contained"
              color="warning"
      >
        Poista tili
      </Button>
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>
          {"Oletko varma, että haluat poistaa tilin?"}
        </DialogTitle>
        <DialogActions sx={{p: "16px 24px"}}>
          <Button variant="contained" onClick={() => setDeleteDialogOpen(false)}>
            Peruuta
          </Button>
          <Button variant="contained" onClick={handleDeleteAccount} color="warning">
            Vahvista
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
