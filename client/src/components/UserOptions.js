import * as React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import {Dialog, DialogActions, DialogTitle} from "@mui/material";
import {useState} from "react";

export default function UserOptions({setUserOptionsOpen, setCurrentUser, setSnackbarOpen}) {

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  function handleLogOut() {
    setSnackbarOpen("logout");
    (async () => {
      try {
        await axios.get("http://localhost:8080/logout", {withCredentials: true});
        localStorage.removeItem("user");
        setCurrentUser(null);
        setUserOptionsOpen(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }

  function handleDeleteAccount() {
    (async () => {
      try {
        await axios.delete("http://localhost:8080/user/delete", {withCredentials: true});
        handleLogOut();
        setSnackbarOpen("deleteuser");
      } catch (err) {
        console.log(err);
      }
    })();
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
      >
        Delete account
      </Button>
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>
          {"Are you sure you want to delete your account?"}
        </DialogTitle>
        <DialogActions>
          <Button variant="contained" onClick={() => setDeleteDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleDeleteAccount}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Button onClick={handleLogOut}
              variant="contained"
      >
        Log out
      </Button>
    </Box>
  )
}
