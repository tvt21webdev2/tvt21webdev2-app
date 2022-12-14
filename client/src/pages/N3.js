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

  const defaultDescriptions = {
    v1: 'Viivagraafi Hadcrut lämpötilatiedoista',
    v3: 'Viivagraafi Havaijin Mauna Loalla tehdyt ilmakehän hiilidioksidipitoisuuksista. Aikajakso ~65 vuotta.',
    v5: 'Viivagraafi ilmakehän hiilidioksidipitoisuuksista perustuen Neuvostoliiton etelämantereen Vostok asemalla tehtyihin jääkairauksiin. Aikajakso ~400000 vuotta.',
    v6: 'Viivagraafi ilmakehän hiilidioksidipitoisuuksista perustuen yhdistelmätutkimukseen etelmäntereen jääkairauksista. Aikajakso ~800000 vuotta.',
    v7: 'Moniakselinen viivagraafi lämpötilan ja hiilidioksidipitoisuuksien muutoksista 2 miljoonan vuoden aikana.',
    v8: 'Pinottu viivagraafi ajan suhteen maakohtaisista co2 päästöistä.',
    v9: 'Piirakkakaavio hiilidioksidipäästöistä toimialoittain.'
  }

  const [isLoaded, setLoaded] = useState(false)
  const [isEmptyData, setEmptyData] = useState(false)
  const [viewData, setViewData] = useState({});

  const params = useParams();

  console.log(viewData.stacked);

  useEffect(() => {
    setLoaded(false);
    getData()
  }, [params])

  const getData = async () => {
    const {data} = await axios.get(`/view/${params.id}`);
    if (data.length === 0) {
      setEmptyData(true);
    } else {
      setViewData(data[0]);
      setLoaded(true);
    }
  };

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
        <h1 id="n3-title">{viewData.name}</h1>
        {isLoaded &&
          <Grid container spacing={6} sx={{mb: 6}}
                direction={{xs: 'column', sm: 'column', md: 'column', lg: viewData.stacked ? "column" : "row"}}
                alignItems="center" justifyContent="center">
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!viewData.v1}>
              <Card raised={true} sx={{p: 3}}>
                <V1/>
                <Typography sx={{
                  mt: 2,
                  minHeight: 50,
                  wordWrap: 'break-word'
                }}>{viewData.v1description ?? defaultDescriptions.v1}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!viewData.v3}>
              <Card raised={true} sx={{p: 3}}>
                <V3/>
                <Typography sx={{
                  mt: 2,
                  minHeight: 50,
                  wordWrap: 'break-word'
                }}>{viewData.v3description ?? defaultDescriptions.v3}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!viewData.v5}>
              <Card raised={true} sx={{p: 3}}>
                <V5/>
                <Typography sx={{
                  mt: 2,
                  minHeight: 50,
                  wordWrap: 'break-word'
                }}>{viewData.v5description ?? defaultDescriptions.v5}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!viewData.v6}>
              <Card raised={true} sx={{p: 3}}>
                <V6/>
                <Typography sx={{
                  mt: 2,
                  minHeight: 50,
                  wordWrap: 'break-word'
                }}>{viewData.v6description ?? defaultDescriptions.v6}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!viewData.v7}>
              <Card raised={true} sx={{p: 3}}>
                <V7/>
                <Typography sx={{
                  mt: 2,
                  minHeight: 50,
                  wordWrap: 'break-word'
                }}>{viewData.v7description ?? defaultDescriptions.v7}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!viewData.v8}>
              <Card raised={true} sx={{p: 3}}>
                <V8/>
                <Typography sx={{
                  mt: 2,
                  minHeight: 50,
                  wordWrap: 'break-word'
                }}>{viewData.v8description ?? defaultDescriptions.v8}</Typography>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{width: {xs: 400, sm: 600, md: 800, lg: 1175, xl: 1500}, minHeight: 500}}
                  hidden={!viewData.v9}>
              <Card raised={true} sx={{p: 3}}>
                <V9/>
                <Typography sx={{
                  mt: 2,
                  minHeight: 50,
                  wordWrap: 'break-word'
                }}>{viewData.v9description ?? defaultDescriptions.v9}</Typography>
              </Card>
            </Grid>
          </Grid>
        }
      </>
    )
  }

}