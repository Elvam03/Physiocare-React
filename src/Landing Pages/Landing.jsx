import React, { useState } from "react";
import { NavbarMenu } from '../Data/data'
import ResponsiveMenu from '../Properties/ResponsiveMenu';
import Features from "../Sections/FeaturesSection";
import ResourceCenter from "../Sections/ResourceCenter";
import CommunitySection from "../Sections/CommunitySection";
import SocialProof from "../Sections/SocialProof";
import ContactSection from "../Sections/ContactSection";
import { Link } from "react-router-dom";
import FacilitySection from "../Sections/FacilitySection";






const Landing = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            {/* Wrapper */}
            <div className="flex justify-evenly md:grid md:grid-cols-3 pt-2">
                {/* Top Segment */}
                <div className="ml-5 mt-2 flex justify-start">
                    <img
                        src="/Images/logo.png"
                        alt="Logo"
                        className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                    />
                </div>
                <div className="text-center">
                    {/* Title */}
                    <span className="text-2xl lg:text-4xl text-blue-800 font-semibold pr-2">
                        PhysioCare
                    </span>
                    <span className="text-2xl lg:text-4xl text-teal-500 font-semibold">
                        Network
                    </span>
                    <div className="text-center">
                        {/* Subtitle */}
                        <span className="text-sm sm:text-base lg:text-lg text-gray-400">
                            Making you better
                        </span>
                    </div>
                </div>
                <div className="hidden md:flex flex-row justify-end items-center ">
                    {/* Icons */}
                    <img className="h-9 w-9 m-2 border-gray-900 border-2 m-2 rounded-md p-1 cursor-pointer transition-transform duration-300 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md hover:shadow-gray-400" src="/Images/facebook.png" alt="icon" />
                    <img
                        className="h-9 w-9 m-2 border-gray-900 border-2 m-2 rounded-md p-1 cursor-pointer transition-transform duration-300 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md hover:shadow-gray-400"
                        src="/Images/insta.png"
                        alt="icon"
                    />
                    <img
                        className="h-9 w-9 border-gray-900 border-2 m-2 rounded-md p-1 cursor-pointer transition-transform duration-300 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-md hover:shadow-gray-400"
                        src="/Images/twitter.png"
                        alt="icon"
                    />
                </div>
            </div>

            {/* Navbar */}
            <div className='overflow-x-hidden lg:overflow-y-hidden text-white mt-4 sticky top-0 z-20'>
                <nav className='bg-gradient-to-l from-teal-500 to-blue-900'>
                    <div className='container grid grid-cols-2 lg:grid-cols-9 items-center'>
                        <div className="flex lg:items-center ipad-pro:text-2xl text-3xl m-4 font-bold tracking-wider">
                            <h3>P.C.N</h3>
                        </div>

                        {/*Menu section */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center justify-around w-full mx-3'>
                                {
                                    NavbarMenu.map((item) => {
                                        return (
                                            <li key={item.id} className='p-4 ipad-pro:px-3 lg:p-7 hover:bg-white hover:text-gray-800 transition ease-out duration-500'>
                                                <a href={item.link}>{item.title}</a>

                                            </li>

                                        )
                                    })
                                }

                            </ul>
                        </div>

                        {/*SignIn section */}
                        <div

                            className={`lg:col-span-2 lg:flex justify-end lg:items-center absolute top-0 right-5 py-5 hidden lg:block`}
                        >
                            <Link
                                to="/login"
                                className="logIn"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/signup"
                                className="signUp"
                            >
                                Sign Up
                            </Link>

                        </div>

                        {/*Mobile bugger section */}
                        <div
                            className="cursor-pointer lg:hidden flex justify-end pr-5"
                            onClick={() => {
                                setOpen(!open)
                            }}

                        >
                            <img
                                src="/Images/burger.png"
                                alt="burgerImage"
                                className="w-7 h-7"
                            />
                        </div>

                    </div>
                </nav>

            </div>
            {/* Mobile Sidebar section*/}
            <div>
                <ResponsiveMenu open={open} setOpen={setOpen} />
            </div>


            {/* Main Content */}
            <main id="home">
                <div
                    className="h-screen bg-scroll md:bg-fixed bg-cover bg-center"
                    style={{ backgroundImage: "url('/Images/landing img.jpg')" }}
                >
                    <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl text-white font-bold">
                                Welcome to PhysioCare Network
                            </h2>
                            <h2 className="text-lg text-white font-semibold">
                                Connecting you to top physiotherapy resources
                            </h2>
                            <div className="mt-6 space-x-4">
                                <a
                                    href="#"
                                    className="inline-block py-3 px-6 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-300"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="#"
                                    className="inline-block py-3 px-6 py-2 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-teal-700 transition-colors duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* About Section */}
            <section id="about" className="py-10 px-4 bg-white">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 px-8 py-4 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-500 mb-8">
                            About Us
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Our platform is dedicated to connecting physiotherapists, patients, and healthcare facilities, creating a comprehensive resource for all things related to physical therapy. We aim to support physiotherapists with a space to share, download, and exchange exercise programs and resources. Hospitals can showcase their services and vacancies.
                        </p>
                        <p className="text-lg text-gray-700">
                            For patients, our platform offers easy appointment booking, access to recommended exercises, and physiotherapy resources.
                        </p>
                        <div className="m-7">
                            <a
                                href="#"
                                className="bg-blue-900 text-white font-semibold rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300 p-3"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block w-px bg-gray-300 mx-4"></div>
                    <div className="md:w-1/2 px-8 py-4 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Our mission is to provide comprehensive and compassionate care that focuses on the physical, mental, and emotional well-being of our patients. We aim to empower individuals to reach their full potential, recover from injuries, and live their best life with confidence.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            We believe in a patient-centered approach to healthcare, where everyone can find reliable resources, professional guidance, and opportunities for physical rehabilitation and growth.
                        </p>
                        <div className="m-7">
                            <a
                                href="#"
                                className="bg-teal-500 text-white font-semibold rounded-md hover:bg-blue-900 hover:text-white transition-colors duration-300 p-3"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

         {/* Features Section */}
         <section id="features" className="bg-gray-100 py-6 px-4 text-center my-4">
                <h1 className="text-4xl font-bold text-blue-900 my-8">Features</h1>
                <p className="text-gray-400 max-w-lg mx-auto">
                    Create an account and expolore various features.
                </p>
                {/* Services cards */}

                <div className="mt-4">
                    <Features />
                </div>

            </section>
            

            {/* Resources Section */}
            <section id="resources" className="my-4 py-6">
                <div>
                    <ResourceCenter />

                </div>
            </section>

            


            {/*Facilities */}
            <section id="facilities">

                <div>
                    <FacilitySection />
                </div>
            </section>


            {/* Community Section */}
            <div className="" id="community" >
                <CommunitySection />

            </div>

            {/* Social Proof Section */}
            <div>
                <SocialProof />

            </div>
            {/* Contact Section */}
            <div id="contact">
                <ContactSection />
            </div>

        </div>
    );
};

export default Landing;
