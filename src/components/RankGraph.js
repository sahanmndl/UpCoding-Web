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
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <>
      <Line data={data} />
    </>
  );
};

export default RankGraph;
