import React from "react";
import "./UserStats.css";
import { Stack } from "@mui/material";
import codechefLogo from "../../assets/codechef.png";
import codeforcesLogo from "../../assets/codeforces.png";
import leetcodeLogo from "../../assets/leetcode.png";
import PlatformCard from "../../components/PlatformCard";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const UserStats = ({ darkmode }) => {
  return (
    <div className="userstats-container">
      <Helmet>
        <title>Stats Codechef Codeforces Leetcode</title>
        <meta
          name="description"
          content="Find information on coding contests from Codechef, LeetCode, and Codeforces. Practice coding problems, participate in online coding competitions and read contest analysis and editorial."
        ></meta>
        <meta
          name="keywords"
          content="Coding contests, Competitive programming, Code challenges, Online coding competitions, Codeforces contests, LeetCode contests, Codechef contests, Algorithmic competitions, Programming puzzles, Practice coding problems, Problem-solving challenges, Programming contests schedule, Contest problem archives, Difficulty level categorization, Contest analysis and editorial"
        ></meta>
      </Helmet>

      <Stack direction="row" spacing={10}>
        <PlatformCard
          image={codechefLogo}
          caption="CodeChef"
          darkmode={darkmode}
          children={"Let's Go"}
        />
        <PlatformCard
          image={codeforcesLogo}
          caption="Codeforces"
          darkmode={darkmode}
          children={<Link to="/userstats/codeforces">Let's Go</Link>}
        />
        <PlatformCard
          image={leetcodeLogo}
          caption="LeetCode"
          darkmode={darkmode}
          children={<Link to="/userstats/leetcode">Let's Go</Link>}
        />
      </Stack>
    </div>
  );
};

export default UserStats;
