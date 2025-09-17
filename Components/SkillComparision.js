"use client";

import { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SkillComparison({ students }) {
  const [selectedStudent1, setSelectedStudent1] = useState(students[0] ? students[0].ID : null);
  const [selectedStudent2, setSelectedStudent2] = useState(students[1] ? students[1].ID : null);

  const student1 = students.find(s => s.ID === selectedStudent1);
  const student2 = students.find(s => s.ID === selectedStudent2);

  const skillLabels = student1 ? Object.keys(student1.Skills) : [];

  const data = {
    labels: skillLabels,
    datasets: [
      {
        label: student1 ? student1.Name : 'Student 1',
        data: student1 ? Object.values(student1.Skills) : [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: student2 ? student2.Name : 'Student 2',
        data: student2 ? Object.values(student2.Skills) : [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { color: 'rgba(200, 200, 200, 0.5)' },
        grid: { color: 'rgba(200, 200, 200, 0.5)' },
        pointLabels: { color: '#666', font: { size: 14 } },
        ticks: { display: false, beginAtZero: true },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="card">
      <h2>Skill Comparison</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <label htmlFor="student1-select">Student 1:</label>
          <select
            id="student1-select"
            value={selectedStudent1}
            onChange={(e) => setSelectedStudent1(parseInt(e.target.value))}
            style={{ marginLeft: '10px' }}
          >
            {students.map((student) => (
              <option key={student.ID} value={student.ID}>
                {student.Name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="student2-select">Student 2:</label>
          <select
            id="student2-select"
            value={selectedStudent2}
            onChange={(e) => setSelectedStudent2(parseInt(e.target.value))}
            style={{ marginLeft: '10px' }}
          >
            {students.map((student) => (
              <option key={student.ID} value={student.ID}>
                {student.Name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Chart Section */}
        <div style={{ flex: 1, minWidth: '300px', height: '400px' }}>
          <Radar data={data} options={options} />
        </div>

        {/* Score Display Section */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          {student1 && (
            <div style={{ marginBottom: '1rem' }}>
              <h3>{student1.Name}'s Skills</h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {Object.entries(student1.Skills).map(([skill, score]) => (
                  <li key={skill} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                    <span>{skill}:</span>
                    <strong>{score}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {student2 && (
            <div>
              <h3>{student2.Name}'s Skills</h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {Object.entries(student2.Skills).map(([skill, score]) => (
                  <li key={skill} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                    <span>{skill}:</span>
                    <strong>{score}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}