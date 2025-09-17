import StudentTable from '../Components/StudentTable';
import DepartmentMarksBarChart from '../Components/DepartmentMarksBarChart';
import studentsData from '../data/synthetic_students.json';

export default function Home() {
  return (
    <main>
      <div className="header-content">
        <h1>Student Dashboard</h1>
        <p>Unlocking Student Insights: A Data-Driven Journey</p>
      </div>
      
      <div className="card">
        <StudentTable students={studentsData} />
      </div>
      
      <div className="card">
        <DepartmentMarksBarChart students={studentsData} />
      </div>
    </main>
  );
}