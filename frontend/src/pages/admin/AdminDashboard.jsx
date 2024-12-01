import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrainers,
  addTrainer,
  deleteTrainer,
  fetchClassSchedules,
  addClassSchedule,
} from "../../Redux/admin/adminSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  // State for form inputs
  // const [trainerName, setTrainerName] = useState("");
  const [classData, setClassData] = useState({
    date: "",
    time: "",
    trainer: "",
  });

  // Redux state
  const { trainers, classSchedules, loading, error } = useSelector(
    (state) => state.trainers
  );
  console.log(classSchedules)

  // Fetch trainers and schedules on component mount
  useEffect(() => {
    dispatch(fetchTrainers());
    dispatch(fetchClassSchedules());
  }, [dispatch]);

  // Add new trainer
  // const handleAddTrainer = () => {
  //   if (trainerName) {
  //     dispatch(addTrainer({ fullName: trainerName }));
  //     setTrainerName(""); // Clear input field
  //   }
  // };

  // Delete trainer
  const handleDeleteTrainer = (e,id) => {
console.log(id)
e.preventDefault()
    dispatch(deleteTrainer(id));
    dispatch(fetchTrainers());
  };

  // Add new class schedule
  const handleAddClassSchedule = () => {
    if (classData.date && classData.time && classData.trainer) {
      dispatch(addClassSchedule(classData));
      setClassData({ date: "", time: "", trainer: "" }); // Reset form
    }
  };

  return (
    <div className="admin-dashboard p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Manage Trainers */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Manage Trainers</h2>
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Trainer Name"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
            className="p-2 border rounded mr-2"
          />
          <button
          type="button"
            onClick={handleAddTrainer}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Trainer
          </button>
        </div> */}
        {loading ? (
          <p>Loading trainers...</p>
        ) : (
          <ul className=" list-item ml-6">
            {trainers.map((trainer) => (
              <li key={trainer._id} className="mb-2 font-semibold">
                {trainer.fullName}{" "}
                <button
                  onClick={(e) => handleDeleteTrainer(e,trainer._id)}
                  className="text-red-500 ml-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Class Scheduling */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Class Scheduling</h2>
        <div className="mb-4">
          <input
            type="date"
            value={classData.date}
            onChange={(e) => setClassData({ ...classData, date: e.target.value })}
            className="p-2 border rounded mr-2"
          />
          <input
            type="time"
            value={classData.time}
            onChange={(e) => setClassData({ ...classData, time: e.target.value })}
            className="p-2 border rounded mr-2"
          />
          <select
            value={classData.trainer}
            onChange={(e) =>
              setClassData({ ...classData, trainer: e.target.value })
            }
            className="p-2 border rounded mr-2"
          >
            <option value="">Select Trainer</option>
            {trainers.map((trainer) => (
              <option key={trainer._id} value={trainer._id}>
                {trainer.fullName}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddClassSchedule}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Class
          </button>
        </div>
        {loading ? (
          <p>Loading class schedules...</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Time</th>
                <th className="border border-gray-300 p-2">Trainer</th>
              </tr>
            </thead>
            <tbody>
              {classSchedules.map((schedule) => (
           
                <tr key={schedule._id}>
                  <td className="border border-gray-300 p-2">{schedule.date}</td>
                  <td className="border border-gray-300 p-2">{schedule.time}</td>
                  <td className="border border-gray-300 p-2">
                    {trainers.find((t) => t._id === schedule.trainer)?.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
