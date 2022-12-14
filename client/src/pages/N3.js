import {Card, Grid, LinearProgress, Typography} from '@mui/material'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import V1 from '../components/V1'
import V3 from '../components/V3'
import V5 from '../components/V5'
import V6 from '../components/V6'
import V7 from '../components/V7'
import V8 from '../components/V8'
import V9 from '../components/V9'
import '../styles/N3.css'
import video from '../images/cherry.mp4';


export default function N3() {
  // const [id, setId] = useState(null)
  // const [viewData, setViewData] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [isEmptyData, setEmptyData] = useState(false)

  const [stackedSelected, setStackedSelected] = useState(true)
  const [description, setDescription] = useState(null)
  const [name, setName] = useState(null)

  const [v1Desc, setV1Desc] = useState(null)
  const [v3Desc, setV3Desc] = useState(null)
  // const [v4Desc, setV4Desc] = useState(null)
  const [v5Desc, setV5Desc] = useState(null)
  const [v6Desc, setV6Desc] = useState(null)
  const [v7Desc, setV7Desc] = useState(null)
  const [v8Desc, setV8Desc] = useState(null)
  const [v9Desc, setV9Desc] = useState(null)

  const [v1Selected, setV1Selected] = useState(false)
  const [v3Selected, setV3Selected] = useState(false)
  // const [v4Selected, setV4Selected] = useState(false)
  const [v5Selected, setV5Selected] = useState(false)
  const [v6Selected, setV6Selected] = useState(false)
  const [v7Selected, setV7Selected] = useState(false)
  const [v8Selected, setV8Selected] = useState(false)
  const [v9Selected, setV9Selected] = useState(false)

  const [v1DescDefault] = useState('Viivagraafi Hadcrut lämpötilatiedoista')
  const [v3DescDefault] = useState('Viivagraafi Havaijin Mauna Loalla tehdyt ilmakehän hiilidioksidipitoisuuksista. Aikajakso ~65 vuotta.')
  // const [v4DescDefault] = useState('Ilmakehän hiilidioksidipitoisuudet perustuen etelämantereen jääkairauksiin. Aikajakso ~1000 vuotta')
  const [v5DescDefault] = useState('Viivagraafi ilmakehän hiilidioksidipitoisuuksista perustuen Neuvostoliiton etelämantereen Vostok asemalla tehtyihin jääkairauksiin. Aikajakso ~400000 vuotta.')
  const [v6DescDefault] = useState('Viivagraafi ilmakehän hiilidioksidipitoisuuksista perustuen yhdistelmätutkimukseen etelmäntereen jääkairauksista. Aikajakso ~800000 vuotta.')
  const [v7DescDefault] = useState('Moniakselinen viivagraafi lämpötilan ja hiilidioksidipitoisuuksien muutoksista 2 miljoonan vuoden aikana.')
  const [v8DescDefault] = useState('Pinottu viivagraafi ajan suhteen maakohtaisista co2 päästöistä.')
  const [v9DescDefault] = useState('Piirakkakaavio hiilidioksidipäästöistä toimialoittain.')

  const params = useParams();

  useEffect(() => {
    setLoaded(false);
    getData()
  }, [params])

  const getData = async () => {
    const {data} = await axios.get(`http://localhost:8080/view/${params.id}`);
    if (data.length === 0) {
      setEmptyData(true)
    } else {
      setValues(data)
    }
  };

  function setValues(view) {
    const viewObject = view[0]

    setStackedSelected(viewObject.stacked)
    setDescription(viewObject.description)
    setName(viewObject.name)

    setV1Selected(viewObject.v1)
    setV3Selected(viewObject.v3)
    // setV4Selected(viewObject.v4)
    setV5Selected(viewObject.v5)
    setV6Selected(viewObject.v6)
    setV7Selected(viewObject.v7)
    setV8Selected(viewObject.v8)
    setV9Selected(viewObject.v9)

    setV1Desc(viewObject.v1description)
    setV3Desc(viewObject.v3description)
    // setV4Desc(viewObject.v4description)
    setV5Desc(viewObject.v5description)
    setV6Desc(viewObject.v6description)
    setV7Desc(viewObject.v7description)
    setV8Desc(viewObject.v8description)
    setV9Desc(viewObject.v9description)

    setLoaded(true)
  }

  if (isEmptyData) {
    return (
      <Grid container alignItems="center" justifyContent="center" direction={'column'}>
        <Grid item xs={12}>
          <h1>404</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>Näkymää ei voida näyttää</h2>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <>
        <video autoPlay loop muted playsInline className="back-video">
          <source src={video} type="video/mp4"></source>
        </video>
        {!isLoaded && <LinearProgress color="secondary" sx={{height: 15}}/>}
        <h1 id="n3-title">{name}</h1>
        {isLoaded &&
          <Grid container spacing={6} sx={{mb: 6}}
                direction={{xs: 'column', sm: 'column', md: 'column', lg: stackedSelected ? "column" : "row"}}
                alignItems="center" justifyContent="center">
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!v1Selected}>
              <Card raised={true} sx={{p: 3}}>
                <V1/>
                <Typography sx={{mt: 2, minHeight: 50, wordWrap: 'break-word'}}>{v1Desc ?? v1DescDefault}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!v3Selected}>
              <Card raised={true} sx={{p: 3}}>
                <V3/>
                <Typography sx={{mt: 2, minHeight: 50, wordWrap: 'break-word'}}>{v3Desc ?? v3DescDefault}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!v5Selected}>
              <Card raised={true} sx={{p: 3}}>
                <V5/>
                <Typography sx={{mt: 2, minHeight: 50, wordWrap: 'break-word'}}>{v5Desc ?? v5DescDefault}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!v6Selected}>
              <Card raised={true} sx={{p: 3}}>
                <V6/>
                <Typography sx={{mt: 2, minHeight: 50, wordWrap: 'break-word'}}>{v6Desc ?? v6DescDefault}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!v7Selected}>
              <Card raised={true} sx={{p: 3}}>
                <V7/>
                <Typography sx={{mt: 2, minHeight: 50, wordWrap: 'break-word'}}>{v7Desc ?? v7DescDefault}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!v8Selected}>
              <Card raised={true} sx={{p: 3}}>
                <V8/>
                <Typography sx={{mt: 2, minHeight: 50, wordWrap: 'break-word'}}>{v8Desc ?? v8DescDefault}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!v9Selected}>
              <Card raised={true} sx={{p: 3}}>
                <V9/>
                <Typography sx={{mt: 2, minHeight: 50, wordWrap: 'break-word'}}>{v9Desc ?? v9DescDefault}</Typography>
              </Card>
            </Grid>
          </Grid>
        }
      </>
    )
  }

}