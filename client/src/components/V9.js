import axios from "axios";
import {useState, useEffect, useRef} from "react";
import {Chart} from "chart.js/auto";
import {Doughnut, getElementAtEvent} from 'react-chartjs-2';
import Util from "../util";

function V9() {

  const baseUrl = "/";

  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [chartLevel, setChartLevel] = useState(1);
  const [sectorId, setSectorId] = useState(null);
  const [previousSectorId, setPreviousSectorId] = useState(null);
  const [sectorColors, setSectorColors] = useState(Array(17).fill().map(() => Util.generateRandomColor()));

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
      legend: {
        position: "top"
      }
    }
  }

  function handleLeftClick(event) {
    if (getElementAtEvent(chartRef.current, event).length) {
      setPreviousSectorId(sectorId);
      const elementId = getElementAtEvent(chartRef.current, event)[0].element.$context.raw.id;
      setSectorId(elementId);
      setChartLevel(chartLevel + 1)
      setLoaded(false);
    }
  }

  function handleRightClick(event) {
    event.preventDefault();
    setSectorId(previousSectorId);
    setChartLevel(chartLevel - 1);
    setLoaded(false);
  }

  return (
    <div>
      <Doughnut
        data={loaded ? data : {
          labels: [],
          datasets: []
        }}
        options={options}
        ref={chartRef}
        onClick={chartLevel < 3 ? handleLeftClick : null}
        onContextMenu={chartLevel > 1 ? handleRightClick : null}
      />
    </div>
  );
}

export default V9;
