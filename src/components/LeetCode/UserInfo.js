import React from "react";
import {
  Avatar,
  Stack,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";

const UserInfo = ({ darkmode, params }) => {
  const candidate = [
    { label: "Easy Problems", value: params.easySolved + " / " + params.totalEasy },
    { label: "Medium Problems", value: params.mediumSolved + " / " + params.totalMedium },
    { label: "Hard Problems", value: params.hardSolved + " / " + params.totalHard },
    { label: "Acceptance Rate", value: params.acceptanceRate + "%" },
    { label: "Ranking", value: params.ranking },
    { label: "Contribution Points", value: params.contributionPoints },
    { label: "Reputation", value: params.reputation },
  ];
  return (
    <>
      <Avatar
        alt={params.handle}
        src={params.avatar}
        sx={{ width: 88, height: 88 }}
      />

      <div
        style={{
          marginTop: "10px",
          alignItems: "center",
          fontWeight: "bold",
          gap: "10px",
        }}
      />

      <div
        style={{
          fontSize: "12px",
        }}
      >
        @{params.username}
      </div>
      <div
        className="user-info"
        style={{
          marginTop: "10px",
        }}
      >
        {candidate.map((info, index) => (
          <div
            key={"info-" + index}
            className="label"
            style={{
              display: "grid",
              gridTemplateColumns: "200px auto",
              gap: "10px",
              fontSize: "12px",
            }}
          >
            {info.label}
            {" : "}
            {info.value}
          </div>
        ))}
      </div>
    </>
  );
};

export default UserInfo;
