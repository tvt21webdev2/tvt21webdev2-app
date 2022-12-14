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
const addressA1 = 'http://localhost:8080/v4?set=1';
const addressA2 = 'http://localhost:8080/v4?set=2';
const addressA3 = 'http://localhost:8080/v4?set=3';
const addressE1 = 'http://localhost:8080/v10?year=1000';


export default function V3() {

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
  const [a3DataVisible, setA3DataVisible] = useState(true)

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


    axios.get(addressA1)
      .then((response) => {
        // console.log(response.data)
        setantSet1Array(response.data.map(Ant1 => {
          return { id: Ant1.id, year: Ant1.year, co2: Ant1.co2 }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoadingA1(false)


    // console.log(addressA2);

    axios.get(addressA2)
      .then((response) => {
        // console.log(response.data)
        setantSet2Array(response.data.map(Ant2 => {
          return { id: Ant2.id, year: Ant2.year, co2: Ant2.co2 }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoadingA2(false)


    axios.get(addressA3)
      .then((response) => {
        // console.log(response.data)
        setantSet3Array(response.data.map(Ant3 => {
          return { id: Ant3.id, year: Ant3.year, co2: Ant3.co2 }
        }))
      }).catch(error => {
        alert(error.response.data.error)

      })

    setisLoadingA3(false)

    axios.get(addressE1)
      .then(response => {
        setevolutionArray(response.data.map(evo => {
          return { id: evo.id, year: String(evo.year), co2: 240, event: evo.event }
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
      showLine: false,
      parsing: {
        xAxisKey: "year",
        yAxisKey: "co2",
      },
      pointRadius: 4,
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
          if (index === 4 && ci.isDatasetVisible(4)) {
            setA3DataVisible(true)
          } else if (index === 6 && !ci.isDatasetVisible(4)) {
            setA3DataVisible(false)
          }
          chartRef.current.resetZoom()
        }
      },

      title: {
        display: false,
        text: "Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurement",
      },
      tooltip: {

        tooltipCaretsize: 0,


        callbacks: {

          beforeLabel: function (context) {
            var seeker = context.datasetIndex;
            if (seeker === 5) {
              var event = context.dataset.label;
              return "Event: ";
            }
          },


          label: function (context) {
            var seeker = context.datasetIndex;
            var content;
            let label = context.dataset.label;
            if (seeker === 5) {

              var chunks = [];
              var str = context.raw.event;
              str = str.match(/.{1,75}(?:\s|$)/g);

              str.forEach(mdmg => {
                chunks.push(mdmg)
              });

              content = chunks;

              return content;

            }
            else {
              content = context.parsed.y;

              return label + ": " + content;

            }

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
  if (isLoading || isLoadingM || isLoadingA1 || isLoadingA2 || isLoadingA3 || isLoadingE1) {
    return <div>Loading.</div>
  }
  else {
    return (
      <div id="chart3">
        <Line ref={chartRef} options={options} data={data} />
        <div id='buttons'>
          <ChartButtons ref={chartRef} />
        </div>
      </div>
    );
  }
}