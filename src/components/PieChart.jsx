import fetchDinosaursData from "../services/DinosaursAPI/dinosaursApi";
import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);


const DietChart = () => {
  const [dinosaurData, setDinosaurData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDinosaursData();
      setDinosaurData(data);
    };

    fetchData();
  }, []);

  const calculateDistribution = () => {
    // Extracts the information about the diet
    const diets = dinosaurData.map((dinosaur) => dinosaur.diet);
  
    // Counts occurrences of each diet type
    const dietCounts = diets.reduce((acc, diet) => {
      acc[diet] = (acc[diet] || 0) + 1;
      return acc;
    }, {});
  
    // Calculates percentage for each diet type
    const totalDinosaurs = diets.length;
    const dietDistribution = Object.entries(dietCounts).map(([diet, count]) => ({
      label: diet,
      value: (count / totalDinosaurs) * 100,
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

DietChart.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DietChart;

