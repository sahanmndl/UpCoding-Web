import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const ProblemsGraph = ({ darkmode, params }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Completed",
        data: [params.easySolved, params.mediumSolved, params.hardSolved],
        backgroundColor: "#0000ff",
      },
      {
        label: "Missing",
        data: [params.totalEasy - params.easySolved, params.totalMedium - params.mediumSolved, params.totalHard - params.hardSolved],
        backgroundColor: "#0000ff40",

      },
    ]
  }

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default ProblemsGraph;
