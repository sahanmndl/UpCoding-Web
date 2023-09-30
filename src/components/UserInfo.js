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
    { label: "Rating", value: params.rating },
    { label: "Highest Rating", value: params.maxRating },
    { label: "Rank", value: params.rank },
    { label: "Highest Rank", value: params.maxRank },
    { label: "Friends", value: params.friendOfCount },
    { label: "Organization", value: params.organization },
    { label: "Contribution", value: params.contribution },
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
          "margin-top": "10px",
          "align-items": "center",
          "font-weight": "bold",
          gap: "10px",
        }}
      >
        {params.firstName} {params.lastName}{" "}
        <span
          style={{
            "font-size": "12px",
          }}
        >
          @{params.handle}
        </span>
      </div>
      <div
        class="user-info"
        style={{
          "margin-top": "10px",
        }}
      >
        {candidate.map((info, index) => (
          <div
            class="label"
            style={{
              display: "grid",
              "grid-template-columns": "150px auto",
              gap: "10px",
              "font-size": "12px",
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

// firstname, lastname, avatar, handle, contribution, org, maxrank, rank, maxrating, rating,
