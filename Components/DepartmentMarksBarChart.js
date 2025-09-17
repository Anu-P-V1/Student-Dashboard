"use client"; // Add this line at the top

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DepartmentMarksBarChart = ({ students }) => {
  // ... rest of the code is the same
  if (!students || students.length === 0) {
    return <div>No student data available for chart.</div>;
  }

  const departmentMarks = students.reduce((acc, student) => {
    const { Department, Marks } = student;
    if (!acc[Department]) {
      acc[Department] = { totalMarks: 0, count: 0 };
    }
    acc[Department].totalMarks += Marks;
    acc[Department].count++;
    return acc;
  }, {});

  const labels = Object.keys(departmentMarks);
  const dataValues = labels.map(
    (dept) => departmentMarks[dept].totalMarks / departmentMarks[dept].count
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Average Marks',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Average Marks by Department',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Average Marks',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Department',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DepartmentMarksBarChart;