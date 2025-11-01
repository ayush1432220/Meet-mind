import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Define your route structure */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
