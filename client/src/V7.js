import axios from 'axios';
import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart} from 'chart.js/auto';


function V7() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:8080/v7");
      setData(formatData(response.data));
      setLoaded(true);
    })();
  }, []);
  
  function formatData(data) {
    const years = [...new Set(data.map(item => item.yearBp))];
    const temp = [...new Set(data.map(item => item.tempChange))];

    return {
      labels: years,
      datasets: [
        {
          label: "temperature change",
          data: temp,
          yAxisID: "temperature change"
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
        text: "Evolution of global temperature over the past two million years",
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "temperature"
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

export default V7;