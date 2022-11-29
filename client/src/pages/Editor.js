import { Button, Card, CardActionArea, CardHeader, CardMedia, Checkbox, FormControlLabel, Grid, IconButton, Radio, Switch, TextField, Typography } from '@mui/material'
import { shadows, width } from '@mui/system';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Editor.css'
import ImgV1 from '../images/chart_v1.png';
import ImgV5 from '../images/chart_v5.png';
import ImgV8 from '../images/chart_v8.png';
import ImgV9 from '../images/chart_v9.png';

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
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [user, setUser] = useState({userId: 0, username: ""})
  const [view, setView] = useState({})

  const base = 'http://localhost/myview/'

  useEffect(() => {
    // Test stuff
    setUser({userId: 1, username: "root"})
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

  function createView() {
    const newView = {
      url: url,
      userId: user.userId,
      v1: v1Selected,
      v2: v2Selected,
      v3: v3Selected,
      v4: v4Selected,
      v5: v5Selected,
      v6: v6Selected,
      v7: v7Selected,
      v8: v8Selected,
      v9: v9Selected,
      v10: v10Selected,
      description: description,
      stacked: twoColumnViewSelected
    }
    setView(newView)
  }

  function postView() {
    axios.post("http://localhost:8080/view/create/", view)
    .then(response => {
      console.log(response);
      setUrl(response.data.split(' ')[0])
    })
    .catch(error => {
      console.log(error);
    })
  }

  function debug() {
    console.log("v1Selected: ", v1Selected);
    console.log("v2Selected: ", v2Selected);
    console.log("v3Selected: ", v3Selected);
    console.log("v4Selected: ", v4Selected);
    console.log("v5Selected: ", v5Selected);
    console.log("v6Selected: ", v6Selected);
    console.log("v7Selected: ", v7Selected);
    console.log("v8Selected: ", v8Selected);
    console.log("v9Selected: ", v9Selected);
    console.log("v10Selected: ", v10Selected);
    console.log("twoColumnView: ", twoColumnViewSelected);
    console.log("userId: ", user.userId, "username: ", user.username);
    console.log("url: ", url);
  }

  return (
    <Grid>

      <Grid container id="controls" item xs={12} direction="row" alignItems="center" justifyContent="center">
        <TextField
          sx={{width: 500}} 
          disabled 
          id="view-url" 
          variant="outlined" 
          value={base + url}
          size={'small'} 
          InputProps={{endAdornment: <IconButton onClick={copyToClipboard} aria-label="copy"><ContentPasteIcon /></IconButton>}}/>
        <FormControlLabel 
          id="switch" 
          control={<Switch onChange={event => setTwoColumnViewSelected(event.target.checked)} />} 
          label="Two column view" />
        <Button variant="outlined" onClick={createView}>Finish editing</Button>
      </Grid>

      <Button onClick={debug}>DEBUG</Button>

      <Grid container spacing={6} direction={{xs: "column", md: "row"}} alignItems="center" justifyContent="center">
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {xs:400, sm: 500, md: 800} }} raised={v1Selected} >
            <CardActionArea onClick={() => setV1Selected(v1Selected ? false : true)}>
              <CardHeader title="V1 chart" subheader="Viivagraafi Hadcrut lämpötilatiedoista sekä Anders Mobergin et al. Paleoklimatologinen tutkimus 2000 vuoden lämpötilatiedoista"/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V1 Chart" />
              {/* <Checkbox onChange={event => setV1Selected(event.target.checked)} /> */}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {xs:400, sm: 500, md: 800} }} raised={v3Selected} >
            <CardActionArea onClick={() => setV3Selected(v3Selected ? false : true)}>
              <CardHeader title="V3 chart" subheader="Viivagraafi Havaijin Mauna Loalla tehdyt ilmakehän hiilidioksidipitoisuuksista. Aikajakso ~65 vuotta sekä ilmakehän hiilidioksidipitoisuudet perustuen etelämantereen jääkairauksiin"/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V3 Chart" />
              {/* <Checkbox onChange={event => setV3Selected(event.target.checked)} /> */}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {xs:400, sm: 500, md: 800} }} raised={v4Selected} >
            <CardActionArea onClick={() => setV4Selected(v4Selected ? false : true)}>
              <CardHeader title="V4 chart" subheader="Ilmakehän hiilidioksidipitoisuudet perustuen etelämantereen jääkairauksiin"/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V4 Chart" />
              {/* <Checkbox onChange={event => setV4Selected(event.target.checked)} /> */}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {xs:400, sm: 500, md: 800} }} raised={v5Selected} >
            <CardActionArea onClick={() => setV5Selected(v5Selected ? false : true)}>
              <CardHeader title="V5 chart" subheader="Viivagraafi ilmakehän hiilidioksidipitoisuuksista perustuen Neuvostoliiton etelämantereen Vostok asemalla tehtyihin jääkairauksiin. Aikajakso ~400000 vuotta."/>
              <CardMedia component="img" height="300" image={ImgV5} alt="V5 Chart" />
              {/* <Checkbox onChange={event => setV5Selected(event.target.checked)} /> */}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {xs:400, sm: 500, md: 800} }} raised={v6Selected} >
            <CardActionArea onClick={() => setV6Selected(v6Selected ? false : true)}>
              <CardHeader title="V6 chart" subheader="Viivagraafi ilmakehän hiilidioksidipitoisuuksista perustuen yhdistelmätutkimukseen etelmäntereen jääkairauksista. Aikajakso ~800000 vuotta."/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V6 Chart" />
              {/* <Checkbox onChange={event => setV6Selected(event.target.checked)} /> */}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {xs:400, sm: 500, md: 800} }} raised={v7Selected} >
            <CardActionArea onClick={() => setV7Selected(v7Selected ? false : true)}>
              <CardHeader title="V7 chart" subheader="Moniakselinen viivagraafi lämpötilan ja hiilidioksidipitoisuuksien muutoksista 2 miljoonan vuoden aikna."/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V7 Chart" />
              {/* <Checkbox onChange={event => setV7Selected(event.target.checked)} /> */}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {xs:400, sm: 500, md: 800} }} raised={v8Selected} >
            <CardActionArea onClick={() => setV8Selected(v8Selected ? false : true)}>
              <CardHeader title="V8 chart" subheader="Pinottu viivagraafi ajan suhteen maakohtaisista co2 päästöistä."/>
              <CardMedia component="img" height="300" image={ImgV8} alt="V8 Chart" />
              {/* <Checkbox onChange={event => setV8Selected(event.target.checked)} /> */}
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {xs:400, sm: 500, md: 800} }} raised={v9Selected} >
            <CardActionArea onClick={() => setV9Selected(v9Selected ? false : true)}>
              <CardHeader title="V9 chart" subheader="Piirakkakaavio co2 päästöistä toimialoittain."/>
              <CardMedia component="img" height="300" image={ImgV9} alt="V9 Chart" />
              {/* <Checkbox onChange={event => setV9Selected(event.target.checked)} /> */}
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

    </Grid>
  )
}
