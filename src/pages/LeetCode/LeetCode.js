import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import UserInfo from "../../components/LeetCode/UserInfo";
import ProblemsGraph from "../../components/LeetCode/ProblemsGraph";
import SubmissionList from "../../components/SubmissionList";
import "./LeetCode.css";

const LeetCode = ({ darkmode }) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const [name, setName] = useState();
  const [result, setResult] = useState();
  const [found, setFound] = useState(true);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = () => {

    fetch(
      "https://leetcode-stats-api.herokuapp.com/" + name,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result["username"] = name;
        setResult(result);
        setFound(true);
      })
      .catch((error) => {
        setFound(false);
        setResult(null);
      });

      var query = `
        query recentAcSubmissions($username: String!, $limit: Int!) {
          recentAcSubmissionList(username: $username, limit: $limit) {
            id    
            title    
            titleSlug    
            timestamp  
          }
        }
      `;
      
      fetch("https://leetcode.com/graphql", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: {
            username: "andrefpoliveira",
            limit: 10,
          }
        })
      })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
          {result && <ProblemsGraph darkmode={darkmode} params={result} />}
        </div>
        {/* <div className="Submission-container">
          {status && <SubmissionList darkmode={darkmode} params={result} />}
        </div> */}
      </div>
    </>
  );
};

export default LeetCode;
