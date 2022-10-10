import {React, useState,useEffect} from "react";
import Header from "../../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upcoming from "../Contests/Upcoming";
import Ongoing from "../Contests/Ongoing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Error from "../Error404/Error"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#001F9C #F3F5FF",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2F305F",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 20,
            backgroundColor: "#F3F5FF",
            minHeight: 15,
            border: "4px solid #BEE6F7",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#2F305F",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#00DA1A",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#00DA1A",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#2b2b2b #13AD4C",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#E3F7EA",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 20,
            backgroundColor: "#00220C",
            minHeight: 15,
            border: "4px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#F5FFF8",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#2D59A1",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#2D59A1",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#13AD4C",
          },
        },
      },
    },
  },
});

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
          <Route exact path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Home;
