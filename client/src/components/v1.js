import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { DateTime } from 'luxon'

const urlAnnualGlobal = 'http://localhost:8080/v1?type=annual&location=global'
const urlAnnualNorthern = 'http://localhost:8080/v1?type=annual&location=northern'
const urlAnnualSouthern = 'http://localhost:8080/v1?type=annual&location=southern'
const urlMonthlyGlobal = 'http://localhost:8080/v1?type=monthly&location=global'
const urlMonthlyNorthern = 'http://localhost:8080/v1?type=monthly&location=northern'
const urlMonthlySouthern = 'http://localhost:8080/v1?type=monthly&location=southern'

export default function V1() {
  const [v1DataAnnualGlobal, setV1DataAnnualGlobal] = useState([])
  const [v1DataAnnualNorthern, setV1DataAnnualNorthern] = useState([])
  const [v1DataAnnualSouthern, setV1DataAnnualSouthern] = useState([])
  const [v1DataMonthlyGlobal, setV1DataMonthlyGlobal] = useState([])
  const [v1DataMonthlyNorthern, setV1DataMonthlyNorthern] = useState([])
  const [v1DataMonthlySouthern, setV1DataMonthlySouthern] = useState([])

  useEffect(() => {
    axios.get(urlAnnualGlobal)
    .then(response => {
      let temp = []
      response.data.forEach(element => {
        temp.push(element)
      });
      setV1DataAnnualGlobal(temp)
    }).catch(err => {
      console.log(err);
    })

    axios.get(urlAnnualNorthern)
    .then(response => {
      let temp = []
      response.data.forEach(element => {
        temp.push(element)
      });
      setV1DataAnnualNorthern(temp)
    }).catch(err => {
      console.log(err);
    })

    axios.get(urlAnnualSouthern)
    .then(response => {
      let temp = []
      response.data.forEach(element => {
        temp.push(element)
      });
      setV1DataAnnualSouthern(temp)
    }).catch(err => {
      console.log(err);
    })

    axios.get(urlMonthlyGlobal)
    .then(response => {
      let temp = []
      response.data.forEach(element => {
        temp.push(element)
      });
      setV1DataMonthlyGlobal(temp)
      console.log(temp);
    }).catch(err => {
      console.log(err);
    })

    axios.get(urlMonthlyNorthern)
    .then(response => {
      let temp = []
      response.data.forEach(element => {
        temp.push(element)
      });
      setV1DataMonthlyNorthern(temp)
    }).catch(err => {
      console.log(err);
    })

    axios.get(urlMonthlySouthern)
    .then(response => {
      let temp = []
      response.data.forEach(element => {
        temp.push(element)
      });
      setV1DataMonthlySouthern(temp)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  const data = {
    datasets: [
      // {
      //   label: "Annual global",
      //   data: [...v1DataAnnualGlobal],
      //   borderColor: "rgb(0, 0, 0)",
      //   backgroundColor: "rgba(0, 0, 0, 0.5)",
      //   xAxisID: "x",
      //   yAxisID: "y",
      //   parsing: {
      //     xAxisKey: "year",
      //     yAxisKey: "anomaly",
      //   },
      //   pointRadius: 1,
      // },
      {
        label: "Monthly global",
        data: [...v1DataMonthlyGlobal],
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        xAxisID: "xAxis",
        yAxisID: "yAxis",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 1,
      },
      // {
      //   label: "Annual northern",
      //   data: [...v1DataAnnualNorthern],
      //   borderColor: "rgb(255, 0, 0)",
      //   backgroundColor: "rgba(255, 0, 0, 0.3)",
      //   xAxisID: "x",
      //   yAxisID: "y",
      //   parsing: {
      //     xAxisKey: "year",
      //     yAxisKey: "anomaly",
      //   },
      //   pointRadius: 1,
      // },
      // {
      //   label: "Monthly northern",
      //   data: [...v1DataMonthlyNorthern],
      //   borderColor: "rgb(255, 0, 0)",
      //   backgroundColor: "rgba(255, 0, 0, 0.3)",
      //   xAxisID: "x",
      //   yAxisID: "y",
      //   parsing: {
      //     xAxisKey: "year",
      //     yAxisKey: "anomaly",
      //   },
      //   pointRadius: 1,
      // },
      // {
      //   label: "Annual southern",
      //   data: [...v1DataAnnualSouthern],
      //   borderColor: "rgb(0, 0, 255)",
      //   backgroundColor: "rgba(0, 0, 255, 0.3)",
      //   xAxisID: "x",
      //   yAxisID: "y",
      //   parsing: {
      //     xAxisKey: "year",
      //     yAxisKey: "anomaly",
      //   },
      //   pointRadius: 1,
      // },
      // {
      //   label: "Monthly southern",
      //   data: [...v1DataMonthlySouthern],
      //   borderColor: "rgb(0, 0, 255)",
      //   backgroundColor: "rgba(0, 0, 255, 0.3)",
      //   xAxisID: "x",
      //   yAxisID: "y",
      //   parsing: {
      //     xAxisKey: "year",
      //     yAxisKey: "anomaly",
      //   },
      //   pointRadius: 1,
      // },
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
        text: "Demo Temperature Change Plot",
      },
    },
    scales: {
      yAxis: {
        type: "linear",
        display: true,
        position: "right",
      },
      xAxis: [ {
        display: true,
        type: 'time',
        time: {
          parser: 'YYYY-MM',
          tooltipFormat: 'YYYY MMM',
          unit: 'year',
          unitStepSize: 1,
          displayFormats: {
            'day': 'MM/YYYY'
          }
        }
      }
    ],
    },
  };

  return (
    <div>
      <div style={{ width: "1000px" }}>
        <Line options={options} data={data}/>
      </div>
    </div>
  )
}
