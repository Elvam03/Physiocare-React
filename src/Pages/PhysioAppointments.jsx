import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PhysioSidebar from "../Properties/PhysioSidebar";
import Navbar from "../Properties/Navbar";

const PhysioAppointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const scheduledMeetings = [
    { date: "2025-01-19", time: "10:00 AM", patient: "John Doe", task: "Therapy Session" },
    { date: "2025-01-28", time: "2:00 PM", patient: "Jane Smith", task: "Consultation" },
  ];

  const upcomingAppointments = [
    { id: 1, date: "2025-01-21", time: "11:00 AM", patient: "Robert Brown", reason: "Follow-up" },
    { id: 2, date: "2025-01-22", time: "1:00 PM", patient: "Alice Johnson", reason: "Initial Checkup" },
  ];

  const handleAction = (appointmentId, action) => {
    alert(`Appointment ID: ${appointmentId} - Action: ${action}`);
    // Add logic for updating backend or state here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      {/* Sidebar and Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <PhysioSidebar />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">
            Manage Appointments
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                Calendar
              </h4>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="border rounded"
                tileClassName={({ date }) => {
                  const formattedDate = date.toISOString().split("T")[0];
                  return (scheduledMeetings.some(
                    (meeting) => meeting.date === formattedDate
                  )
                    ? "bg-blue-500 text-white" // Change to blue
                    : "");
                }}
              />
            </div>

            {/* Schedule Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">
                Schedule for {selectedDate.toDateString()}
              </h4>
              {scheduledMeetings.filter(
                (meeting) =>
                  meeting.date === selectedDate.toISOString().split("T")[0]
              ).length > 0 ? (
                <ul>
                  {scheduledMeetings
                    .filter(
                      (meeting) =>
                        meeting.date === selectedDate.toISOString().split("T")[0]
                    )
                    .map((meeting, index) => (
                      <li key={index} className="p-4 bg-gray-50 rounded mb-4">
                        <p className="text-gray-700">
                          <strong>{meeting.time}</strong> - {meeting.patient}
                        </p>
                        <p className="text-sm text-gray-500">{meeting.task}</p>
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="text-gray-500">No meetings scheduled.</p>
              )}
            </div>

            {/* Upcoming Appointments Section */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">
                Upcoming Appointments
              </h4>
              <ul>
                {upcomingAppointments.map((appointment) => (
                  <li
                    key={appointment.id}
                    className="p-4 bg-gray-50 rounded mb-4 flex flex-col justify-between items-center"
                  >
                    <div>
                      <p className="text-gray-700">
                        <strong>{appointment.date}</strong> - {appointment.time}
                      </p>
                      <p className="text-sm text-gray-500">
                        {appointment.patient} ({appointment.reason})
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleAction(appointment.id, "accept")
                        }
                        className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          handleAction(appointment.id, "decline")
                        }
                        className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
                      >
                        Decline
                      </button>
                      <button
                        onClick={() =>
                          handleAction(appointment.id, "reschedule")
                        }
                        className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded hover:bg-yellow-600"
                      >
                        Reschedule
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysioAppointments;
