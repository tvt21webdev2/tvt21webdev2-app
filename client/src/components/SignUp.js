import * as React from 'react';
import {Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function SignUp({open, onClose}) {

  return (
    <Modal open={open} onClose={onClose} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <div></div>
    </Modal>
  )
}
