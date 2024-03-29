//Import hooks
import { useContext} from "react";
import { AppContext } from "../App";

// Libs/Utils
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DietChart = () => {
  // Load dinosaurs data from api context
  const {dinosaursData} = useContext(AppContext);

  const calculateDistribution = () => {
    // Extract the information about the diet types
    const diets = dinosaursData.map((dinosaur) => dinosaur.diet);
  
    // Count occurrences of each diet type
    const dietCounts = diets.reduce((acc, diet) => {
      acc[diet] = (acc[diet] || 0) + 1;
      return acc;
    }, {});
  
    // Calculate percentage for each diet type
    const totalDinosaurs = diets.length;
    const dietDistribution = Object.entries(dietCounts).map(([diet, count]) => ({
      label: diet,
      value: parseFloat(((count / totalDinosaurs) * 100).toFixed(2)),
    }));
    return dietDistribution;
  };

  const dataset = calculateDistribution();

  // Set a minimum height for the legend based on screen size
  const legendMinHeightPlugin = {
    id: "legendMinHeight",
    beforeInit: function (chart) {
      const screenWidth = window.innerWidth;
      const legendMinHeight = screenWidth < 1024 ? 10 : screenWidth >= 1024 && screenWidth < 1536 ? 100 : 70;
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        this.height = Math.max(this.height, legendMinHeight);
      };
    }
  };

  // Chart data
  const data = {
    labels: dataset.map((item) => item.label),
    datasets: [
      {
        data: dataset.map((item) => item.value),
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF5733', '#33FF57', '#5733FF'],
        hoverBackgroundColor: ['#D94621', '#21D946', '#4621D9', '#005C9E', '#009E7A', '#D89700'],
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: true,
      position: 'top',
    },
    plugins: [legendMinHeightPlugin]
  };

  return <Pie data={data} options={options} plugins={[legendMinHeightPlugin]} />;
};

export default DietChart;