import axios from "axios";
import {useState, useEffect, useRef} from "react";
import {Chart} from "chart.js/auto";
import {Doughnut, getElementAtEvent} from 'react-chartjs-2';
import generateRandomColor from "./utils";

function V9() {

  const baseUrl = "http://localhost:8080/";

  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [chartLevel, setChartLevel] = useState(1);
  const [sectorId, setSectorId] = useState(null);
  const [previousSectorId, setPreviousSectorId] = useState(null);
  const [sectorColors, setSectorColors] = useState(Array(17).fill().map(() => generateRandomColor()));

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
    const labels = data.map(item => item.label);

    return {
      labels: labels,
      datasets: [{
        label: "% of emissions",
        data: data.map(item => {
            return {value: item.emissionsPercentage, id: item.id}
          }
        ),
        backgroundColor: sectorColors,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1
      }],
    };
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: "CO2 emissions by sectors"
      },
      legend: {
        position: "top"
      }
    }
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
          options={options}
          ref={chartRef}
          onClick={chartLevel < 3 ? handleClick : null}
          onContextMenu={chartLevel > 1 ? handleClick : null}
        />}
    </div>
  );
}

export default V9;
