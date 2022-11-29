import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import zoomPlugin from 'chartjs-plugin-zoom';
import { DateTime } from 'luxon';
import '../styles/v1.css';

Chart.register(zoomPlugin);

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
  const [v2DataVisible, setV2DataVisible] = useState(true)
  
  const chartRef = React.useRef(null);

  const handleResetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  }

  const handleZoomIn = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.zoom({x: 1.1});
    }
  }

  const handleZoomOut = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.zoom({x: 0.9});
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

      axios.get(urlV2Data)
      .then(response => {
        let temp = []
        response.data.forEach(element => {
          if (element.year < 10)
            element.year = "000" + element.year
          else if (element.year < 100)
            element.year = "00" + element.year
          else if (element.year < 1000)
            element.year = "0" + element.year

          element.year = element.year + "-01"
          temp.push(element)
        });
        setV2Data(temp)
      }).catch(err => {
        console.log(err);
      })
      
      setIsLoaded(true)
    }
  }, [])
  
  const data = {
    datasets: [
      {
        label: "Monthly global",
        data: v1DataMonthlyGlobal,
        borderColor: "rgba(46, 49, 49, 0.8)",
        backgroundColor: "rgba(46, 49, 49, 0.5)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Monthly northern hemisphere",
        data: v1DataMonthlyNorthern,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Monthly southern hemisphere",
        data: v1DataMonthlySouthern,
        borderColor: "rgba(150, 4, 45, 0.8)",
        backgroundColor: "rgba(150, 4, 45, 0.4)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Annual global",
        data: v1DataAnnualGlobal,
        borderColor: "rgba(46, 49, 49, 0.8)",
        backgroundColor: "rgba(46, 49, 49, 0.5)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Annual northern hemisphere",
        data: v1DataAnnualNorthern,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "Annual southern hemisphere",
        data: v1DataAnnualSouthern,
        borderColor: "rgba(150, 4, 45, 0.8)",
        backgroundColor: "rgba(150, 4, 45, 0.4)",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "anomaly",
        },
        pointRadius: 2,
      },
      {
        label: "2000 year temperatures",
        data: v2Data,
        borderColor: "rgba(210, 4, 45, 0.8)",
        backgroundColor: "rgba(210, 4, 45, 0.4)",
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
    options: {
      onClick: handleResetZoom(),
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
        },
        limits: {
          x: {
            min: v2DataVisible ? new Date('0001-01-01T00:00:00').valueOf() : new Date('1850-01-01T00:00:00').valueOf(),
            max: new Date('2022-09-01T00:00:00').valueOf()
          },
          y: {min:-2, max: 2}
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'x',
        }
      },
      title: {
        display: true,
        text: "Global historical surface temperature anomalies from January 1850 onwards and Northern Hemisphere 2,000-year temperature reconstruction",
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
          if (index === 6 && ci.isDatasetVisible(6)) {
            setV2DataVisible(true)
          } else if (index === 6 && !ci.isDatasetVisible(6)) {
            setV2DataVisible(false)
          }
          handleResetZoom()
        }
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: v2DataVisible ? "year" : "month",
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
      <div id='container'>
        <Line ref={chartRef} options={options} data={data} />
        <div id='buttons'>
          <button onClick={handlePanLeft}>Pan left</button>
          <button onClick={handleZoomOut}>Zoom out</button>
          <button onClick={handleResetZoom}>Reset Zoom</button>
          <button onClick={handleZoomIn}>Zoom in</button>
          <button onClick={handlePanRight}>Pan right</button>
        </div>
        <p id='description'>
          The gridded data are a blend of the CRUTEM5 land-surface air temperature dataset and the HadSST4 sea-surface temperature (SST) dataset. The dataset is presented in two ways. First, as with the previous version of the data set, HadCRUT4, data are averaged onto a regular grid with no value provided in grid cells containing no observations. Second, a statistical method has been used to extend coverage in data sparse areas and provide a more globally complete data set.
          <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/" target="_blank" rel="noreferrer">Source</a>
        </p>
      </div>
    )
  }

}
