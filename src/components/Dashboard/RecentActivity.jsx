import React from 'react';

function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'appointment',
      patient: 'John Doe',
      action: 'completed checkup',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'prescription',
      patient: 'Jane Smith',
      action: 'prescribed medication',
      time: '3 hours ago'
    },
    {
      id: 3,
      type: 'lab',
      patient: 'Robert Johnson',
      action: 'requested blood test',
      time: '5 hours ago'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between border-b pb-4 last:border-0">
            <div>
              <p className="font-medium text-gray-800">{activity.patient}</p>
              <p className="text-sm text-gray-600">{activity.action}</p>
            </div>
            <span className="text-sm text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;