import axios from 'axios';
import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart} from 'chart.js/auto';


function V6() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:8080/v6");
      setData(formatData(response.data));
      setLoaded(true);
    })();
  }, []);
  
  function formatData(data) {
    const years = [...new Set(data.map(item => item.gasAge))];
    const co2 = [...new Set(data.map(item => item.co2))];

    return {
      labels: years,
      datasets: [
        {
          label: "CO2 ppm",
          data: co2,
          yAxisID: "co2"
        }
      ],
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: "Ice core 800k year CO2 measurements",
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "CO2"
        } 
      },
      x: {
        title: {
          display: true,
          text: "years (before present)"
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

export default V6;