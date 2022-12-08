import { Button, Card, CardActionArea, CardHeader, CardMedia, Checkbox, FormControlLabel, Grid, IconButton, Radio, Switch, TextareaAutosize, TextField, Typography } from '@mui/material'
import { shadows, width } from '@mui/system';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
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
  const [v3Selected, setV3Selected] = useState(false)
  const [v4Selected, setV4Selected] = useState(false)
  const [v5Selected, setV5Selected] = useState(false)
  const [v6Selected, setV6Selected] = useState(false)
  const [v7Selected, setV7Selected] = useState(false)
  const [v8Selected, setV8Selected] = useState(false)
  const [v9Selected, setV9Selected] = useState(false)

  const [stackedSelected, setStackedSelected] = useState(false)
  const [description, setDescription] = useState("Testi description")
  const [url, setUrl] = useState("")
  const [user, setUser] = useState({userId: 1, username: "root"})
  const [posted, setPosted] = useState(false)


  // const base = "http://localhost:3000/myview?id="
  const base = "http://localhost:3000/myview/"

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
      // url: url,
      userId: user.userId,
      stacked: stackedSelected,
      description: description,
      v1: v1Selected,
      // v2: v2Selected,
      v3: v3Selected,
      v4: v4Selected,
      v5: v5Selected,
      v6: v6Selected,
      v7: v7Selected,
      v8: v8Selected,
      v9: v9Selected,
      // v10: v10Selected,
      v1description: v1Description === "" ? null : v1Description,
      v3description: v3Description === "" ? null : v3Description,
      v4description: v4Description === "" ? null : v4Description,
      v5description: v5Description === "" ? null : v5Description,
      v6description: v6Description === "" ? null : v6Description,
      v7description: v7Description === "" ? null : v7Description,
      v8description: v8Description === "" ? null : v8Description,
      v9description: v9Description === "" ? null : v9Description,
    }
    
    return newView
  }

  function postView() {
    axios.post("http://localhost:8080/view/create", createView())
    .then(response => {
      setUrl(response.data.split(" ")[0])
      setPosted(true)
    })
    .catch(error => {
      console.log(error);
    })
  }

  function check() {
    if (v1Selected ||
      v3Selected ||
      v4Selected ||
      v5Selected ||
      v6Selected ||
      v7Selected ||
      v8Selected ||
      v9Selected) {
        return true
      }
      return false
    }

    // function debug() {
    //   console.log("url: ", url);
    //   console.log("userId: ", user.userId, "username: ", user.username);
    //   console.log("descripton: ", description);
    //   console.log("stacked: ", stackedSelected);
    //   console.log("v1Selected: ", v1Selected);
    //   // console.log("v2Selected: ", v2Selected);
    //   console.log("v3Selected: ", v3Selected);
    //   console.log("v4Selected: ", v4Selected);
    //   console.log("v5Selected: ", v5Selected);
    //   console.log("v6Selected: ", v6Selected);
    //   console.log("v7Selected: ", v7Selected);
    //   console.log("v8Selected: ", v8Selected);
    //   console.log("v9Selected: ", v9Selected);
    //   // console.log("v10Selected: ", v10Selected);
    // }

  return (
    <Grid>

      <Grid container item id="controls" sx={{mb: 6}} xs={12} direction={{xs: "column", md: "row"}} alignItems="center" justifyContent="center">
        <TextField
          sx={{width: 600}} 
          disabled 
          id="view-url" 
          variant="outlined" 
          value={base + url}
          size={"small"} 
          InputProps={{endAdornment: <IconButton onClick={copyToClipboard} aria-label="copy"><ContentPasteIcon /></IconButton>}}/>
        <FormControlLabel 
          id="switch" 
          control={<Switch onChange={event => setStackedSelected(event.target.checked)} />} 
          label="Two column view" />
        <Button variant="outlined" onClick={postView} disabled={posted || !check()}>Finish editing</Button>
        <Link to={`/myview/${url}`} hidden={!posted}>
          <Button
            sx={{ml: 2}} 
            variant="contained" 
            color="success" 
            >View your charts
          </Button> 
        </Link>
      </Grid>

      {/* <Button onClick={debug}>DEBUG</Button> */}

      <Grid container spacing={6} direction={{xs: "column", md: "row"}} alignItems="center" justifyContent="center">
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {sm: 575, md: 875}, minHeight: 450 }} raised={v1Selected} >
            <CardActionArea onClick={() => setV1Selected(v1Selected ? false : true)}>
              <CardHeader sx={{height: 150}} title="Globaalit pintalämpötilavaihteluilmiöt tammikuusta 1850 lähtien sekä pohjoisen pallonpuoliskon lämpötilat 2000 vuodelta." subheader="V1"/>
              <CardMedia component="img" minHeight="400" image={require('../images/chart_v1.png')} alt="V1 Chart" />
            </CardActionArea>
            <TextareaAutosize
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Jätä tyhjäksi käyttääksesi oletuskuvausta." 
              onChange={event => setV1Description(event.target.value)}
              hidden={!v1Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {sm: 575, md: 875}, minHeight: 450 }} raised={v3Selected}>
            <CardActionArea onClick={() => setV3Selected(v3Selected ? false : true)} disabled >
              <CardHeader sx={{height: 150}} title="Ilmakehän hiilidioksidipitoisuudet Mauna Loaalta alkaen vuodesta 1958." subheader="V3"/>
              <CardMedia component="img" minHeight="400" image={require('../images/chart_v3.png')} alt="V3 Chart" />
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Jätä tyhjäksi käyttääksesi oletuskuvausta." 
              onChange={event => setV3Description(event.target.value)}
              hidden={!v3Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {sm: 575, md: 875}, minHeight: 450 }} raised={v4Selected} >
            <CardActionArea onClick={() => setV4Selected(v4Selected ? false : true)}>
              <CardHeader sx={{height: 150}} title="Antarktiset jäämittaukset ilmakehän hiilidioksidipitoisuuksista yhdistettynä Mauna Loan mittauksiin." subheader="V4"/>
              <CardMedia component="img" minHeight="400" image={require('../images/chart_v4.png')} alt="V4 Chart" />
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Jätä tyhjäksi käyttääksesi oletuskuvausta." 
              onChange={event => setV4Description(event.target.value)}
              hidden={!v4Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {sm: 575, md: 875}, minHeight: 450 }} raised={v5Selected} >
            <CardActionArea onClick={() => setV5Selected(v5Selected ? false : true)}>
              <CardHeader sx={{height: 150}} title="Vostokin jäämittaukset hiilidioksidipitoisuuksista vuosilta 417160 - 2342 BP" subheader="V5"/>
              <CardMedia component="img" minHeight="400" image={require('../images/chart_v5.png')} alt="V5 Chart" />
            </CardActionArea>
            <TextareaAutosize
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Jätä tyhjäksi käyttääksesi oletuskuvausta." 
              onChange={event => setV5Description(event.target.value)}
              hidden={!v5Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {sm: 575, md: 875}, minHeight: 450 }} raised={v6Selected} >
            <CardActionArea onClick={() => setV6Selected(v6Selected ? false : true)}>
              <CardHeader sx={{height: 150}} title="Jäämittaukset 800k vuodelta yhdistettynä hiilidioksidimittauksiin." subheader="V6"/>
              <CardMedia component="img" minHeight="400" image={require('../images/chart_v6.png')} alt="V6 Chart" />
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Jätä tyhjäksi käyttääksesi oletuskuvausta." 
              onChange={event => setV6Description(event.target.value)}
              hidden={!v6Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {sm: 575, md: 875}, minHeight: 450 }} raised={v7Selected} >
            <CardActionArea onClick={() => setV7Selected(v7Selected ? false : true)}>
              <CardHeader sx={{height: 150}} title="Globaalin lämpötilan evoluutio viimeisen kahden miljoonan vuoden aikana." subheader="V7"/>
              <CardMedia component="img" minHeight="400" image={require('../images/chart_v7.png')} alt="V7 Chart" />
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Jätä tyhjäksi käyttääksesi oletuskuvausta." 
              onChange={event => setV7Description(event.target.value)}
              hidden={!v7Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {sm: 575, md: 875}, minHeight: 450, mb: 6 }} raised={v8Selected} >
            <CardActionArea onClick={() => setV8Selected(v8Selected ? false : true)}>
              <CardHeader sx={{height: 150}} title="Hiilidioksidipäästöt maittain." subheader="V8"/>
              <CardMedia component="img" minHeight="400" image={require('../images/chart_v8.png')} alt="V8 Chart" />
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Jätä tyhjäksi käyttääksesi oletuskuvausta." 
              onChange={event => setV8Description(event.target.value)}
              hidden={!v8Selected}
            />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card id="chart-card" sx={{ minWidth: {sm: 575, md: 875}, minHeight: 450, mb: 6 }} raised={v9Selected} >
            <CardActionArea onClick={() => setV9Selected(v9Selected ? false : true)}>
              <CardHeader sx={{height: 150}} title="Hiilidioksidipäästöt sektoreittain." subheader="V9"/>
              <CardMedia component="img" minHeight="400" image={require('../images/chart_v9.png')} alt="V9 Chart" />
            </CardActionArea>
            <TextareaAutosize 
              id="text-area" maxRows={10} 
              aria-label="empty textarea" 
              placeholder="Jätä tyhjäksi käyttääksesi oletuskuvausta." 
              onChange={event => setV9Description(event.target.value)}
              hidden={!v9Selected}
            />
          </Card>
        </Grid>
      </Grid>

    </Grid>
  )
}
