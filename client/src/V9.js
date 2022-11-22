import axios from "axios";
import {useState, useEffect, useRef} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut, getElementAtEvent} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function V9() {

  const baseUrl = "http://localhost:8080/";

  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [chartLevel, setChartLevel] = useState(1);
  const [sectorId, setSectorId] = useState(null);
  const [previousSectorId, setPreviousSectorId] = useState(null);

  const chartRef = useRef();

  useEffect(() => {
    (async function () {
      const endpoint = getEndpoint();
      const response = await axios.get(baseUrl + endpoint);
      setData(formatData(response.data));
      setLoaded(true);
    })();
  }, [chartLevel]);

  function getEndpoint() {
    if (chartLevel === 1) {
      return "v9";
    } else if (chartLevel === 2) {
      return `v9sub?belongsTo=${sectorId}`
    } else if (chartLevel === 3) {
      return `v9subsub?belongsTo=${sectorId}`
    }
  }

  function formatData(data) {
    return {
      labels: data.map(item => item.label),
      datasets: [{
        label: "% of emissions",
        data: data.map(item => {
            return {value: item.emissionsPercentage, id: item.id}
          }
        ),
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
    if (getElementAtEvent(chartRef.current, event).length && event.type === "click") {
      setPreviousSectorId(sectorId);
      const elementId = getElementAtEvent(chartRef.current, event)[0].element.$context.raw.id;
      setSectorId(elementId);
      setChartLevel(chartLevel + 1)
      setLoaded(false);
    }
    if (event.type === "contextmenu") {
      event.preventDefault();
      setSectorId(previousSectorId);
      setChartLevel(chartLevel - 1);
      setLoaded(false);
    }
  }

  return (
    <div>
      {loaded &&
        <Doughnut
          data={data}
          options={{responsive: true, maintainAspectRatio: true}}
          ref={chartRef}
          onClick={chartLevel < 3 ? handleClick : null}
          onContextMenu={chartLevel > 1 ? handleClick : null}
        />}
    </div>
  );
}

export default V9;
