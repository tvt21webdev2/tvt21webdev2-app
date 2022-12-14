import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import 'chartjs-adapter-luxon';
import ChartButtons from './ChartButtons';
import zoomPlugin from 'chartjs-plugin-zoom';
import '../styles/v3.css';

Chart.register(zoomPlugin);

const addressA = 'http://localhost:8080/v3?type=annual';
const addressM = 'http://localhost:8080/v3?type=monthly';



export default function V3() {

  const [maunaArray, setmaunaArray] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [maunaArrayM, setmaunaArrayM] = useState([]);
  const [isLoadingM, setisLoadingM] = useState(true);

  const [vMonthlyDataVisible, setMonthlyDataVisible] = useState(true)

  const chartRef = useRef();

  useEffect(() => {

    // console.log(addressA);

    axios.get(addressA)
      .then((response) => {
        // console.log(response.data)
        setmaunaArray(response.data.map(mauna => {
          return { id: mauna.id, year: mauna.year, co2: mauna.average }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoading(false)

    axios.get(addressM)
      .then((response) => {
        // console.log(response.data)
        setmaunaArrayM(response.data.map(maunaM => {
          return { id: maunaM.id, year: maunaM.year, co2: maunaM.average }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoadingM(false)

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


    ],
  };


  const options = {
    //maintainAspectRatio: false,
    animation: false,
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
        },
        limits: {
          x:
          {
            min: new Date('1000-01-01T00:00:00').valueOf(),
            max: new Date('2022-09-01T00:00:00').valueOf()
          },
          y: { min: 240, max: 440 }
        },
        zoom: {
          pinch: {
            enabled: true
          },
          wheel: {
            enabled: true,
          },
          mode: 'x',
        },
      },

      legend: {
        onClick: function (e, legendItem, legend) {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;
          if (ci.isDatasetVisible(index)) {
            ci.hide(index);
            legendItem.hidden = true;
          } else {
            ci.show(index);
            legendItem.hidden = false;
          }
          if (index === 0 && ci.isDatasetVisible(0)) {
            setMonthlyDataVisible(true)
          } else if (index === 0 && !ci.isDatasetVisible(0)) {
            setMonthlyDataVisible(false)
          }
          chartRef.current.resetZoom()
        }
      },

      title: {
        display: false,
        text: "Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurement",
      },
    },
    scales: {

      x: {
        type: 'time',
        time: {
            unit: vMonthlyDataVisible ? "month" : "year",
        },
        position: 'bottom',
        title:{
          display: true,
          text: "date",
        }

      },
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "CO2 levels",
        },
      },
    }
  };
  if (isLoading || isLoadingM) {
    return <div>Loading.</div>
  }
  else {
    return (
      <div id="chart4">
        <Line ref={chartRef} options={options} data={data} />
        <div id='buttons'>
          <ChartButtons ref={chartRef} />
        </div>
      </div>
    );
  }
}