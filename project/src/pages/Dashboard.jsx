import React from 'react';
import PatientStats from '../components/Dashboard/PatientStats';
import AppointmentQueue from '../components/Dashboard/AppointmentQueue';
import RecentActivity from '../components/Dashboard/RecentActivity';

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
      <PatientStats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AppointmentQueue />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;