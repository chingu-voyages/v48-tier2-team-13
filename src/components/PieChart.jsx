import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);

const DietChart = ({ dataset }) => {
  // Chart data
  const data = {
    labels: dataset.map(item => item.label),
    datasets: [
      {
        data: dataset.map(item => item.value),
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28'],
        hoverBackgroundColor: ['#005C9E', '#009E7A', '#D89700'],
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
