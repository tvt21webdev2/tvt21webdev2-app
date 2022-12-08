import * as React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import {Dialog, DialogActions, DialogTitle} from "@mui/material";
import {useState} from "react";

export default function UserOptions({setUserOptionsOpen, setCurrentUser, setSnackbarOpen}) {

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  async function handleLogOut() {
    try {
      await axios.get("http://localhost:8080/logout", {withCredentials: true});
      localStorage.removeItem("user");
      setCurrentUser(null);
      setUserOptionsOpen(false);
      setSnackbarOpen("logout");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteAccount() {
    try {
      await axios.delete("http://localhost:8080/user/delete", {withCredentials: true});
      await handleLogOut();
      setSnackbarOpen("deleteuser");
    } catch (err) {
      console.log(err);
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
      bgcolor: "pink",
      gap: 2
    }}>
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
        <DialogActions>
          <Button variant="contained" onClick={() => setDeleteDialogOpen(false)}>
            Peruuta
          </Button>
          <Button variant="contained" onClick={handleDeleteAccount} color="warning">
            Vahvista
          </Button>
        </DialogActions>
      </Dialog>
      <Button onClick={handleLogOut}
              variant="contained"
      >
        Kirjaudu ulos
      </Button>
    </Box>
  )
}
