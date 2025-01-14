import React, { useState } from 'react';
import { Link } from "react-router-dom";


const SignUpPage = () => {
  const [showForm, setShowForm] = useState(null); // Track which form to display (client or physio)

  const handleFormSwitch = (formType) => {
    setShowForm(formType);
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-900 min-h-screen p-4">
      {/* Logo and Links */}
     <div>
     <Link to="/" className="text-gray-100 hover:text-gray-800 float-left text-lg">
          ✖
          </Link>
     </div>
     <div>
     <Link to="/dashboard" className="text-gray-100 hover:text-gray-800 float-right text-3xl">
     &rarr;
          </Link>
     </div>
      

      {/* Welcome Message */}
      <div className="flex justify-center flex-col items-center p-5 text-white">
        <h2 className="text-4xl font-semibold m-5">Hello, Welcome.</h2>
        <p className="text-2xl m-3">We are excited to have you here! Create account as:</p>
        <div className="flex gap-8">
          <button
            className="border-2 px-9 py-3 hover:bg-white hover:text-gray-700"
            onClick={() => handleFormSwitch('client')}
          >
            Client
          </button>
          <button
            className="border-2 px-9 py-3 hover:bg-white hover:text-gray-700"
            onClick={() => handleFormSwitch('physio')}
          >
            Physio
          </button>
        </div>
      </div>

      <div className="flex gap-1 justify-center items-center mt-4 mb-3">
              <p className="text-black text-white text-center">Already have an account?</p>
              <Link
                to="/login"
                className="text-blue-600 font-semibold text-orange-100 text-center"
              >
                Log In
              </Link>
            </div>

      {/* Client SignUp Form */}
      {showForm === 'client' && (
        <section id="signUp-client" className="min-h-screen flex items-center justify-center px-4 sec mb-5">
          <div className="bg-white p-8 rounded-md w-full max-w-lg">
            <h2 className="text-black text-3xl font-semibold mb-6 text-center">Sign Up</h2>
            <form className="flex flex-col space-y-6">
              <label htmlFor="signup-name" className="text-gray-700">Name:</label>
              <input type="text" id="signup-name" name="name" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <label htmlFor="signup-email" className="text-gray-700">Email:</label>
              <input type="email" id="signup-email" name="email" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              {/* Gender Radio Buttons */}
             

              <label htmlFor="signup-password" className="text-gray-700">Create Password:</label>
              <input type="password" id="signup-password" name="password" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <label htmlFor="confirm-password" className="text-gray-700">Confirm Password:</label>
              <input type="password" id="confirm-password" name="confirm-password" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <button type="submit" className="text-white bg-gradient-to-r from-teal-500 to-blue-900 px-9 py-3 rounded-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-800 transition-all">
                Sign Up
              </button>
            </form>

            <div id="error-message" className="text-red-600 mt-4"></div>

            
          </div>
        </section>
      )}

      {/* Physio SignUp Form */}
      {showForm === 'physio' && (
        <section id="signUp-physio" className="min-h-screen flex items-center justify-center px-4 sec m-5">
          <div className="bg-white p-8 rounded-md w-full max-w-lg">
            <h2 className="text-black text-3xl font-semibold mb-6 text-center">Sign Up</h2>
            <form className="flex flex-col space-y-6">
              <label htmlFor="signup-name" className="text-gray-700">Name:</label>
              <input type="text" id="signup-name" name="name" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <label htmlFor="signup-email" className="text-gray-700">Email:</label>
              <input type="email" id="signup-email" name="email" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

             

              {/* Additional Fields for Physio */}
              <label htmlFor="signup-clinic" className="text-gray-700">Clinic:</label>
              <input type="text" id="signup-clinic" name="clinic" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <label htmlFor="signup-r-number" className="text-gray-700">Registration Number:</label>
              <input type="text" id="signup-r-number" name="r-number" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <label htmlFor="signup-number" className="text-gray-700">Phone Number:</label>
              <input type="text" id="signup-number" name="number" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <label htmlFor="signup-password" className="text-gray-700">Create Password:</label>
              <input type="password" id="signup-password" name="password" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <label htmlFor="confirm-password" className="text-gray-700">Confirm Password:</label>
              <input type="password" id="confirm-password" name="confirm-password" required className="border border-gray-400 p-2 outline-none mb-4 rounded-md" />

              <button type="submit" className="text-white bg-gradient-to-r from-teal-500 to-blue-900 px-9 py-3 rounded-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-800 transition-all">
                Sign Up
              </button>
            </form>

            <div id="error-message" className="text-red-600 mt-4"></div>

           
          </div>
        </section>
      )}
    </div>
  );
};

export default SignUpPage;
