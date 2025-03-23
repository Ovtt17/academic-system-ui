import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { WeeklyScoreByCourse } from '../../types/dashboardData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface WeeklyAverageChartProps {
  data: WeeklyScoreByCourse[];
}

const WeeklyAverageChart: React.FC<WeeklyAverageChartProps> = ({ data }) => {

  const weekLabels = data.map(score => `Week ${score.week}`);
  const weeklyAverages = data.map(score => score.score);

  const chartData = {
    labels: weekLabels,
    datasets: [
      {
        label: 'Overall Student Average',
        data: weeklyAverages,
        borderColor: '#4CAF50',
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { color: "#fff" },
      },
      title: {
        display: true,
        text: data.length === 1 ? "Overall Student Average for the Week" : "Overall Student Average Over the Weeks",
        color: "#fff",
      },
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: {
        beginAtZero: true,
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <div className="max-w-4xl">
      <div className="bg-card p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Overall Student Performance</h2>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default WeeklyAverageChart;