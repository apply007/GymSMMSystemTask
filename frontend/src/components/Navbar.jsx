import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Gym Scheduler
        </Link>
        <div className="flex space-x-4">
          {/* Show different links based on user roles */}
          {user?.user.role === "admin" && (
            <>
              <Link
                to="/admin-dashboard"
                className="text-gray-300 hover:text-white"
              >
                Admin Dashboard
              </Link>
              <Link to="/trainer-dashboard" className="text-gray-300 hover:text-white">
                Trainers
              </Link>
              <Link to="/classes" className="text-gray-300 hover:text-white">
                Class Schedules
              </Link>
            </>
          )}
          {user?.user.role === "trainer" && (
            <Link
              to="/trainer-classes"
              className="text-gray-300 hover:text-white"
            >
              My Classes
            </Link>
          )}
          {user?.role === "trainee" && (
            <Link to="/book-class" className="text-gray-300 hover:text-white">
              Book Class
            </Link>
          )}
          {/* Show Login or Logout */}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
