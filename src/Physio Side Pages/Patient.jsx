import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhysioSidebar from "../Properties/PhysioSidebar";
import Navbar from "../Properties/Navbar";

const Patient = () => {
  const patients = [
    { id: 1, name: "Alice Johnson", specialty: "Orthopedic" },
    { id: 2, name: "Mark Smith", specialty: "Neurology" },
    { id: 3, name: "John Doe", specialty: "Cardiology" },
  ];

  const patientDetails = {
    1: {
      age: 32,
      medicalHistory: "No previous surgeries. History of back pain.",
      reports: [
        { date: "2025-01-15", content: "Initial Consultation Report" },
        { date: "2025-01-18", content: "Progress Report - Physiotherapy Treatment" },
      ],
      progress: "Patient has shown 60% improvement after 4 weeks of treatment.",
    },
    2: {
      age: 45,
      medicalHistory: "Suffered from chronic migraines.",
      reports: [
        { date: "2025-01-14", content: "Initial Consultation Report" },
      ],
      progress: "Patient has shown improvement in symptoms with new medication.",
    },
    3: {
      age: 60,
      medicalHistory: "Heart issues, has undergone surgery.",
      reports: [
        { date: "2025-01-10", content: "Initial Consultation Report" },
      ],
      progress: "Patient is stable and undergoing rehabilitation.",
    },
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [activeProfile, setActiveProfile] = useState(null);
  const [editingReportIndex, setEditingReportIndex] = useState(null);
  const [updatedReportContent, setUpdatedReportContent] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery) ||
      patient.specialty.toLowerCase().includes(searchQuery)
  );

  const toggleDetails = (id) => {
    setActiveProfile(activeProfile === id ? null : id);
    setEditingReportIndex(null); // Reset editing state when switching profiles
  };

  const startEditingReport = (index, content) => {
    setEditingReportIndex(index);
    setUpdatedReportContent(content);
  };

  const saveReport = (id, index) => {
    const updatedReports = [...patientDetails[id].reports];
    updatedReports[index].content = updatedReportContent;
    patientDetails[id].reports = updatedReports;
    setEditingReportIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="sticky top-0 z-20">
      <Navbar/>
      </div>

      <div>
      <PhysioSidebar />

      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 p-6">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">
            Patient Management
          </h3>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search patients by name or specialty..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-3 border rounded-lg shadow-sm"
            />
          </div>

          {/* Patient List */}
          <ul className="space-y-4">
            {filteredPatients.map((patient) => (
              <li
                key={patient.id}
                className="border bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{patient.name}</h3>
                    <p className="text-gray-600">{patient.specialty}</p>
                  </div>
                  <button
                    onClick={() => toggleDetails(patient.id)}
                    className="text-blue-600 hover:underline"
                  >
                    {activeProfile === patient.id ? "Hide Details" : "View Details"}
                  </button>
                </div>

                {/* Expanded Profile Section */}
                {activeProfile === patient.id && (
                  <div className="mt-4 border-t pt-4">
                    <p>
                      <strong>Age:</strong> {patientDetails[patient.id].age}
                    </p>
                    <p>
                      <strong>Medical History:</strong>{" "}
                      {patientDetails[patient.id].medicalHistory}
                    </p>

                    {/* Reports */}
                    <h4 className="font-bold mt-2">Reports:</h4>
                    <ul className="list-disc ml-5">
                      {patientDetails[patient.id].reports.map((report, index) => (
                        <li key={index} className="flex items-start justify-between">
                          {editingReportIndex === index ? (
                            <>
                              <input
                                value={updatedReportContent}
                                onChange={(e) => setUpdatedReportContent(e.target.value)}
                                className="flex-grow p-1 border rounded"
                              />
                              <button
                                onClick={() => saveReport(patient.id, index)}
                                className="ml-2 text-green-500 hover:underline"
                              >
                                Save
                              </button>
                            </>
                          ) : (
                            <>
                              <span>
                                {report.date}: {report.content}
                              </span>
                              <button
                                onClick={() => startEditingReport(index, report.content)}
                                className="ml-2 text-blue-500 hover:underline"
                              >
                                Edit
                              </button>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* Video Recommendations */}
                    <h4 className="font-bold mt-4">Recommend a Video:</h4>
                    <textarea
                      placeholder="Paste video link or description here..."
                      className="w-full p-3 border rounded-lg mt-2"
                    ></textarea>
                    <button className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                      Recommend Video
                    </button>

                    <Link
                      to="/chat"
                      className="text-blue-500 hover:underline block mt-4"
                    >
                      Message Patient
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* No Patients Found */}
          {filteredPatients.length === 0 && (
            <p className="text-center text-gray-500">No patients found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Patient;
