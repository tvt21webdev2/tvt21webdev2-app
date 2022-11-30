import * as React from 'react';
import {Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SignUp({open, onClose}) {

  const URL = "http://localhost:8080/register";

  const [signUp, setSignUp] = useState({username: "", password: "", passwordAgain: ""});

  function handleSubmit(event) {
    event.preventDefault();
    (async () => {
      try {
        await axios.post(URL, signUp);
      } catch (err) {
        console.log(err.response.data);
      }
    })();
  }

  return (
    <Modal open={open} onClose={onClose} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box component="form"
           onSubmit={handleSubmit}
           sx={{
             display: "flex",
             flexDirection: "column",
             width: 600,
             p: 3,
             border: 1,
             borderRadius: "10px",
             bgcolor: "pink",
             gap: 2
           }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <TextField
          id="signup-username"
          name="signup-username"
          label="Username"
          required={true}
          autoFocus={true}
          value={signUp.username}
          onChange={(event) => setSignUp({...signUp, username: event.target.value})}
          // error={}
          // helperText={}
        />
        <TextField
          id="signup-password"
          name="signup-password"
          label="Password"
          required={true}
          value={signUp.password}
          onChange={(event) => setSignUp({...signUp, password: event.target.value})}
          // error={}
          // helperText={}

        />
        <TextField
          id="signup-password-again"
          name="signup-password-again"
          label="Confirm password"
          required={true}
          value={signUp.passwordAgain}
          onChange={(event) => setSignUp({...signUp, passwordAgain: event.target.value})}
          // error={}
          // helperText={}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{mt: 2, mb: 2}}
        >
          Sign up
        </Button>
      </Box>
    </Modal>
  )
}
