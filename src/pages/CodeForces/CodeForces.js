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
  const [found, setFound] = useState(true);
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
        setFound(true);
      })
      .catch((error) => {
        setFound(false);
        setResult(null);
      });

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
      .catch((error) => setRating(null));

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
      .catch((error) => setStatus(null));
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
        className="search-form"
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
      {!found && <div className="error-container">User not found!</div>}
      <div className="response-container">
        <div className="user-container">
          {result && <UserInfo darkmode={darkmode} params={result} />}
        </div>
        <div className="rank-container">
          {rating && <RankGraph darkmode={darkmode} params={rating} />}
        </div>
        <div className="Submission-container">
          {status && <SubmissionList darkmode={darkmode} params={status} />}
        </div>
      </div>
    </>
  );
};

export default CodeForces;
