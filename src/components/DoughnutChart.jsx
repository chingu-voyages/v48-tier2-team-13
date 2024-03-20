//Import hooks
import { useContext } from "react";
import { AppContext } from "../App";

// Libs/Utils
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DinosaurTypeChart = () => {
  //Load dinosaurs data from api context
  const {dinosaursData} = useContext(AppContext);

  const calculateTypeDistribution = () => {
    // Extract the information about the dinosaur types
    const dinoTypes = dinosaursData.map((dinosaur) => dinosaur.typeOfDinosaur);
  
    // Count occurrences of each dinosaur type
    const dinoTypeCounts = dinoTypes.reduce((acc, typeOfDinosaur) => {
      acc[typeOfDinosaur] = (acc[typeOfDinosaur] || 0) + 1;
      return acc;
    }, {});
  
    // Calculate percentage for each dinosaur type
    const totalDinosaurs = dinoTypes.length;
    const dinoTypeDistribution = Object.entries(dinoTypeCounts).map(([typeOfDinosaur, count]) => ({
      label: typeOfDinosaur,
      value: parseFloat(((count / totalDinosaurs) * 100).toFixed(2)),
    }));
    return dinoTypeDistribution;
  };

  const dataset = calculateTypeDistribution();
  // Chart data
  const data = {
    labels: dataset.map((item) => item.label),
    datasets: [
      {
        data: dataset.map(item => item.value),
        backgroundColor: ['#FF5733', '#33FF57', '#5733FF', '#00C49F', '#FFBB28', '#0088FE'],
        hoverBackgroundColor: ['#D94621', '#21D946', '#4621D9', '#009E7A', '#D89700', '#005C9E'],
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

  return <Doughnut data={data} options={options} />;
};



export default DinosaurTypeChart;