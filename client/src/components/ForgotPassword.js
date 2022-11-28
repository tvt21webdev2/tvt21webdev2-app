import * as React from 'react';
import {Modal, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function ForgotPassword({open, onClose}) {

  return (
    <Modal open={open} onClose={onClose} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <div></div>
    </Modal>
  )
}
