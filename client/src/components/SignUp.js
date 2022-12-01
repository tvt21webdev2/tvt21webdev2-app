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
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    setErrorMessage("");
    event.preventDefault();
    (async () => {
      try {
        await axios.post(URL, signUp);
      } catch (err) {
        setErrorMessage(err.response.data);
      }
    })();
  }

  function selectErrorMessage() {
    switch (errorMessage) {
      case "name already exists":
        return "Username already exists";
      case "username invalid":
        return "Username should contain 4 to 16 alphanumeric characters";
      case "password invalid":
        return "Password should contain at least 8 characters, including one uppercase letter, one lowercase letter and one number";
      case "not matching":
        return "Passwords do not match";
    }
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
          error={errorMessage === "name already exists" || errorMessage === "username invalid"}
          helperText={errorMessage === "name already exists" ? selectErrorMessage() : errorMessage === "username invalid" ? selectErrorMessage() : null}
        />
        <TextField
          id="signup-password"
          name="signup-password"
          label="Password"
          required={true}
          value={signUp.password}
          onChange={(event) => setSignUp({...signUp, password: event.target.value})}
          error={errorMessage === "password invalid"}
          helperText={errorMessage === "password invalid" ? selectErrorMessage() : null}

        />
        <TextField
          id="signup-password-again"
          name="signup-password-again"
          label="Confirm password"
          required={true}
          value={signUp.passwordAgain}
          onChange={(event) => setSignUp({...signUp, passwordAgain: event.target.value})}
          error={errorMessage === "not matching"}
          helperText={errorMessage === "not matching" ? selectErrorMessage() : null}
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
