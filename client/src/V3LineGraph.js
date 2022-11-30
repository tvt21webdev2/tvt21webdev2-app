import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'chartjs-adapter-luxon';


const addressA = 'http://localhost:8080/v3?type=annual';
const addressM = 'http://localhost:8080/v3?type=monthly';
const addressA1 = 'http://localhost:8080/v4?set=1';
const addressA2 = 'http://localhost:8080/v4?set=2';
const addressA3 = 'http://localhost:8080/v4?set=3';
const addressE1 = 'http://localhost:8080/v10?year=1000';


export default function V3LineGraph() {

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
          return { id: Ant3.id, year: Ant3.year, co2: Ant3.co2 }
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
        element.year = 2022-element.year
        element.year = String(element.year);
        temp.push(element)
      });
      setevolutionArray(temp)
    }).catch(error => {
      alert(error.response.data.error)
    })

    setisLoadingE1(false)

  }, [])


  console.log("evolutionArray");
  console.log(evolutionArray);


  const data = {

    datasets: [{
      label: 'maunaMonthly',
      data: maunaArrayM,
      borderColor: "rgb(255, 102, 0)",
      backgroundColor: "rgba(255, 102, 0, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 1,
    },
    {
      label: 'maunaAnnual',
      data: maunaArray,
      borderColor: "rgb(204, 0, 204)",
      backgroundColor: "rgba(204, 0, 204, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 1,
    },
    {
      label: 'ice core1',
      data: antSet1Array,
      borderColor: "rgb(102, 0, 51)",
      backgroundColor: "rgba(102, 0, 51, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 1,
    },
    {
      label: 'icecore2',
      data: antSet2Array,
      borderColor: "rgb(51, 51, 153)",
      backgroundColor: "rgba(51, 51, 153, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 1,
    },
    {
      label: 'icecore3',
      data: antSet3Array,
      borderColor: "rgb(0, 102, 204)",
      backgroundColor: "rgba(0, 102, 204, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 1,
    },

    {
      label: 'Evolution',
      data: evolutionArray,
      borderColor: "rgb(0, 102, 204)",
      backgroundColor: "rgba(0, 102, 204, 0.5)",
      parsing: {
        xAxisKey: "year",
        yAxisKey: "event",
      },
      pointRadius: 1,
    },
    

    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Co2 plot",
      },
    },
    scales: {

      x: {
        min: "1000-01",
        max: "2030-01",
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
      <div style={{ width: "1000px" }}>
        <h2>Mauna Loa and Antarctic ice cores</h2>
        <Line options={options} data={data} />
      </div>
    );
  }
}