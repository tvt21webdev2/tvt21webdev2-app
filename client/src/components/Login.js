import * as React from 'react';
import Box from "@mui/material/Box";
import {Alert, Link, Snackbar, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useState} from "react";
// import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";

export default function Login() {

  const [login, setLogin] = useState({username: "", password: ""});
  // const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("LOGIN");
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: 300,
      p: 3,
      border: 1,
      borderRadius: "10px",
      bgcolor: "pink",
      gap: 2
    }}
    >
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <Box component="form"
           onSubmit={handleSubmit}
      >
        <TextField
          sx={{mb: 2}}
          fullWidth={true}
          id="username"
          name="username"
          label="Username"
          required={true}
          autoFocus={true}
          value={login.username}
          onChange={(event) => setLogin({...login, username: event.target.value})}
        />
        <TextField
          fullWidth={true}
          id="password"
          name="password"
          label="Password"
          required={true}
          value={login.password}
          onChange={(event) => setLogin({...login, password: event.target.value})}
        />
        <Button
          fullWidth={true}
          type="submit"
          variant="contained"
          sx={{mt: 3, mb: 2}}
        >
          Log In
        </Button>
      </Box>
      {/*<Link underline="none" onClick={() => setForgotPasswordOpen(true)}>*/}
      {/*  Forgot password?*/}
      {/*</Link>*/}
      <Link underline="none" onClick={() => setSignUpOpen(true)}>
        Don't have an account? Sign Up
      </Link>
      {/*<ForgotPassword open={forgotPasswordOpen}*/}
      {/*                onClose={(reason: "backdropClick") => setForgotPasswordOpen(false)}/>*/}
      <SignUp open={signUpOpen}
              onClose={() => setSignUpOpen(false)}/>
    </Box>
  )
}

//   <Snackbar open={true} autoHideDuration={5000}>
//           <Alert variant="filled" severity="success">Registration successful!</Alert>
//   </Snackbar>
