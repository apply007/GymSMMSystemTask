import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Gym Management System</h1>
      <div className="mt-4 space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
