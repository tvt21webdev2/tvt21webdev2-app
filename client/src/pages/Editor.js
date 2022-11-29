import { Button, Card, CardHeader, CardMedia, Checkbox, FormControlLabel, Grid, IconButton, Radio, Switch, TextField, Typography } from '@mui/material'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Editor.css'
import ImgV1 from '../images/chart_v1.png';

export default function Editor() {
  const [v1Selected, setV1Selected] = useState(false)
  const [v2Selected, setV2Selected] = useState(false)
  const [v3Selected, setV3Selected] = useState(false)
  const [v4Selected, setV4Selected] = useState(false)
  const [v5Selected, setV5Selected] = useState(false)
  const [v6Selected, setV6Selected] = useState(false)
  const [v7Selected, setV7Selected] = useState(false)
  const [v8Selected, setV8Selected] = useState(false)
  const [v9Selected, setV9Selected] = useState(false)
  const [v10Selected, setV10Selected] = useState(false)
  const [twoColumnViewSelected, setTwoColumnViewSelected] = useState(false)
  const [url, setUrl] = useState(generateURL(10))
  const [userId, setUserId] = useState(0)

  const base = 'https://localhost/n3/'

  useEffect(() => {
  }, [])

  function generateURL(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function copyToClipboard() {
    const copyText = document.getElementById("view-url");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    navigator.clipboard.writeText(copyText.value);
    console.log(copyText.value);
  }

  function postSettings() {
    axios.post("https://localhost:8080/view/create/")
  }

  function debug() {
    console.log("v1 selected: " + v1Selected);
    console.log("two column view: " + twoColumnViewSelected);
  }

  return (
    <>
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Grid id="controls" item xs={12}>
          <TextField 
            disabled 
            id="view-url" 
            variant="outlined" 
            defaultValue={base + url} 
            size={'small'} 
            InputProps={{endAdornment: <IconButton onClick={copyToClipboard} aria-label="copy"><ContentPasteIcon /></IconButton>}}/>
          <FormControlLabel 
            id="switch" 
            control={<Switch onChange={event => setTwoColumnViewSelected(event.target.checked)} />} 
            label="Two column view" />
          <Button variant="outlined" onClick={postSettings}>Finish editing</Button>
        </Grid>
        <Grid item xs={6}>
          <Card id="chart-card" sx={{ minWidth: 500 }} raised={v1Selected} >
            <CardHeader title="V1 chart" subheader="Global historical surface temperature anomalies from January 1850 onwards"/>
            <CardMedia component="img" height="300" image={ImgV1} alt="V1 Chart" />
            <Checkbox
              onChange={event => setV1Selected(event.target.checked)}
            />
          </Card>
        </Grid>
        <Grid item xs={6}>

        </Grid>
        <Button onClick={debug}>DEBUG</Button>
      </Grid>
    </>
  )
}
