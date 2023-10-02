import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const RankGraph = ({ darkmode, params }) => {
  const formatTime = (seconds) => {
    var newDate = new Date();
    newDate.setTime(seconds * 1000);
    const dateString = newDate.toJSON().slice(0, 10);
    return dateString;
  };

  const data = {
    labels: params.map((item) => formatTime(item.ratingUpdateTimeSeconds)),
    datasets: [
      {
        label: "Rating",
        data: params.map((item) => item.newRating),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 1000,
        max: 4000,
        ticks: {
          stepSize: 200,
        },
      },
    },
    legend: {
      position: "bottom",
    },
  };

  const canvasBackgroundColor = {
    id: "canvasBackgroundColor",
    beforeDraw: (chart, args, options) => {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
        scales: { x, y },
      } = chart;

      const bgColor = (low, high, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(
          left,
          y.getPixelForValue(high),
          width,
          y.getPixelForValue(low) - y.getPixelForValue(high)
        );
      };
      bgColor(1000, 4000, "rgb(255,255,255,1)");
      bgColor(3000, 4000, "rgb(170,0,0,0.5)");
      bgColor(2600, 3000, "rgb(255,51,51,0.5)");
      bgColor(2400, 2600, "rgb(255,119,119,0.5)");
      bgColor(2300, 2400, "rgb(255,187,85,0.5)");
      bgColor(2100, 2300, "rgb(255,204,136,0.5)");
      bgColor(1900, 2100, "rgb(255,136,255,0.5)");
      bgColor(1600, 1900, "rgb(170,170,255,0.5)");
      bgColor(1400, 1600, "rgb(119,221,187,0.5)");
      bgColor(1200, 1400, "rgb(119,255,119,0.5)");
      bgColor(1000, 1200, "rgb(204,204,204,0.5)");
    },
  };

  return (
    <>
      <Line options={options} data={data} plugins={[canvasBackgroundColor]} />
    </>
  );
};

export default RankGraph;
