import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        {/* Statistics Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Statistics Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-700">Total Trainers</h3>
              <p className="text-3xl font-bold text-blue-600">15</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-700">Scheduled Classes</h3>
              <p className="text-3xl font-bold text-green-600">25</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-700">Registered Trainees</h3>
              <p className="text-3xl font-bold text-purple-600">120</p>
            </div>
          </div>
        </section>

        {/* Manage Trainers Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Manage Trainers</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Trainer List</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Trainer
              </button>
            </div>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Expertise</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2">john@example.com</td>
                  <td className="border px-4 py-2">Fitness</td>
                  <td className="border px-4 py-2 text-center">
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Jane Smith</td>
                  <td className="border px-4 py-2">jane@example.com</td>
                  <td className="border px-4 py-2">Yoga</td>
                  <td className="border px-4 py-2 text-center">
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Class Scheduling Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Class Scheduling</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="trainer">
                  Select Trainer
                </label>
                <select
                  id="trainer"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
                  Select Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Schedule Class
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
