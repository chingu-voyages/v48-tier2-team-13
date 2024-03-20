//Import hooks
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";

// Libs/Utils
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DietChart = () => {
  //Load dinosaurs data from api context
  const {dinosaursData} = useContext(AppContext);
  const [dinosaurData, setDinosaurData] = useState(dinosaursData);

  useEffect(() => {
    // Update dinosaurData state when dinosaursData changes
    setDinosaurData(dinosaursData);
  }, [dinosaursData]);

  const calculateDistribution = () => {
    // Extract the information about the diet types
    const diets = dinosaurData.map((dinosaur) => dinosaur.diet);
  
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
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  return <Pie data={data} options={options} />;
};

export default DietChart;

