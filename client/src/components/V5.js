import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import ChartButtons from './ChartButtons';
import { resetZoom } from 'chartjs-plugin-zoom';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

const urlV5Data = 'http://localhost:8080/v5'

// const Buttons = forwardRef((props, ref) => {
//   return <ChartButtons myRef={ref}/>;
// });

export default function V5() {
  const[v5Data, setV5Data] = useState([])
  const[isLoaded, setIsLoaded] = useState(false)

  const chartRef = useRef();

  useEffect(() => {
    if (!isLoaded) {
      axios.get(urlV5Data)
      .then(response => {
        setV5Data(response.data)
      }).catch(err => {
        console.log(err);
      })
    }
    setIsLoaded(true)
  }, [])

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
      },
      title: {
        display: true,
        text: "V5 Vostok Ice Core CO2 measurement",
      },
      legend: {
        onClick: function(e, legendItem, legend) {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;
          if (ci.isDatasetVisible(index)) {
              ci.hide(index);
              legendItem.hidden = true;
          } else {
              ci.show(index);
              legendItem.hidden = false;
          }
          chartRef.current.resetZoom()
        }
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

  if (!isLoaded) {
    return (
      <div>
        <p>Fetching data</p>
      </div>
    )
  } else {
    return (
      <div id='container'>
        <Line ref={chartRef} options={options} data={data} />
        <div id='buttons'>
          <ChartButtons ref={chartRef} />
        </div>
      </div>
    )
  }

}
