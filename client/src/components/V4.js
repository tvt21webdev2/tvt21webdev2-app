import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'chartjs-adapter-luxon';
import Context from "@mui/base/TabsUnstyled/TabsContext";


const addressA = 'http://localhost:8080/v3?type=annual';
const addressM = 'http://localhost:8080/v3?type=monthly';
const addressA1 = 'http://localhost:8080/v4?set=1';
const addressA2 = 'http://localhost:8080/v4?set=2';
const addressA3 = 'http://localhost:8080/v4?set=3';
const addressE1 = 'http://localhost:8080/v10?year=1000';


export default function V4() {

  const [maunaArray, setmaunaArray] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [maunaArrayM, setmaunaArrayM] = useState([]);
  const [isLoadingM, setisLoadingM] = useState(true);
  const [antSet1Array, setantSet1Array] = useState([]);
  const [isLoadingA1, setisLoadingA1] = useState(true);
  const [antSet2Array, setantSet2Array] = useState([]);
  const [isLoadingA2, setisLoadingA2] = useState(true);
  const [antSet3Array, setantSet3Array] = useState([]);
  const [isLoadingA3, setisLoadingA3] = useState(true);
  const [evolutionArray, setevolutionArray] = useState([]);
  const [isLoadingE1, setisLoadingE1] = useState(true);

  useEffect(() => {

    console.log(addressA);

    axios.get(addressA)
      .then((response) => {
        console.log(response.data)
        setmaunaArray(response.data.map(mauna => {
          return { id: mauna.id, year: mauna.year, co2: mauna.average }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoading(false)

  }, [])


  useEffect(() => {

    console.log(addressM);

    axios.get(addressM)
      .then((response) => {
        console.log(response.data)
        setmaunaArrayM(response.data.map(maunaM => {
          return { id: maunaM.id, year: maunaM.year, co2: maunaM.average }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoadingM(false)

  }, [])

  useEffect(() => {

    console.log(addressA1);

    axios.get(addressA1)
      .then((response) => {
        console.log(response.data)
        setantSet1Array(response.data.map(Ant1 => {
          return { id: Ant1.id, year: Ant1.year, co2: Ant1.co2 }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoadingA1(false)

  }, [])


  useEffect(() => {

    console.log(addressA2);

    axios.get(addressA2)
      .then((response) => {
        console.log(response.data)
        setantSet2Array(response.data.map(Ant2 => {
          return { id: Ant2.id, year: Ant2.year, co2: Ant2.co2 }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoadingA2(false)

  }, [])


  useEffect(() => {

    console.log(addressA3);

    axios.get(addressA3)
      .then((response) => {
        console.log(response.data)
        setantSet3Array(response.data.map(Ant3 => {
          return { id: Ant3.id, year: Ant3.year, co2: Ant3.co2}
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoadingA3(false)

  }, [])
  useEffect(() => {

    console.log(addressE1);

    axios.get(addressE1)
    .then(response => {
      let temp = []
      response.data.forEach(element => {
//        element.year = 2022-element.year
        element.year = String(element.year);
        temp.push(element)
      });
      setevolutionArray(temp.map(evo => {
        return{id: evo.id, year: evo.year, co2: 240, event: evo.event}
      }))

    }).catch(error => {
      alert(error.response.data.error)
    })


    setisLoadingE1(false)

  }, [])

  const data = {

    datasets: [{
      label: 'Monthly Mauna Loa',
      data: maunaArrayM,
      borderColor: "rgb(255, 102, 0)",
      backgroundColor: "rgba(255, 102, 0, 0.3)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 2,
    },
    {
      label: 'Annual Mauna Loa',
      data: maunaArray,
      borderColor: "rgb(204, 0, 204)",
      backgroundColor: "rgba(204, 0, 204, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 2,
    },
    {
      label: 'Antarctic Ice core set 1',
      data: antSet1Array,
      borderColor: "rgb(102, 0, 51)",
      backgroundColor: "rgba(102, 0, 51, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 2,
    },
    {
      label: 'Antarctic Ice core set 2',
      data: antSet2Array,
      borderColor: "rgb(51, 51, 153)",
      backgroundColor: "rgba(51, 51, 153, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 2,
    },
    {
      label: 'Antarctic Ice core set 3',
      data: antSet3Array,
      borderColor: "rgb(0, 102, 204)",
      backgroundColor: "rgba(0, 102, 204, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 2,
    },

    {
      label: 'Human evolution and activities',
      data: evolutionArray,
      borderColor: "rgb(0, 102, 204)",
      backgroundColor: "rgba(0, 102, 204, 0.5)",
      showLine:false,
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 4,
    },
    

    ],
  };


  const options = {
    animation : false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Co2 plot",
      },
      tooltip: {

        callbacks: {

            label: function(context){
            var seeker = context.datasetIndex;
            var content;
            let label = context.dataset.label;
            if(seeker === 5) {
              content = context.raw.event;
            }
            else{
              content = context.parsed.y;
                
            }
            return label + ": " + content;
          }

        }
      }
    },
    scales: {

      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
        position: 'bottom',

      },
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "co2 levels",
        },
      },
    },
  };
  if (isLoading || isLoadingM || isLoadingA1 || isLoadingA2 || isLoadingA3|| isLoadingE1) {
    return <div>Loading.</div>
  }
  else {
    return (
      <div style={{ width: "99%" }}>
        <h2>Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurement</h2>
        <Line options={options} data={data} />
        <p id="description">
The graph displays the mean amount of carbon dioxide mixed into the athmosphere over a time period from the year 1006 to 2022 and combines it with significants events of the human history. To cover the phenomenon adequately, the graph uses annual and monthly measurement data from an observatory at Mauna Loa, annual data from a research site in East-Antarctica, as well as the events of the human history presented by the University of Southampton.
<br></br>
<a href="https://gml.noaa.gov/ccgg/trends/" target="_blank" rel="noreferrer">Mauna Loa data source</a> --- <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html" target="_blank" rel="noreferrer">description</a> 
<br></br>
<a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat" target="_blank" rel="noreferrer">Antartic data source</a> --- <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html" target="_blank" rel="noreferrer">description</a> 
<br></br>
<a href="https://www.southampton.ac.uk/~cpd/history.html" target="_blank" rel="noreferrer">Human evolution data source</a>
        </p>
      </div>
    );
  }
}