import * as React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

export default function UserOptions({setUserOptionsOpen, setCurrentUser}) {

  function handleLogOut() {
    localStorage.removeItem("user");
    setCurrentUser(null);
    setUserOptionsOpen(false);
    // logout request
  }

  function handleDeleteAccount() {
    (async () => {
      try {
        await axios.delete("http://localhost:8080/user/delete", {withCredentials: true});
        //are you sure -dialog
        handleLogOut();
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
      <Button onClick={handleDeleteAccount}
              variant="contained"
      >
        Delete account
      </Button>
      <Button onClick={handleLogOut}
              variant="contained"
      >
        Log out
      </Button>
    </Box>
  )
}
