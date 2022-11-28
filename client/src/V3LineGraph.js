import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {useEffect, useState} from 'react';
import axios from 'axios';


const addressA = 'http://localhost:8080/v3?type=annual';
const addressM = 'http://localhost:8080/v3?type=monthly';


export default function V3LineGraph() {

    const [maunaArray, setmaunaArray] = useState([]); 
    const [isLoading, setisLoading] = useState(true);
    const [maunaArrayM, setmaunaArrayM] = useState([]); 
    const [isLoadingM, setisLoadingM] = useState(true);

    useEffect(() => {

        console.log(addressA);

        axios.get(addressA)
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

      console.log(addressM);

      axios.get(addressM)
      .then((response) => {
          console.log(response.data)
          setmaunaArrayM(response.data.map(maunaM => {
            return{year: maunaM.year, co2: maunaM.average}
          }))
      }).catch(error => {
          alert(error.response.data.error)
          
      })

      setisLoadingM(false)

  }, [])


    console.log("MaunaArray:");
    console.log(maunaArray);
    console.log(maunaArray[0])
    console.log(maunaArray[1])
    console.log(maunaArray[2])

    const co2 = maunaArray.map(m => m.co2)
    const co2M = maunaArrayM.map(m => m.co2)
    console.log("co2");
    console.log(co2);
    console.log("co2M");
    console.log(co2M);

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
          label: 'maunaMonthly',
          data: [...co2M],
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
if(isLoading || isLoadingM){
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