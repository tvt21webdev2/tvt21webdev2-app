import * as React from 'react';
import {Grid, Link, Modal, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from 'react'

export default function ForgotPassword({open, onClose}) {
  const [email, setEmail] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
  }

    return (
      <Modal open={open} onClose={onClose} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            // height: 400,
            p: 3,
            border: 1,
            borderRadius: "10px",
            bgcolor: "pink",
            gap: 2
          }}
        >
          <Link underline="none" onClick={() => onClose}>
            Takaisin kirjautumiseen
          </Link>
          <TextField
            id="email"
            name="email"
            label="email"
            required={true}
            autoFocus={true}
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
          />
          <Button
            type="submit"
            variant="contained"
            sx={{mt: 2, mb: 2}}
          >
            Request password change
          </Button>
          <Typography component="h1" variant="h5" type="hidden">
            Email sent
          </Typography>
        </Box>
      </Modal>
    )
  }
