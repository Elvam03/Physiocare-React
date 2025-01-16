import React, { useState } from "react";
import Calendar from "react-calendar"; // Import React Calendar
import "react-calendar/dist/Calendar.css"; // Import calendar styles
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";
import { Link } from "react-router-dom";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      {/* Sidebar and Main Content */}
      <div>
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">
            Manage Your Appointments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calendar Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
              <h4 className="text-lg font-semibold mb-4 text-center text-gray-700">
                Calendar
              </h4>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="border rounded"
              />
              <div className="mt-4">
                <Link
                  to="/physio"
                  className="text-blue-500 hover:underline text-lg"
                >
                  Book New Appointment
                </Link>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-700">
                Your Schedule
              </h4>
              <ul className="space-y-4">
                {schedule.length > 0 ? (
                  schedule.map((date, index) => (
                    <li
                      key={index}
                      className="p-4 bg-gray-50 rounded shadow-sm"
                    >
                      <p className="text-gray-700 font-medium">
                        Appointment on {date}
                      </p>
                      <button
                        onClick={() =>
                          alert(
                            "Redirect to physiotherapist page for booking."
                          )
                        }
                        className="mt-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded shadow hover:bg-blue-600"
                      >
                        Book
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600">No appointments scheduled.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
