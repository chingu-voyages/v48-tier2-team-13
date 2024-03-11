import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);

const DinosaurTypeChart = ({ dataset }) => {
  // Chart data
  const data = {
    labels: dataset.map(item => item.label),
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

DinosaurTypeChart.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DinosaurTypeChart;
