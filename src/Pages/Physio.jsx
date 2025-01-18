import React, { useState } from "react";
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Properties/Footer";



const Physio = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeProfile, setActiveProfile] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeSlots, setTimeSlots] = useState([]);

    const specialties = [
        { name: "Sports Therapy", id: "sports" },
        { name: "Rehabilitation", id: "rehab" },
        { name: "Pain Management", id: "pain" },
        { name: "Fitness", id: "fitness" },
        { name: "Weight Management", id: "weight" },
    ];

    const physiotherapists = {
        sports: [
            {
                name: "John Doe",
                location: "Nairobi",
                rating: 4.8,
                bio: "Specializes in sports injuries and rehabilitation.",
                experience: "10 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-18", "2025-01-20"],
            },
            {
                name: "Emily Brown",
                location: "Nakuru",
                rating: 4.6,
                bio: "Focuses on athletic performance and recovery.",
                experience: "8 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-19", "2025-01-21"],
            },
        ],
        rehab: [
            {
                name: "Jane Smith",
                location: "Kisumu",
                rating: 4.7,
                bio: "Expert in post-surgery rehabilitation.",
                experience: "12 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-22", "2025-01-24"],
            },
            {
                name: "Tom Wilson",
                location: "Eldoret",
                rating: 4.5,
                bio: "Skilled in mobility restoration and strength training.",
                experience: "7 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-23", "2025-01-25"],
            },
        ],
        pain: [
            {
                name: "Miles J",
                location: "Nakuru",
                rating: 4.2,
                bio: "Expert in pain management",
                experience: "5 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-23", "2025-01-25"],
            },
            {
                name: "Lewis Tomas",
                location: "Nairobi",
                rating: 4.5,
                bio: "Skilled in pain relief.",
                experience: "7 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-23", "2025-01-25"],
            },
        ],
        fitness: [
            {
                name: "James Theo",
                location: "Mombasa",
                rating: 4.3,
                bio: "Expert Fitness trainer",
                experience: "2 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-23", "2025-01-25"],
            },
            {
                name: "Lonah J",
                location: "Nairobi",
                rating: 4.5,
                bio: "Skilled personal trainer.",
                experience: "4 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-23", "2025-01-25"],
            },
        ],
        weight: [
            {
                name: "Tabitha Milly",
                location: "Nakuru",
                rating: 4.2,
                bio: "Expert in weight management",
                experience: "5 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-23", "2025-01-25"],
            },
            {
                name: "Faith M.",
                location: "Eldoret",
                rating: 4.5,
                bio: "Skilled in wightloss Process management",
                experience: "1 years",
                image: "https://via.placeholder.com/150",
                calendar: ["2025-01-23", "2025-01-25"],
            },
        ],
    };

    const handleDateClick = (date, physio) => {
        setSelectedDate(date);
        setTimeSlots(["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"]);
    };

    const filteredPhysios = selectedSpecialty
        ? physiotherapists[selectedSpecialty].filter(
            (physio) =>
                physio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                physio.location.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="sticky top-0 z-20">
                <Navbar />
            </div>

            <div>
                <Sidebar />
            </div>

            <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Find Your Physiotherapist
                </h1>

                {/* Search Bar */}
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search by name or location"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border rounded-lg p-2 w-full max-w-md"
                    />
                </div>

                {/* Specialty Filters */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {specialties.map((specialty) => (
                        <button
                            key={specialty.id}
                            onClick={() => setSelectedSpecialty(specialty.id)}
                            className={`px-4 py-2 border rounded-lg text-sm ${selectedSpecialty === specialty.id
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600"
                                } hover:bg-blue-500 hover:text-white transition`}
                        >
                            {specialty.name}
                        </button>
                    ))}
                </div>

                {/* Physio Listings */}
                {selectedSpecialty && filteredPhysios.length > 0 ? (
                    <ul className="space-y-4">
                        {filteredPhysios.map((physio, index) => (
                            <li
                                key={index}
                                className="border bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
                            >
                                <div className="flex items-start">
                                    <img
                                        src={physio.image}
                                        alt={physio.name}
                                        className="w-16 h-16 rounded-full mr-4"
                                    />
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {physio.name}
                                        </h3>
                                        <p className="text-gray-600">{physio.location}</p>
                                        <div className="flex items-center mt-1">
                                            <span className="text-yellow-400 text-lg">
                                                {"★".repeat(Math.round(physio.rating))}
                                            </span>
                                            <span className="ml-2 text-gray-500">
                                                ({physio.rating.toFixed(1)})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() =>
                                        setActiveProfile(activeProfile === index ? null : index)
                                    }
                                    className="text-blue-600 hover:underline mt-4"
                                >
                                    {activeProfile === index ? "Hide Details" : "View Details"}
                                </button>

                                {activeProfile === index && (
                                    <div className="mt-4 text-gray-600 border-t pt-4">
                                        <p>{physio.bio}</p>
                                        <p>Experience: {physio.experience}</p>
                                        <p>Contact: example@physio.com</p>

                                        <div className="mt-4">
                                            <h4 className="font-bold">Select a Date:</h4>
                                            <Calendar
                                                onChange={(date) => handleDateClick(date, physio)}
                                                tileClassName={({ date }) =>
                                                    physio.calendar.includes(date.toISOString().split("T")[0])
                                                        ? "bg-blue-500 text-white"
                                                        : ""
                                                }
                                                minDetail="month"
                                                className="w-full max-w-xs"
                                            />

                                            {selectedDate && (
                                                <div className="mt-4">
                                                    <h4 className="font-bold">Available Time Slots:</h4>
                                                    <ul className="space-y-2">
                                                        {timeSlots.map((slot, idx) => (
                                                            <li key={idx} className="p-2 border rounded-lg">
                                                                {slot}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            

                                            <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 mt-4">
                                                Book
                                            </button>
                                            <Link
                                                to="/chat"
                                                className="text-blue-500 ml-4 hover:underline mt-4"
                                            >
                                                Message
                                            </Link>
                                           
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">
                        {selectedSpecialty
                            ? "No physiotherapists found for this specialty."
                            : "Please select a specialty to see physiotherapists."}
                    </p>
                )}
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Physio;
