import {React, useState,useEffect} from "react";
import Header from "../../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upcoming from "../Contests/Upcoming";
import Ongoing from "../Contests/Ongoing";
import UserStats from "../UserStats/UserStats.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Error from "../Error404/Error";
import { Helmet } from "react-helmet";



const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#686868 #686868",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#424242",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 20,
            backgroundColor: "#636363",
            minHeight: 15,
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#4F4F4F",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#686868",
          },
        },
      },
    },
  },
})

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#C1C1C1 #C1C1C1",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#F1F1F1",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 20,
            backgroundColor: "#C1C1C1",
            minHeight: 15,
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#B5B5B5",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#C1C1C1",
          },
        },
      },
    }
  }
})

const Home = () => {
  
  const [darkmode, setDarkmode] = useState(false)
    const toggle = () =>{
      setDarkmode(!darkmode);
      const g=localStorage.getItem('dark-mode');
      if(g==="off")
      localStorage.setItem('dark-mode',"on");
      else
      localStorage.setItem('dark-mode',"off");

    }
    useEffect(() => {
      const dm=localStorage.getItem('dark-mode')
      if(dm!=null)
      {
        if(dm==="on")
        setDarkmode(true);
        else
        setDarkmode(false);
      }

    }, []);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Helmet>
                <title>UpCoding-Competitive Coding Contest</title>
                <meta name="description" content="Find information on coding contests from Codechef, LeetCode, and Codeforces. Practice coding problems, participate in online coding competitions and read contest analysis and editorial."></meta>
  <meta name="keywords" content="Coding contests, Competitive programming, Code challenges, Online coding competitions, Codeforces contests, LeetCode contests, Codechef contests, Algorithmic competitions, Programming puzzles, Practice coding problems, Problem-solving challenges, Programming contests schedule, Contest problem archives, Difficulty level categorization, Contest analysis and editorial"></meta>
            </Helmet>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={
              <>
                <Header darkmode={darkmode} toggle={toggle} /> 
                <Upcoming darkmode={darkmode} />
              </>
            }
          />
          <Route exact path="/ongoing" element={
              <>
                <Header darkmode={darkmode} toggle={toggle} /> 
                <Ongoing darkmode={darkmode} />
              </>
            }
          />
          <Route exact path="/userstats" element={
              <>
                <Header darkmode={darkmode} toggle={toggle} /> 
                <UserStats darkmode={darkmode} />
              </>
            }
          />
          <Route exact path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Home;
