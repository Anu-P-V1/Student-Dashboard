"use client"; // This line is needed if you are using hooks like useState

import React, { useState } from 'react';

const StudentTable = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!students) {
    return <div>No student data available.</div>;
  }

  // Filter the students based on the search term
  const filteredStudents = students.filter(student =>
    student.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => a.ID - b.ID);

  return (
    <div>
      <h2>Student Data</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map(student => (
            <tr key={student.ID}>
              <td>{student.ID}</td>
              <td>{student.Name}</td>
              <td>{student.Age}</td>
              <td>{student.Department}</td>
              <td>{student.Marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;