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
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
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
