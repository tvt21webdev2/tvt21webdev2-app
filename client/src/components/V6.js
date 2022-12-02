import axios from 'axios';
import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart} from 'chart.js/auto';


function V6() {
  const [v6Data, setV6Data] = useState([])
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/v6")
    .then(response => {
      setV6Data(response.data)
    }).catch(err => {
      console.log(err);
    })
    setLoaded(true)
  }, []);

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
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point:{
          radius: 0
      }},
    plugins: {
      title: {
        display: true,
        text: "Ice core 800k year CO2 measurements",
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
          text: "CO2"
        } 
      },
  }
};

  return (
    <div>
      {loaded && <Line options={options} data={data} />}
    </div>
  );
}

export default V6;
