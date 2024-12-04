import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export function JobStatusPieChart({ interviewed, unSuitableJobs }) {
  // Data for the chart
  const data = {
    labels: ["Unsuitable Jobs", "Interviewed Jobs"], // Labels for the pie sections
    datasets: [
      {
        data: [unSuitableJobs, interviewed], // Correctly pass data values
        backgroundColor: ["#E9EBFD", "#4640DE"], // Colors for each section
        hoverBackgroundColor: ["#D1D5FD", "#3636E0"], // Colors on hover
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    plugins: {
      legend: {
        display: false, // Hide the default Chart.js legend
      },
    },
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Allows resizing
  };

  return (
    <div className="flex items-center gap-8">
      {/* Pie Chart */}
      <div style={{ width: "150px", height: "150px" }}>
        <Pie data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4"
            style={{ backgroundColor: "#E9EBFD" }}
          ></span>
          <span className="text-sm font-medium">Unsuitable Jobs</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4"
            style={{ backgroundColor: "#4640DE" }}
          ></span>
          <span className="text-sm font-medium">Interviewed Jobs</span>
        </div>
      </div>
    </div>
  );
}
