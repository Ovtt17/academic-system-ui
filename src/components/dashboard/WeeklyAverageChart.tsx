import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { WeeklyScoreByCourse } from '../../types/dashboardData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Calcular promedios semanales
const calculateWeeklyAverages = (weekScores: WeeklyScoreByCourse[]) => {
  const totalScores: number[] = [];
  const numWeeks = weekScores.length;

  for (let week = 1; week <= numWeeks; week++) {
    totalScores[week] = 0;
  }

  weekScores.forEach(score => {
    totalScores[score.week] += score.score;
  });

  const weeklyAverages = totalScores.map(total => (total / weekScores.length).toFixed(2));
  return weeklyAverages;
};

const generateWeekLabels = (numWeeks: number) => {
  const labels = [];
  for (let i = 1; i <= numWeeks; i++) {
    labels.push(`Semana ${i}`);
  }
  return labels;
};

interface WeeklyAverageChartProps {
  data: WeeklyScoreByCourse[];
}

const WeeklyAverageChart: React.FC<WeeklyAverageChartProps> = ({ data }) => {
  const weeklyAverages = calculateWeeklyAverages(data);

  const numWeeks = 8;

  const weekLabels = generateWeekLabels(numWeeks);

  const chartData = {
    labels: weekLabels,
    datasets: [
      {
        label: 'Promedio General de Alumnos',
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
        text: "Promedio General de Alumnos a lo Largo de las Semanas",
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
        <h2 className="text-xl font-semibold mb-4">Desempeño General de Alumnos</h2>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default WeeklyAverageChart;