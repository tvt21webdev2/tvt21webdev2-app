import * as React from 'react';
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {forwardRef, useEffect, useRef, useState} from "react";
import axios from "axios";
import Util from "../util";

const SignUp = forwardRef(({setSnackbarOpen, setSignUpOpen}, ref) => {

  const URL = "http://localhost:8080/register";

  const [signUp, setSignUp] = useState({username: "", password: "", passwordAgain: ""});
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [errorMessage]);

  async function handleSubmit(event) {
    setErrorMessage("");
    event.preventDefault();
    try {
      await axios.post(URL, signUp);
      setSnackbarOpen("signup");
      setSignUpOpen(false);
    } catch (err) {
      setErrorMessage(err.response.data);
    }
  }

  return (
    <Box component="form"
         onSubmit={handleSubmit}
         sx={{
           display: "flex",
           flexDirection: "column",
           width: 600,
           p: 3,
           border: 1,
           borderRadius: "10px",
           bgcolor: "#FFFFFF",
           gap: 2
         }}
    >
      <Typography component="h1" variant="h5">
        Luo tili
      </Typography>
      <TextField
        inputRef={(errorMessage === "name already exists" || errorMessage === "username invalid") ? inputRef : null}
        id="signup-username"
        name="signup-username"
        label="Käyttäjätunnus"
        required={true}
        autoFocus={true}
        value={signUp.username}
        onChange={(event) => setSignUp({...signUp, username: event.target.value})}
        error={errorMessage === "name already exists" || errorMessage === "username invalid"}
        helperText={errorMessage === "name already exists" ? Util.selectErrorMessage(errorMessage) : errorMessage === "username invalid" ? Util.selectErrorMessage(errorMessage) : null}
      />
      <TextField
        inputRef={errorMessage === "password invalid" ? inputRef : null}
        type="password"
        id="signup-password"
        name="signup-password"
        label="Salasana"
        required={true}
        value={signUp.password}
        onChange={(event) => setSignUp({...signUp, password: event.target.value})}
        error={errorMessage === "password invalid"}
        helperText={errorMessage === "password invalid" ? Util.selectErrorMessage(errorMessage) : null}

      />
      <TextField
        inputRef={errorMessage === "not matching" ? inputRef : null}
        type="password"
        id="signup-password-again"
        name="signup-password-again"
        label="Vahvista salasana"
        required={true}
        value={signUp.passwordAgain}
        onChange={(event) => setSignUp({...signUp, passwordAgain: event.target.value})}
        error={errorMessage === "not matching"}
        helperText={errorMessage === "not matching" ? Util.selectErrorMessage(errorMessage) : null}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{mt: 2, mb: 2}}
      >
        Luo tili
      </Button>
    </Box>
  );
});

export default SignUp