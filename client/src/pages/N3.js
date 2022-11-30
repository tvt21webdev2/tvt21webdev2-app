import { CircularProgress, Grid, LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function N3() {
  const [searchParams] = useSearchParams()
  const [id, setId] = useState(null)
  const [data, setData] = useState([])
  const [isLoaded, setLoaded] = useState(false)

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

  // SEARCHPARAMS.GET DOESNT WORK PLS FIX

  const getData = async () => {
    // const { data } = await axios.get(`http://localhost:8080/view?url=${id}`);
    const url = await searchParams.get("id")
    console.log(id);
    const { data } = await axios.get(`http://localhost:8080/view?url=f8e3b55d-f9bf-4d7f-b2a1-c4c86e6d8bf9`);
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    // setId(searchParams.get("_id"))
    getData()
    // setValues(data)
    setLoaded(true)
  }, [])

  function setValues(view) {
    const viewObject = view

    console.log(viewObject);
    setStackedSelected(viewObject[0].stacked)
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
      <Grid container spacing={6} direction={stackedSelected ? "column" : {xs: "column", md: "row"}} alignItems="center" justifyContent="center">
        <Grid item xs={5}>
          <p>testi</p>
        </Grid>
        <Grid item xs={5}>
          <p>testi</p>
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
