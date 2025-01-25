import React from "react";
import { Link } from "react-router-dom";


const ContactSection = () => {
  return (
    <section id="myContact" className="bg-blue-900 text-white py-16">
      {/* Contact Form Section */}
      <div className="flex justify-center items-center m-6">
        <div className="inline-block text-center bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section */}
            <div className="bg-teal-500 p-6 flex flex-col justify-center items-center">
              <h2 className="text-3xl tracking-wider font-bold p-4">Let's Chat</h2>
              <p className="p-4 font-semibold">
                Whether you have a question, a concern or simply want to connect.
              </p>
              <p className="p-4 font-semibold">
                Feel free to send us a message in the contact form.
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center items-center p-6">
              <h2 className="text-gray-700 font-bold text-4xl m-6">Contact</h2>
              <form action="#" className="flex flex-col text-black w-full max-w-md">
                <input
                  type="text"
                  id="myName"
                  className="bg-gray-300 p-3 m-3 rounded-md focus:outline-none"
                  placeholder="Name*"
                />
                <input
                  type="text"
                  id="myEmail"
                  className="bg-gray-300 p-3 m-3 rounded-md focus:outline-none"
                  placeholder="Email*"
                />
                <input
                  type="number"
                  id="myNumber"
                  className="bg-gray-300 p-3 m-3 rounded-md focus:outline-none"
                  placeholder="Number*"
                />
                <textarea
                  id="myMessage"
                  cols="10"
                  rows="5"
                  placeholder="Message*"
                  className="bg-gray-300 p-3 m-3 rounded-md focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors duration-300 p-3 m-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="max-w-lg mx-auto text-center m-10">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-6">
          Get the latest news, events, and health tips from PhysioCare Network.
        </p>
        <form
          action="#"
          method="post"
          className="flex flex-col sm:flex-row justify-center items-center m-2"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="p-3 rounded-md mb-4 sm:mb-0 sm:mr-4 text-gray-900 focus:outline-none w-full sm:w-auto"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-500 rounded-md hover:bg-teal-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Horizontal Line */}
      <div className="h-px bg-white my-10 mx-auto w-full"></div>

      <div className="grid grid-cols-4">
        <div className=" col-span-2 flex justify-center">
          {/* Join the Team Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
            <ul>
              <li>
                <Link to="/join-clinics" className="hover:text-gray-400">Clinics</Link>
              </li>
              <li>
                <Link to="/join-therapists" className="hover:text-gray-400">Therapists</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Advertise with Us Section */}
        <div className="col-span-2 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold mb-4">Advertise with Us</h3>
          <ul>
            <li>
              <Link to="/advertise" className="hover:text-gray-400">Advertise Your Clinic</Link>
            </li>
            <li>
              <Link to="/advertise" className="hover:text-gray-400">Advertise as Physio</Link>
            </li>
            <li>
              <Link to="/build-a-website" className="hover:text-gray-400">Build Your Website</Link>
            </li>

          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-900 text-center py-4 mt-8">
        <p className="text-sm text-gray-400">© 2025 P.C.N. All rights reserved.</p>
      </div>

    </section>
  );
};

export default ContactSection;
