import React, { useState, useEffect } from "react";
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";
import Reports from "../Sections/Reports";

const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    location: "",
  });

  // Fetch profile data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  // Update profile data state when input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save updated profile data to localStorage and close the modal
  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setModalOpen(false);
  };

  // Open and close modal
  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Profile Section */}
      <div className="bg-gray-100">
        <div
          className="relative bg-cover bg-center h-64"
          style={{
            backgroundImage: "url('/Images/Background img.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60"></div>
        </div>

        <div className="container mx-auto px-6 -mt-20 relative">
          <div className="bg-teal-700 text-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src="/Images/noprofile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">
                {profileData.name || "Your Name"}
              </h2>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Profile Details</h3>
              <div className="space-y-2">
                <p><strong>Name:</strong> {profileData.name || ""}</p>
                <p><strong>Email:</strong> {profileData.email || ""}</p>
                <p><strong>Age:</strong> {profileData.age || ""}</p>
                <p><strong>Phone:</strong> {profileData.phone || ""}</p>
                <p><strong>Location:</strong> {profileData.location || ""}</p>
              </div>

              <button
                className="mt-6 px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300"
                onClick={openModal}
              >
                Finish Setting Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Profile</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={profileData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  name="age"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={profileData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  value={profileData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  name="phone"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={profileData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  name="location"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={profileData.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      

      {/* Reports Section */}
      <div>
        
        <Reports />
      </div>
    </div>
  );
};

export default Profile;
