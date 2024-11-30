import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import AdminDashboard from "../pages/admin/AdminDashboard";
import TrainerDashboard from "../pages/trainer/TrainerDashboard";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import Navbar from "../components/Navbar";

const RoutesData = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesData;
