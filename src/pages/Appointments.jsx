import React from 'react';
import AppointmentCalendar from '../components/Appointments/AppointmentCalendar';
import AppointmentQueue from '../components/Dashboard/AppointmentQueue';

function Appointments() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Appointments</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AppointmentCalendar />
        <AppointmentQueue />
      </div>
    </div>
  );
}

export default Appointments;