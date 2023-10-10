import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import UserInfo from "../../components/LeetCode/UserInfo";
import ProblemsGraph from "../../components/LeetCode/ProblemsGraph";
import SubmissionList from "../../components/SubmissionList";
import "./LeetCode.css";
import Spinner from "../../components/Spinner.js";

const LeetCode = ({ darkmode }) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const [name, setName] = useState();
  const [result, setResult] = useState({});
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const found = result.status === 'success'? true:false;

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
    setLoading(true);
    fetch(
      "https://leetcode-stats-api.herokuapp.com/" + name,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result["username"] = name;
        setResult(result);
        setLoading(false);
      })
      .catch((error) => {
        setResult({});
        setLoading(false);
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
      <Box onSubmit={handleSubmit}
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
        <Button variant="contained" type="submit" size="large">
          Search
        </Button>
      </Box>
      {clicked && loading && <div className="spinner-container"><Spinner/></div>}
      {clicked && !loading && !found && <div className="error-container">User not found!</div>}
      {!loading && found && <div className="response-container">
        <div className="user-container">
          {result && <UserInfo darkmode={darkmode} params={result} />}
        </div>
        <div className="rank-container">
          {result && <ProblemsGraph darkmode={darkmode} params={result} />}
        </div>
        {/* <div className="Submission-container">
          {status && <SubmissionList darkmode={darkmode} params={result} />}
        </div> */}
      </div>}
    </>
  );
};

export default LeetCode;
