import axios from "axios";
import {useState, useEffect} from "react";
import {Line} from "react-chartjs-2";
import {Chart} from "chart.js/auto";
import Util from "../util";

function V8() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:8080/v8");
      setData(formatData(response.data));
      setLoaded(true);
    })();
  }, []);

  function formatData(data) {
    const countries = [...new Set(data.map(item => item.country))].sort();
    const years = [...new Set(data.map(item => item.year))];

    return {
      labels: years,
      datasets: countries.map(country => {
        const color = Util.generateRandomColor();
        return {
          label: country,
          data: data.filter(item => country === item.country).map(item => item.emissions),
          borderColor: color,
          backgroundColor: color,
          yAxisId: "co2",
        }
      })
    }
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        // position: "right",
      },
      title: {
        display: true,
        text: "CO2 emissions by country",
      },
    },
    scales: {
      co2: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  return (
    <div>
      {loaded &&
        <Line data={data} options={options}/>
      }
    </div>
  );
}

export default V8;
