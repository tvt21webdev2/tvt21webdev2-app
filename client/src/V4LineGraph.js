/*
import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {useEffect, useState} from 'react';
import axios from 'axios';


const addressM = 'http://localhost:8080/v3?type=annual';
const addressA1 = 'http://localhost:8080/v4?set=1';
const addressA2 = 'http://localhost:8080/v4?set=2';
const addressA3 = 'http://localhost:8080/v4?set=3';


export default function V4LineGraph() {

    const [maunaArray, setmaunaArray] = useState([]); 
    const [isLoading, setisLoading] = useState(true);
    const [antSet1Array, setantSet1Array] = useState([]); 
    const [isLoadingA1, setisLoadingA1] = useState(true);
    const [antSet2Array, setantSet2Array] = useState([]); 
    const [isLoadingA2, setisLoadingA2] = useState(true);
    const [antSet3Array, setantSet3Array] = useState([]); 
    const [isLoadingA3, setisLoadingA3] = useState(true);

    useEffect(() => {

        console.log(addressM);

        axios.get(addressM)
        .then((response) => {
            console.log(response.data)
            setmaunaArray(response.data.map(mauna => {
              return{year: mauna.year, co2: mauna.average}
            }))
        }).catch(error => {
            alert(error.response.data.error)
            
        })

        setisLoading(false)

    }, [])


    useEffect(() => {

      console.log(addressA1);

      axios.get(addressA1)
      .then((response) => {
          console.log(response.data)
          setantSet1Array(response.data.map(Ant1 => {
            return{year: Ant1.year, co2: Ant1.co2}
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
          return{year: Ant2.year, co2: Ant2.co2}
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
          return{year: Ant3.year, co2: Ant3.co2}
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

    const co2 = maunaArray.map(m => m.co2)
    //testing, therefore almost resting
    const co2A1 = antSet1Array.map(a => a.co2)
    const co2A2 = antSet2Array.map(a => a.co2)
    const co2A3 = antSet3Array.map(a => a.co2)
    console.log("co2");
    console.log(co2);
    console.log("co2A1");
    console.log(co2A1);
    console.log("co2A2");
    console.log(co2A2);
    console.log("co2A3");
    console.log(co2A3);


    console.log("or a ceo");
    console.log(...co2);
    const data = {
          labels: maunaArray.map(m => m.year),
          datasets: [{
          label: 'maunaAnnual',
          data: [...co2],      
          borderColor: "rgb(102, 0, 51)",
          backgroundColor: "rgba(102, 0, 51, 0.5)",
          yAxisID: "co2",
          parsing: {
            xAxisKey: "Year",
            yAxisKey: "co2",
          },
          pointRadius: 1,
        },
        {
          label: 'set1',
          data: [...co2A1],
          borderColor: "rgb(204, 0, 204)",
          backgroundColor: "rgba(204, 0, 204, 0.5)",
          yAxisID: "co2",
          parsing: {
            yAxisKey: "co2",
          },
          pointRadius: 1,
        },
        {
            label: 'set2',
            data: [...co2A2],
            borderColor: "rgb(204, 0, 204)",
            backgroundColor: "rgba(204, 0, 204, 0.5)",
            yAxisID: "co2",
            parsing: {
              yAxisKey: "co2",
            },
            pointRadius: 1,
          },
          {
            label: 'set3',
            data: [...co2A3],
            borderColor: "rgb(204, 0, 204)",
            backgroundColor: "rgba(204, 0, 204, 0.5)",
            yAxisID: "co2",
            parsing: {
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
        co2: {
          max: 450,
          type: "linear",
          display: true,
          position: "right",
        },
      },
    };
if(isLoading || isLoadingA1 || isLoadingA2 || isLoadingA3){
  return <div>Loading.</div>
}
else{
    return (
      <div style={{ width: "1000px" }}>
        <h1>Ice cores and Hoses with an H...</h1>
        <Line options={options} data={data} />
      </div>
    );
}
  }
  */