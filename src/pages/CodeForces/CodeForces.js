import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import UserInfo from "../../components/UserInfo";
import RankGraph from "../../components/RankGraph";
import SubmissionList from "../../components/SubmissionList";
import "./CodeForces.css";

const CodeForces = ({ darkmode }) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const [name, setName] = useState();
  const [result, setResult] = useState();
  const [rating, setRating] = useState();
  const [status, setStatus] = useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = () => {
    fetch(
      "https://codeforces.com/api/user.info?" +
        new URLSearchParams({
          handles: name,
        }),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setResult(JSON.parse(result).result[0]);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://codeforces.com/api/user.rating?" +
        new URLSearchParams({
          handle: name,
        }),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setRating(JSON.parse(result).result);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://codeforces.com/api/user.status?" +
        new URLSearchParams({
          handle: name,
          from: 1,
          count: 10,
        }),
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setStatus(JSON.parse(result).result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        class="search-form"
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit} size="large">
          Search
        </Button>
      </Box>

      <div class="response-container">
        <div class="user-container">
          {result && <UserInfo darkmode={darkmode} params={result} />}
        </div>
        <div class="rank-container">
          {rating && <RankGraph darkmode={darkmode} params={rating} />}
        </div>
        <div class="Submission-container">
          {status && <SubmissionList darkmode={darkmode} params={status} />}
        </div>
      </div>
    </>
  );
};

export default CodeForces;
