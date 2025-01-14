import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-900">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <Link to="/" className="text-gray-500 hover:text-gray-800 float-right text-lg">
          ✖
        </Link>
        <h2 className="text-black text-3xl font-semibold text-center mb-10">Log In</h2>
        <form action="/login" method="POST" className="flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mb-6 p-2 bg-gray-100 rounded outline-none text-black"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="mb-6 p-2 bg-gray-100 rounded outline-none text-black"
            required
          />
          <button
            type="submit"
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          <div>
            <a href="forgot-password.html" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
