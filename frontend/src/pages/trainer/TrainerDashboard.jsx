import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrainers, addTrainer } from "../../Redux/admin/adminSlice";

const TrainerDashboard = () => {
  const dispatch = useDispatch();
  const { trainers, loading, error } = useSelector((state) => state.trainers);

  const { user } = useSelector((state) => state.auth);
console.log(user.user.role)

  const [newTrainer, setNewTrainer] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "trainer",
  });

  // Fetch trainers on component mount
  useEffect(() => {
    dispatch(fetchTrainers());
  }, [dispatch]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTrainer({ ...newTrainer, [name]: value });
  };

  // Handle form submission
  const handleAddTrainer = (e) => {
    e.preventDefault();
    console.log(newTrainer);
    dispatch(addTrainer(newTrainer));
    setNewTrainer({ fullName: "", email: "", password: "", role: "" }); // Reset form fields
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Trainer Management</h1>

      {/* Display loading spinner */}
      {loading && <div className="spinner">Loading...</div>}

      {/* Display error message */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Trainers List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Trainer List</h2>
        <ul className="pl-5 list-none">
          {trainers.map((trainer) => (
            <li key={trainer.id} className="mb-1">
              <span className="font-medium">{trainer.fullName}</span> -{" "}
              {trainer.fullName} ({trainer.expertise})
            </li>
          ))}
        </ul>
      </div>

      {/* Add Trainer Form */}
      {user.user.role==='admin' &&
        <div>
          <h2 className="text-xl font-semibold mb-2">Add New Trainer</h2>
          <form onSubmit={handleAddTrainer} className="space-y-4">
            <div>
              <label className="block font-medium mb-1" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={newTrainer.fullName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newTrainer.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={newTrainer.password}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full px-3 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Trainer
            </button>
          </form>
        </div>
      }
    </div>
  );
};

export default TrainerDashboard;
