import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/common/Navbar.jsx";
import Footer from "./Components/common/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import FeaturePage from "./pages/FeaturePage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgetPasswordPage";
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password"element={<ForgotPasswordPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
