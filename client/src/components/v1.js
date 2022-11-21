import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
// import { DateTime } from 'luxon'

const urlAnnualGlobal = 'http://localhost:8080/v1?type=annual&location=global'
const urlAnnualNorthern = 'http://localhost:8080/v1?type=annual&location=northern'
const urlAnnualSouthern = 'http://localhost:8080/v1?type=annual&location=southern'
const urlMonthlyGlobal = 'http://localhost:8080/v1?type=monthly&location=global'
const urlMonthlyNorthern = 'http://localhost:8080/v1?type=monthly&location=northern'
const urlMonthlySouthern = 'http://localhost:8080/v1?type=monthly&location=southern'
const urlV2Data = 'http://localhost:8080/v2'

export default function V1() {
  const [v1DataAnnualGlobal, setV1DataAnnualGlobal] = useState([])
  const [v1DataAnnualNorthern, setV1DataAnnualNorthern] = useState([])
  const [v1DataAnnualSouthern, setV1DataAnnualSouthern] = useState([])
  const [v1DataMonthlyGlobal, setV1DataMonthlyGlobal] = useState([])
  const [v1DataMonthlyNorthern, setV1DataMonthlyNorthern] = useState([])
  const [v1DataMonthlySouthern, setV1DataMonthlySouthern] = useState([])
  const [v2Data, setV2Data] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      axios.get(urlAnnualGlobal)
      .then(response => {
        let temp = []
        response.data.forEach(element => {
          let parsed = new Date(element.year).toDateString().split(' ')
          element.parsedDate = parsed[1] + ' ' + parsed[3];
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
          let parsed = new Date(element.year).toDateString().split(' ')
          element.parsedDate = parsed[1] + ' ' + parsed[3]
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
          let parsed = new Date(element.year).toDateString().split(' ')
          element.parsedDate = parsed[1] + ' ' + parsed[3]
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
          let parsed = new Date(element.year).toDateString().split(' ')
          element.parsedDate = parsed[1] + ' ' + parsed[3]
          temp.push(element)
        });
        setV1DataMonthlyGlobal(temp)
      }).catch(err => {
        console.log(err);
      })

      axios.get(urlMonthlyNorthern)
      .then(response => {
        let temp = []
        response.data.forEach(element => {
          let parsed = new Date(element.year).toDateString().split(' ')
          element.parsedDate = parsed[1] + ' ' + parsed[3]
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
          let parsed = new Date(element.year).toDateString().split(' ')
          element.parsedDate = parsed[1] + ' ' + parsed[3]
          temp.push(element)
        });
        setV1DataMonthlySouthern(temp)
      }).catch(err => {
        console.log(err);
      })

      axios.get(urlV2Data)
      .then(response => {
        let temp = []
        response.data.forEach(element => {
          // let parsed = new Date(element.year).toDateString().split(' ')
          // element.parsedDate = parsed[1] + ' ' + parsed[3]
          temp.push(element)
        });
        setV2Data(temp)
      }).catch(err => {
        console.log(err);
      })
      
      setIsLoaded(true)
    }
  }, [])
  
  console.log(v2Data);
  
  const data = {
    datasets: [
      {
        label: "Monthly global",
        data: v1DataMonthlyGlobal,
        borderColor: "rgba(0, 0, 0, 0.5)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        // xAxisID: "date",
        // yAxisID: "temp",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Monthly northern hemisphere",
        data: v1DataMonthlyNorthern,
        borderColor: "rgba(0, 0, 255, 0.5)",
        backgroundColor: "rgba(0, 0, 255, 0.4)",
        // xAxisID: "date",
        // yAxisID: "temp",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Monthly southern hemisphere",
        data: v1DataMonthlySouthern,
        borderColor: "rgba(255, 0, 0, 0.5)",
        backgroundColor: "rgba(255, 0, 0, 0.4)",
        // xAxisID: "date",
        // yAxisID: "temp",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Annual global",
        data: v1DataAnnualGlobal,
        borderColor: "rgba(0, 0, 0, 0.3)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        // xAxisID: "date",
        // yAxisID: "temp",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Annual northern hemisphere",
        data: v1DataAnnualNorthern,
        borderColor: "rgba(0, 0, 255, 0.5)",
        backgroundColor: "rgba(0, 0, 255, 0.4)",
        // xAxisID: "date",
        // yAxisID: "temp",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Annual southern hemisphere",
        data: v1DataAnnualSouthern,
        borderColor: "rgba(255, 0, 0, 0.5)",
        backgroundColor: "rgba(255, 0, 0, 0.4)",
        // xAxisID: "date",
        // yAxisID: "temp",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "2000 year temperatures",
        data: v2Data,
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        // xAxisID: "xdate2k",
        // yAxisID: "temp2k",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        }
      },
      title: {
        display: true,
        text: "Demo Temperature Change Plot",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "year",
        },
        position: 'bottom',
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Temperature change",
        },
      },
      // y: {
      //   type: "linear",
      //   display: true,
      //   position: "right",
      //   title: {
      //     display: true,
      //     text: "Temperature change",
      //   },
      // },
      // x: {
      //   // type: "linear",
      //   display: true,
      //   position: 'bottom',
      //   title: {
      //     display: true,
      //     text: "Date",
      //   },
      // },
    },
  };

  if (!isLoaded) {
    return (
      <div>
        <p>Fetching data</p>
      </div>
    )
  } else {
    return (
      <div style={{ width: "1000px" }}>
        <Line options={options} data={data}/>
      </div>
    )
  }

}
