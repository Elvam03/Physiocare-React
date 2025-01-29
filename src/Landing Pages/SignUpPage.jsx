import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [showForm, setShowForm] = useState(null); // Track which form to show
  const navigate = useNavigate();

  const handleFormSwitch = (formType) => {
    setShowForm(formType);
  };

  const handleClientSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const clientData = Object.fromEntries(formData.entries());

    localStorage.setItem("profileData", JSON.stringify(clientData));
    navigate("/profile"); // Redirect to profile page
  };

  const handlePhysioSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const physioData = Object.fromEntries(formData.entries());

    localStorage.setItem("physioData", JSON.stringify(physioData));
    navigate("/physioDashboard"); // Redirect to physio dashboard
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-900 min-h-screen p-4">
      <div>
        <Link to="/" className="text-gray-100 hover:text-gray-800 float-left text-lg">
          ✖
        </Link>
      </div>
      <div>
        <Link to="/onboarding" className="text-gray-100 hover:text-gray-800 float-right text-3xl">
          &rarr;
        </Link>
      </div>

      <div className="flex justify-center flex-col items-center p-5 text-white">
        <h2 className="text-4xl font-semibold m-5">Hello, Welcome.</h2>
        <p className="text-2xl m-3">We are excited to have you here! Create account as:</p>
        <div className="flex gap-8">
          <button
            className={`border-2 px-9 py-3 ${
              showForm === "client" ? "bg-white text-gray-700" : "hover:bg-white hover:text-gray-700"
            }`}
            onClick={() => handleFormSwitch("client")}
          >
            Client
          </button>
          <button
            className={`border-2 px-9 py-3 ${
              showForm === "physio" ? "bg-white text-gray-700" : "hover:bg-white hover:text-gray-700"
            }`}
            onClick={() => handleFormSwitch("physio")}
          >
            Physio
          </button>
        </div>
      </div>

      <div className="mt-2 text-center mb-3 text-white">
            Already have an account?{" "}
            <Link
                to="/login"
                className="text-orange-200 hover:underline"
              >
                Log In
              </Link>
            
            
          </div>

      {/* Client Form */}
      {showForm === "client" && (
        <section
          id="signUp-client"
          className="min-h-screen flex items-center justify-center px-4 mb-5"
        >
          <div className="bg-white p-8 rounded-md w-full max-w-lg">
            <h2 className="text-black text-3xl font-semibold mb-6 text-center">Client Sign Up</h2>
            <form className="flex flex-col space-y-6" onSubmit={handleClientSignUp}>
              {/* Fields for client sign up */}
              <label htmlFor="signup-name" className="text-gray-700">
                Full Name:
              </label>
              <input
                type="text"
                id="signup-name"
                name="name"
                required
                className="border border-gray-400 p-2 outline-none mb-4 rounded-md"
              />
              <label htmlFor="signup-email" className="text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="signup-email"
                name="email"
                required
                className="border border-gray-400 p-2 outline-none mb-4 rounded-md"
              />
              <label htmlFor="signup-password" className="text-gray-700">
                Create Password:
              </label>
              <input
                type="password"
                id="signup-password"
                name="password"
                required
                className="border border-gray-400 p-2 outline-none mb-4 rounded-md"
              />
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-teal-500 to-blue-900 px-9 py-3 rounded-md hover:from-teal-600 hover:to-blue-800 transition-all"
              >
                Sign Up
              </button>
              <Link to="/dashboard">
              
              <button
              className="bg-gray-500 text-white p-3 rounded"
              >
                Continue as Guest
              </button>

              </Link>
            </form>
          </div>
        </section>
      )}

      {/* Physiotherapist Form */}
      {showForm === "physio" && (
        <section
          id="signUp-physio"
          className="min-h-screen flex items-center justify-center px-4 mb-5"
        >
          <div className="bg-white p-8 rounded-md w-full max-w-lg">
            <h2 className="text-black text-3xl font-semibold mb-6 text-center">Physio Sign Up</h2>
            <form className="flex flex-col space-y-6" onSubmit={handlePhysioSignUp}>
              {/* Fields for physiotherapist sign up */}
              <label htmlFor="signup-physio-name" className="text-gray-700">
                Full Name:
              </label>
              <input
                type="text"
                id="signup-physio-name"
                name="name"
                required
                className="border border-gray-400 p-2 outline-none mb-4 rounded-md"
              />
              <label htmlFor="signup-physio-email" className="text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="signup-physio-email"
                name="email"
                required
                className="border border-gray-400 p-2 outline-none mb-4 rounded-md"
              />
              <label htmlFor="signup-license" className="text-gray-700">
                License Number:
              </label>
              <input
                type="text"
                id="signup-license"
                name="license"
                required
                className="border border-gray-400 p-2 outline-none mb-4 rounded-md"
              />
              <label htmlFor="signup-password" className="text-gray-700">
                Create Password:
              </label>
              <input
                type="password"
                id="signup-password"
                name="password"
                required
                className="border border-gray-400 p-2 outline-none mb-4 rounded-md"
              />
              <label htmlFor="confirm-password" className="text-gray-700">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                name="password"
                required
                className="border border-gray-400 p-2 outline-none mb-4 rounded-md"
              />
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-teal-500 to-blue-900 px-9 py-3 rounded-md hover:from-teal-600 hover:to-blue-800 transition-all"
              >
                Sign Up
              </button>
              <Link to="/physioDashboard">
              
              <button
              className="bg-gray-500 text-white p-3 rounded"
              >
                Continue as Guest
              </button>

              </Link>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default SignUpPage;
