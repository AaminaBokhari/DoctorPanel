import React from 'react';

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Today's Patients</h3>
        <p className="text-3xl font-bold">12</p>
      </div>
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Completed</h3>
        <p className="text-3xl font-bold">8</p>
      </div>
      <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Pending</h3>
        <p className="text-3xl font-bold">4</p>
      </div>
    </div>
  );
}

export default DashboardStats;