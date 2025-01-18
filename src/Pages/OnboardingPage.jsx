import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingPage = () => {
  const [profile, setProfile] = useState({
    bio: "",
    address: "",
    phone: "",
    profilePicture: null,
    specialty: "", // New field for specialty
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProfile((prev) => ({ ...prev, profilePicture: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = { ...profile };
    localStorage.setItem("profileData", JSON.stringify(updatedProfile));

    // Redirect to the main profile/dashboard
    navigate("/physioDashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-900 p-8">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Complete Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-gray-700">
            Bio:
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              placeholder="Tell us about yourself"
            />
          </label>
          <label className="block text-gray-700">
            Address:
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              placeholder="Enter your address"
            />
          </label>
          <label className="block text-gray-700">
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              placeholder="Enter your phone number"
            />
          </label>
          <label className="block text-gray-700">
            Specialty:
            <select
              name="specialty"
              value={profile.specialty}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1 bg-white"
            >
              <option value="" disabled>
                Select your specialty
              </option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Sports Rehabilitation">Sports Rehabilitation</option>
              <option value="Neurological">Neurological</option>
              <option value="Pediatric">Pediatric</option>
              <option value="Geriatric">Geriatric</option>
              <option value="Cardiopulmonary">Cardiopulmonary</option>
              <option value="Women's Health">Women's Health</option>
            </select>
          </label>
          <label className="block text-gray-700">
            Profile Picture:
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mt-1"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-900 text-white py-2 rounded-md hover:from-teal-600 hover:to-blue-800"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;
