import React from "react";
import { Link } from "react-router-dom";

const PhysioSection = () => {
    const physiotherapists = [
        {
            name: "John Doe",
            location: "Nairobi",
            bio: "Specializes in sports injuries and rehabilitation.",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Jane Smith",
            location: "Kisumu",
            bio: "Expert in post-surgery rehabilitation.",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Emily Brown",
            location: "Nakuru",
            bio: "Focuses on athletic performance and recovery.",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                    Our Physiotherapists
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Meet our top-rated physiotherapists, ready to provide you with the best care!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {physiotherapists.map((physio, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <img
                                src={physio.image}
                                alt={physio.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center mb-2">
                                {physio.name}
                            </h3>
                            <p className="text-center text-gray-600 mb-4">{physio.location}</p>
                            <p className="text-center text-gray-500 mb-4">{physio.bio}</p>
                            
                            {/* Sign Up Link */}
                            <div className="text-center mt-4">
                                <Link
                                    to="/signup"
                                    className="text-blue-500 hover:underline transition"
                                >
                                    Book
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhysioSection;
