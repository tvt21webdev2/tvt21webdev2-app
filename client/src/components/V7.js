import axios from 'axios';
import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart} from 'chart.js/auto';


function V7() {
  const [v6Data, setV6Data] = useState([])
  const [v7Data, setV7Data] = useState([])
  const [v10Data, setV10Data] = useState([])
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/v6")
    .then(response => {
      let q = []
      response.data.forEach(element => {
        q.push(element)
      });
      setV6Data(q)
    }).catch(err => {
      console.log(err);
    })

    axios.get("http://localhost:8080/v7")
    .then(response => {
      let q = []
      response.data.forEach(element => {
        q.push(element)
      });
      setV7Data(q)
    }).catch(err => {
      console.log(err);
    })

    axios.get("http://localhost:8080/v10")
    .then(response => {
      let q = []
      response.data.forEach(element => {
        q.push(element)
      });
      setV10Data(q)
    }).catch(err => {
      console.log(err);
    })

    setLoaded(true)
  
  }, [])
  
  
  const data = {
    datasets: [
      {
        label: "CO2 ppm",
        data: v6Data,
        parsing: {
          xAxisKey: "gasAge",
          yAxisKey: "co2",
        },
        yAxisID: 'y1',
      },

      {
        label: "Temperature",
        data: v7Data,
        parsing: {
          xAxisKey: "yearBp",
          yAxisKey: "tempChange",
        },
      },

      {
        label: "Human event",
        data: v10Data,
        parsing: {
          xAxisKey: "year",
          yAxisKey: "event",
        },
        yAxisID: 'y2',
      }
    ]
  }

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    maintainAspectRatio: true,
    elements: {
      point:{
          radius: 0
      }},
    plugins: {
      title: {
        display: true,
        text: "Ice core 800k year composite study CO2 measurements and Evolution of global temperature over the past two million years and Human evolution and activities",
      }
    },
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: "years"
        } 
      },
      
      y: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: "temperature"
        },
        grid: {
          drawOnChartArea: false,
        }, 
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: "co2 ppm"
        } 
      },

      y2: {
        display: false,
        position: 'left',
        title: {
          display: true,
          text: "co2 ppm"
        } 
      }
    }
  };

  return (
    <div>
      {loaded && <Line options={options} data={data} />}
    </div>
  );
}

export default V7;