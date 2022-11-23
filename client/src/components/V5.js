import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

const urlV5Data = 'http://localhost:8080/v5'

export default function V5() {
  const[v5Data, setV5Data] = useState([])
  const[isLoaded, setIsLoaded] = useState(false)
  const chartRef = React.useRef(null);

  const handleResetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  }

  const handlePanLeft = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.pan({x: 250}, undefined, 'default');
    }
  }

  const handlePanRight = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.pan({x: -250}, undefined, 'default');
    }
  }

  useEffect(() => {
    if (!isLoaded) {
      axios.get(urlV5Data)
      .then(response => {
        let temp = []
        response.data.forEach(element => {
          temp.push(element)
        });
        setV5Data(temp.reverse())
      })
    }
    setIsLoaded(true)
  }, [])

  console.log(v5Data);

  const data = {
    datasets: [
      {
      label: "co2",
      data: [...v5Data],
      borderColor: "rgba(210, 4, 45, 0.8)",
      backgroundColor: "rgba(210, 4, 45, 0.4)",
      parsing: {
        xAxisKey: "airAge",
        yAxisKey: "co2",
      },
      pointRadius: 2,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "V5 Vostok Ice Core CO2 measurement",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
        },
        limits: {
          x: {min: 2342, max: 417160},
          y: {min: 150, max: 350}
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'x',
        },
      }
    },
    scales: {
      x: {
        reverse: true,
        min: 2342,
        max: 417160,
        type: "linear",
        time: {
          unit: "year",
        },
        position: 'bottom',
        title: {
          display: true,
          text: "Air age in years before 1970",
        },
      },
      y: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "CO2",
        },
      },
    }
  }

  const actions = [
  ]

  if (!isLoaded) {
    return (
      <div>
        <p>Fetching data</p>
      </div>
    )
  } else {
    return (
      <div id='container'>
        <Line ref={chartRef} options={options} data={data}/>
        <div id='buttons'>
          <button onClick={handlePanLeft}>Pan left 100px</button>
          <button onClick={handleResetZoom}>Reset Zoom</button>
          <button onClick={handlePanRight}>Pan right 100px</button>
        </div>
        <p id='description'>
          Northern Hemisphere temperature reconstruction for the past 2,000 years by combining low-resolution proxies with tree-ring data, using a wavelet transform technique to achieve timescale-dependent processing of the data.
          <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005" target="_blank">Source</a>
        </p>
      </div>
    )
  }

}
