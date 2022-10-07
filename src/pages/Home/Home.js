import {React, useState} from "react";
import Header from "../../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upcoming from "../Contests/Upcoming";
import Ongoing from "../Contests/Ongoing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Header darkmode={darkmode} setDarkmode={setDarkmode} />
        <Routes>
          <Route path="/" element={<Upcoming darkmode={darkmode} />} />
          <Route path="/ongoing" element={<Ongoing />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Home;
