//Import hooks
import { useContext} from "react";
import { AppContext } from "../App";

// Import components
import Loader from "../components/Loader";

// Libs/Utils
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DinosaurTypeChart = () => {
  // Load dinosaurs data from api context
  const {dinosaursData, loadingDinosaursData, errorDinosaursData} = useContext(AppContext);

  if (loadingDinosaursData) {
    return <Loader />;
  }
  if (errorDinosaursData) {
    return (
      <div className="text-center mt-8">
        <p>Error: There was an error with charts data.</p>
      </div>
    );
  }

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

  // Set a minimum height for the legend based on screen size
  const legendMinHeightPlugin = {
    id: "legendMinHeight",
    beforeInit: function (chart) {
      const screenWidth = window.innerWidth;
      const legendMinHeight = screenWidth < 1024 ? 10 : screenWidth >= 1024 && screenWidth < 1536 ? 100 : 90;
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        this.height = Math.max(this.height, legendMinHeight);
      };
    }
  };

  // Set the chart colors to be dynamically generated based on the number of chart items
   const generateColors = (numColors) => {
    return Array.from({ length: numColors }, (_, i) => {
        const hue = (i * 360) / numColors;
        const saturation = 65;
        const lightness = 50;
        const hoverLightness = lightness + 15;

        const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        const hoverBackgroundColor = `hsl(${hue}, ${saturation}%, ${hoverLightness}%)`;

        return {
            backgroundColor,
            hoverBackgroundColor
        };
    });
  };

  // Chart data
  const data = {
    labels: dataset.map((item) => item.label),
    datasets: [
      {
        data: dataset.map(item => item.value),
        backgroundColor: generateColors(dataset.length).map(color => color.backgroundColor),
        hoverBackgroundColor: generateColors(dataset.length).map(color => color.hoverBackgroundColor),
        borderWidth: 0,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    color: '#fff',
    legend: {
      display: true,
      position: 'top',
    },
    plugins: {
      legendMinHeightPlugin,
      tooltip: {
        callbacks: {
          label: function(context) {
                let label = context.dataset.label || '';
                label += context.raw + '%'; 
                return label;
            }
        }
      }
    }
  };

  return <Doughnut data={data} options={options} plugins={[legendMinHeightPlugin]}/>;
};



export default DinosaurTypeChart;

