import { Card, CircularProgress, Grid, LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import V1 from '../components/V1'
import V5 from '../components/V5'
import V8 from '../components/V8'
import V9 from '../components/V9'

export default function N3() {
  const [searchParams] = useSearchParams()
  // const [id, setId] = useState(null)
  const [viewData, setViewData] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  const [stackedSelected, setStackedSelected] = useState(false)
  const [description, setDescription] = useState("Testi description")

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


  const getData = async () => {
    const id = searchParams.get("id")
    const { data } = await axios.get(`http://localhost:8080/view?url=${id}`);
    setViewData(data);
    setValues(data)
  };

  useEffect(() => { 
    getData()
    setLoaded(true)
  }, [])

  function setValues(view) {
    const viewObject = view[0]

    setStackedSelected(viewObject.stacked)
    setDescription(viewObject.description)

    setV1Selected(viewObject.v1)
    setV3Selected(viewObject.v3)
    setV4Selected(viewObject.v4)
    setV5Selected(viewObject.v5)
    setV6Selected(viewObject.v6)
    setV7Selected(viewObject.v7)
    setV8Selected(viewObject.v8)
    setV9Selected(viewObject.v9)

    setV1Description(viewObject.v1description)
    setV3Description(viewObject.v3description)
    setV4Description(viewObject.v4description)
    setV5Description(viewObject.v5description)
    setV6Description(viewObject.v6description)
    setV7Description(viewObject.v7description)
    setV8Description(viewObject.v8description)
    setV9Description(viewObject.v9description)
  }
  
  if (!isLoaded) {
    return <LinearProgress color="secondary" sx={{height: 15}} />
  } else {
    return (
      <Grid container spacing={6} sx={{mt: 1, mb: 6}}  direction={stackedSelected ? "column" : "row"} alignItems="center" justifyContent="center">
        <Grid item xs={5} sx={{width: 1000}} hidden={!v1Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V1 />
            <Typography sx={{mt: 2}}>{v1Description}</Typography>
          </Card>
        </Grid>
        <Grid item xs={5} sx={{width: 1000}} hidden={!v3Selected}>
          <Card raised={true} sx={{p: 3}}>
            {/* <V3 /> */}
          </Card>
        </Grid>
        <Grid item xs={5} sx={{width: 1000}} hidden={!v4Selected}>
          <Card raised={true} sx={{p: 3}}>
            {/* <V4 /> */}
          </Card>
        </Grid>
        <Grid item xs={5} sx={{width: 1000}} hidden={!v5Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V5 />
          </Card>
        </Grid>
        <Grid item xs={5} sx={{width: 1000}} hidden={!v6Selected}>
          <Card raised={true} sx={{p: 3}}>
            {/* <V6 /> */}
          </Card>
        </Grid>
        <Grid item xs={5} sx={{width: 1000}} hidden={!v7Selected}>
          <Card raised={true} sx={{p: 3}}>
            {/* <V7 /> */}
          </Card>
        </Grid>
        <Grid item xs={5} sx={{width: 1000}} hidden={!v8Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V8 />
          </Card>
        </Grid>
        <Grid item xs={5} sx={{width: 800}} hidden={!v9Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V9 />
          </Card>
        </Grid>
      </Grid>
    )
  }
}

// {
//   "id": 29,
//   "userId": 1,
//   "url": "4cd61d4d-61c5-4576-9e47-1b205f906abf",
//   "v1": false,
//   "v2": false,
//   "v3": false,
//   "v4": false,
//   "v5": false,
//   "v6": false,
//   "v7": false,
//   "v8": false,
//   "v9": false,
//   "v10": false,
//   "v1description": null,
//   "v3description": null,
//   "v4description": null,
//   "v5description": null,
//   "v6description": null,
//   "v7description": null,
//   "v8description": null,
//   "v9description": null,
//   "description": "Testi description",
//   "stacked": false
// }
