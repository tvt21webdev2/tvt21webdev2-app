import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {useEffect, useState} from 'react';
import axios from 'axios';
import 'chartjs-adapter-luxon';
const { DateTime } = require("luxon");


const addressA = 'http://localhost:8080/v3?type=annual';
const addressM = 'http://localhost:8080/v3?type=monthly';
const addressA1 = 'http://localhost:8080/v4?set=1';
const addressA2 = 'http://localhost:8080/v4?set=2';
const addressA3 = 'http://localhost:8080/v4?set=3';


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

    useEffect(() => {

        console.log(addressA);

        axios.get(addressA)
        .then((response) => {
            console.log(response.data)
            setmaunaArray(response.data.map(mauna => {
              return{id: mauna.id, year: mauna.year, co2: mauna.average}
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
            return{id: maunaM.id, year: maunaM.year, co2: maunaM.average}
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
          return{id: Ant1.id, year: Ant1.year, co2: Ant1.co2}
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
        return{id: Ant2.id, year: Ant2.year, co2: Ant2.co2}
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
        return{id: Ant3.id, year: Ant3.year, co2: Ant3.co2}
      }))
  }).catch(error => {
      alert(error.response.data.error)
      
  })

  setisLoadingA3(false)

}, [])


    console.log("MaunaArray:");
    console.log(maunaArray);
    console.log(maunaArray[0])
    console.log(maunaArray[1])
    console.log(maunaArray[2])

    console.log("MaunaArrayM:");
    console.log(maunaArrayM);

    const co2 = maunaArray.map(m => m.co2)
    const co2M = maunaArrayM.map(m => m.co2)
    console.log("co2");
    console.log(co2);
    console.log("co2M");
    console.log(co2M);

    console.log("or a ceo");
    console.log(...co2);

    console.log("Endlesssz tests >:(");
    console.log("IceCore1");
    console.log(antSet1Array);
    console.log("IceCore2");
    console.log(antSet2Array);
    console.log("IceCore3");
    console.log(antSet3Array);


    const data = {

          datasets: [{
          label: 'maunaMonthly',
          data: maunaArrayM,      
          borderColor: "rgb(102, 0, 51)",
          backgroundColor: "rgba(102, 0, 51, 0.5)",
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
          borderColor: "rgb(204, 0, 204)",
          backgroundColor: "rgba(204, 0, 204, 0.5)",
          parsing: {
            xAxisKey: "year",
            yAxisKey: "co2",
          },
          pointRadius: 1,
        },
        {
          label: 'icecore2',
          data: antSet2Array,
          borderColor: "rgb(204, 0, 204)",
          backgroundColor: "rgba(204, 0, 204, 0.5)",
          parsing: {
            xAxisKey: "year",
            yAxisKey: "co2",
          },
          pointRadius: 1,
        },
        {
          label: 'icecore3',
          data: antSet3Array,
          borderColor: "rgb(204, 0, 204)",
          backgroundColor: "rgba(204, 0, 204, 0.5)",
          parsing: {
            xAxisKey: "year",
            yAxisKey: "co2",
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

            x: {min: "1000-01",
              max: "2030-01",
              type: 'time',
              time:{ 
                unit:'month',
            },
              position: 'bottom',
              
            },
            y: {
              type: "linear",
              position: "right",
              title: {
                display: true,
                text: "Temperature change",
              },
            },
      },
    };
if(isLoading || isLoadingM || isLoadingA1 || isLoadingA2 || isLoadingA3){
  return <div>Loading.</div>
}
else{
    return (
      <div style={{ width: "1000px" }}>
        <h1>Mauna Loa/Aloha</h1>
        <Line options={options} data={data} />
      </div>
    );
}
  }