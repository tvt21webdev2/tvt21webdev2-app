import { Button, Card, CardActionArea, CardHeader, CardMedia, Checkbox, FormControlLabel, Grid, IconButton, Radio, Switch, TextareaAutosize, TextField, Typography } from '@mui/material'
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
  const [v1Description, setV1Description] = useState(null)
  const [v3Description, setV3Description] = useState(null)
  const [v4Description, setV4Description] = useState(null)
  const [v5Description, setV5Description] = useState(null)
  const [v6Description, setV6Description] = useState(null)
  const [v7Description, setV7Description] = useState(null)
  const [v8Description, setV8Description] = useState(null)
  const [v9Description, setV9Description] = useState(null)
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
  const [stackedSelected, setstackedSelected] = useState(false)
  const [description, setDescription] = useState("Testi description")
  const [url, setUrl] = useState("")
  const [user, setUser] = useState({userId: 1, username: "root"})
  // const [view, setView] = useState({})

  const base = "http://localhost/myview/"

  // useEffect(() => {
  //   setUser({userId: 1, username: "root"})
  //   window.sessionStorage.setItem("user", JSON.stringify(user))
  // }, [])

  // function generateURL(length) {
  //   var result = "";
  //   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   var charactersLength = characters.length;
  //   for ( var i = 0; i < length; i++ ) {
  //       result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

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
      description: description,
      stacked: stackedSelected,
      v1: v1Selected,
      v1description: v1Description === "" ? null : v1Description,
      v2: v2Selected,
      v3: v3Selected,
      v3description: v3Description === "" ? null : v3Description,
      v4: v4Selected,
      v4description: v4Description === "" ? null : v4Description,
      v5: v5Selected,
      v5description: v5Description === "" ? null : v5Description,
      v6: v6Selected,
      v6description: v6Description === "" ? null : v6Description,
      v7: v7Selected,
      v7description: v7Description === "" ? null : v7Description,
      v8: v8Selected,
      v8description: v8Description === "" ? null : v8Description,
      v9: v9Selected,
      v9description: v9Description === "" ? null : v9Description,
      v10: v10Selected,
    }
    console.log(newView);
    // setView(newView)
    return newView
  }

  function postView() {
    axios.post("http://localhost:8080/view/create", createView())
    .then(response => {
      console.log(response);
      setUrl(response.data.split(" ")[0])
    })
    .catch(error => {
      console.log(error);
    })
  }

  function debug() {
    console.log("url: ", url);
    console.log("userId: ", user.userId, "username: ", user.username);
    console.log("descripton: ", description);
    console.log("stacked: ", stackedSelected);
    console.log("v1Selected: ", v1Selected);
    // console.log("v2Selected: ", v2Selected);
    console.log("v3Selected: ", v3Selected);
    console.log("v4Selected: ", v4Selected);
    console.log("v5Selected: ", v5Selected);
    console.log("v6Selected: ", v6Selected);
    console.log("v7Selected: ", v7Selected);
    console.log("v8Selected: ", v8Selected);
    console.log("v9Selected: ", v9Selected);
    // console.log("v10Selected: ", v10Selected);
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
          size={"small"} 
          InputProps={{endAdornment: <IconButton onClick={copyToClipboard} aria-label="copy"><ContentPasteIcon /></IconButton>}}/>
        <FormControlLabel 
          id="switch" 
          control={<Switch onChange={event => setstackedSelected(event.target.checked)} />} 
          label="Two column view" />
        <Button variant="outlined" onClick={createView}>Finish editing</Button>
      </Grid>

      <Button onClick={debug}>DEBUG</Button>

      <Grid container spacing={6} direction={{xs: "column", md: "row"}} alignItems="center" justifyContent="center">
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ width: {xs:400, sm: 600, md: 800}, minHeight: 450 }} raised={v1Selected} >
            <CardActionArea onClick={() => setV1Selected(v1Selected ? false : true)}>
              <CardHeader title="V1 chart" subheader="Viivagraafi Hadcrut lämpötilatiedoista sekä Anders Mobergin et al. Paleoklimatologinen tutkimus 2000 vuoden lämpötilatiedoista"/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V1 Chart" />
              {/* <Checkbox onChange={event => setV1Selected(event.target.checked)} /> */}
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Write your propaganda here" 
              onChange={event => setV1Description(event.target.value)}
              hidden={!v1Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ width: {xs:400, sm: 600, md: 800}, minHeight: 450 }} raised={v3Selected} >
            <CardActionArea onClick={() => setV3Selected(v3Selected ? false : true)}>
              <CardHeader title="V3 chart" subheader="Viivagraafi Havaijin Mauna Loalla tehdyt ilmakehän hiilidioksidipitoisuuksista. Aikajakso ~65 vuotta sekä ilmakehän hiilidioksidipitoisuudet perustuen etelämantereen jääkairauksiin"/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V3 Chart" />
              {/* <Checkbox onChange={event => setV3Selected(event.target.checked)} /> */}
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Write your propaganda here" 
              onChange={event => setV3Description(event.target.value)}
              hidden={!v3Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ width: {xs:400, sm: 600, md: 800}, minHeight: 450 }} raised={v4Selected} >
            <CardActionArea onClick={() => setV4Selected(v4Selected ? false : true)}>
              <CardHeader title="V4 chart" subheader="Ilmakehän hiilidioksidipitoisuudet perustuen etelämantereen jääkairauksiin"/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V4 Chart" />
              {/* <Checkbox onChange={event => setV4Selected(event.target.checked)} /> */}
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Write your propaganda here" 
              onChange={event => setV4Description(event.target.value)}
              hidden={!v4Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ width: {xs:400, sm: 600, md: 800}, minHeight: 450 }} raised={v5Selected} >
            <CardActionArea onClick={() => setV5Selected(v5Selected ? false : true)}>
              <CardHeader title="V5 chart" subheader="Viivagraafi ilmakehän hiilidioksidipitoisuuksista perustuen Neuvostoliiton etelämantereen Vostok asemalla tehtyihin jääkairauksiin. Aikajakso ~400000 vuotta."/>
              <CardMedia component="img" height="300" image={ImgV5} alt="V5 Chart" />
              {/* <Checkbox onChange={event => setV5Selected(event.target.checked)} /> */}
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Write your propaganda here" 
              onChange={event => setV5Description(event.target.value)}
              hidden={!v5Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ width: {xs:400, sm: 600, md: 800}, minHeight: 450 }} raised={v6Selected} >
            <CardActionArea onClick={() => setV6Selected(v6Selected ? false : true)}>
              <CardHeader title="V6 chart" subheader="Viivagraafi ilmakehän hiilidioksidipitoisuuksista perustuen yhdistelmätutkimukseen etelmäntereen jääkairauksista. Aikajakso ~800000 vuotta."/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V6 Chart" />
              {/* <Checkbox onChange={event => setV6Selected(event.target.checked)} /> */}
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Write your propaganda here" 
              onChange={event => setV6Description(event.target.value)}
              hidden={!v6Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ width: {xs:400, sm: 600, md: 800}, minHeight: 450 }} raised={v7Selected} >
            <CardActionArea onClick={() => setV7Selected(v7Selected ? false : true)}>
              <CardHeader title="V7 chart" subheader="Moniakselinen viivagraafi lämpötilan ja hiilidioksidipitoisuuksien muutoksista 2 miljoonan vuoden aikana."/>
              <CardMedia component="img" height="300" image={ImgV1} alt="V7 Chart" />
              {/* <Checkbox onChange={event => setV7Selected(event.target.checked)} /> */}
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Write your propaganda here" 
              onChange={event => setV7Description(event.target.value)}
              hidden={!v7Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ width: {xs:400, sm: 600, md: 800}, minHeight: 450, mb: 6 }} raised={v8Selected} >
            <CardActionArea onClick={() => setV8Selected(v8Selected ? false : true)}>
              <CardHeader title="V8 chart" subheader="Pinottu viivagraafi ajan suhteen maakohtaisista co2 päästöistä."/>
              <CardMedia component="img" height="300" image={ImgV8} alt="V8 Chart" />
              {/* <Checkbox onChange={event => setV8Selected(event.target.checked)} /> */}
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Write your propaganda here" 
              onChange={event => setV8Description(event.target.value)}
              hidden={!v8Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ width: {xs:400, sm: 600, md: 800}, minHeight: 450, mb: 6 }} raised={v9Selected} >
            <CardActionArea onClick={() => setV9Selected(v9Selected ? false : true)}>
              <CardHeader title="V9 chart" subheader="Piirakkakaavio co2 päästöistä toimialoittain."/>
              <CardMedia component="img" height="300" image={ImgV9} alt="V9 Chart" />
              {/* <Checkbox onChange={event => setV9Selected(event.target.checked)} /> */}
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Write your propaganda here" 
              onChange={event => setV9Description(event.target.value)}
              hidden={!v9Selected}
            />
          </Card>
        </Grid>
      </Grid>

    </Grid>
  )
}
