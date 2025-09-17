# Student Dashboard

## Overview

This is a web application built with Next.js that serves as a student dashboard. It provides a clean and interactive way to view student data, including a searchable table and a visual representation of average marks by department using a bar chart.

## Key Features

* **Student Data Table:** Displays a complete list of student records, including ID, name, age, department, and marks.
* **Search Functionality:** A dynamic search bar allows users to quickly filter student data by name.
* **Departmental Insights:** A bar chart visualizes the average marks for each department, providing a quick and clear overview of performance.
* **Responsive Design:** The dashboard is designed to be accessible and easy to use on different devices.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
The application will start on http://localhost:3000. Open your browser and navigate to this address to view the dashboard.

Project Structure
app/page.js: The main page component that assembles the dashboard.

components/StudentTable.js: A reusable component for the student data table with search functionality.

components/DepartmentMarksBarChart.js: A reusable component for the bar chart visualizing department marks.

data/synthetic_students.json: The JSON file containing all the student data.

styles/globals.css: The stylesheet for the entire application.

Technologies Used
Next.js: A React framework for building fast and scalable web applications.

React: A JavaScript library for building user interfaces.

Chart.js: A flexible JavaScript charting library for visualizing data.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
