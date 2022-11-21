import axios from "axios";
import {useState, useEffect, useRef} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut, getElementAtEvent} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function V9() {

  const baseUrl = "http://localhost:8080/";

  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [level, setLevel] = useState(1);

  const chartRef = useRef();

  useEffect(() => {
    fetchAndSetData("v9");
  }, []);

  async function fetchAndSetData(endpoint) {
    const response = await axios.get(baseUrl + endpoint);
    setData(formatData(response.data));
    setLoaded(true);
  }

  function formatData(data) {
    return {
      labels: data.map(item => item.sector),
      datasets: [{
        label: "% of emissions",
        data: data.map(item => item.emissionsPercentage),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      }],
    };
  }

  function handleClick(event) {
    if (getElementAtEvent(chartRef.current, event).length) {
      const id = getElementAtEvent(chartRef.current, event)[0].index + 1;
      let endpoint;
      if (level === 1) {
        endpoint = `v9sub?sectorId=${id}`;
        setLevel(2);
      }
      if (level === 2) {
        endpoint = `v9subsub?subSectorId=${id}`;
        setLevel(3);
      }
      console.log(fetchAndSetData(endpoint));
    }
  }


  return (
    <div>
      {loaded && <Doughnut data={data} ref={chartRef} onClick={handleClick}/>}
    </div>
  );
}

export default V9;
