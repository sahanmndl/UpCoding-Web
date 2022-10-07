import React from "react";
import Header from "../../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upcoming from "../Contests/Upcoming";
import Ongoing from "../Contests/Ongoing";

const Home = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Upcoming />} />
                <Route path="/ongoing" element={<Ongoing />} />
            </Routes>
        </Router>
    )
}

export default Home