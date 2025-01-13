import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open, setOpen }) => {
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          ref={sidebarRef}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-0 w-full md:w-1/2 h-screen z-20"
        >
          <div className="text-xl bg-gradient-to-l from-teal-500 to-blue-900 text-white py-2 m-6 rounded-xl flex flex-col">
            <ul className="flex flex-col justify-center items-center gap-5">
              {[
                "Home",
                "About",
                "Services",
                "Resources",
                "Community",
                "Contact",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-white hover:text-gray-600 px-14 py-2"
                  onClick={() => setOpen(false)} // Close sidebar on link click
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>

            {/* SignIn section */}
            <div className="flex justify-between items-center my-6">
              <a href="#" className="logIn ml-10">
                Log In
              </a>
              <a href="#" className="signUp mr-10">
                Sign Up
              </a>
            </div>

            <div className="flex justify-center my-2 md:hidden">
              <img
                className="socialIcons bg-white"
                src="/Images/facebook.png"
                alt="icon"
              />
              <img
                className="socialIcons bg-white"
                src="/Images/insta.png"
                alt="icon"
              />
              <img
                className="socialIcons bg-white"
                src="/Images/twitter.png"
                alt="icon"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
