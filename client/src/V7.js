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
      let jtn = []
      response.data.forEach(element => {
        jtn.push(element)
      });
      setV7Data(jtn)
    }).catch(err => {
      console.log(err);
    })

    axios.get("http://localhost:8080/v10")
    .then(response => {
      let jtn = []
      response.data.forEach(element => {
        jtn.push(element)
      });
      setV10Data(jtn)
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
        yAxisID: 'y',
      },

      {
        label: "Temperature",
        data: v7Data,
        parsing: {
          xAxisKey: "yearBp",
          yAxisKey: "tempChange",
        },
        yAxisID: 'temp',
      },

      {
        label: "Human activities",
        data: v10Data,
        parsing: {
          xAxisKey:"year",
          yAxisKey: "event",
        }
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
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
          position: 'left',
          text: "years (bp)"
        } 
      },
      
      y: {
        title: {
          type: 'linear',
          display: true,
          position: 'right',
          text: "temperature"
        } 
      },
      y1: {
        title: {
          type: 'linear',
          display: true,
          position: 'right',
          text: "co2"
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