import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./About"; // Assuming About.jsx is your dashboard
import Results from "./Histo";   // Histo.jsx for results
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Redirect from "/" to the dashboard */}
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
};

export default App;
