import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [showForm, setShowForm] = useState(null);
  const navigate = useNavigate();

  const handleFormSwitch = (formType) => {
    setShowForm(formType);
  };

  const handleClientSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const clientData = Object.fromEntries(formData.entries());

    // Save data to localStorage or pass via state
    localStorage.setItem('profileData', JSON.stringify(clientData));
    navigate('/profile'); // Redirect to profile page
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    
    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    
    // Redirect to the Profile page or any other page after successful sign-in
    // history.push('/profile'); // If you're using react-router
  };
  

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-900 min-h-screen p-4">
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
        </div>
      </div>

      {showForm === 'client' && (
        <section
          id="signUp-client"
          className="min-h-screen flex items-center justify-center px-4 sec mb-5"
        >
          <div className="bg-white p-8 rounded-md w-full max-w-lg">
            <h2 className="text-black text-3xl font-semibold mb-6 text-center">Sign Up</h2>
            <form className="flex flex-col space-y-6" onSubmit={handleClientSignUp}>
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
                className="text-white bg-gradient-to-r from-teal-500 to-blue-900 px-9 py-3 rounded-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-800 transition-all"
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default SignUpPage;
