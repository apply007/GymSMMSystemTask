import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import TrainerDashboard from "../pages/trainer/TrainerDashboard";
import Register from "../pages/authentication/Register";

const RoutesData = () => {
  return (
    <BrowserRouter>
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
