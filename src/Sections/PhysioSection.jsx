import React from "react";
import { Link } from "react-router-dom";

const PhysioSection = () => {
    const physiotherapists = [
        {
            name: "John Doe",
            location: "Nairobi",
            bio: "Specializes in sports injuries and rehabilitation.",
            image: "/Images/physio2.jpg",
        },
        {
            name: "Jane Smith",
            location: "Kisumu",
            bio: "Expert in post-surgery rehabilitation.",
            image: "",
        },
        {
            name: "Emily Brown",
            location: "Nakuru",
            bio: "Focuses on athletic performance and recovery.",
            image: "",
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                    Our Therapists
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Discover the experts who can help you achieve your health and wellness goals.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {physiotherapists.map((physio, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col md:flex-row"
                        >
                            {/* Image Section */}
                            <div className="md:w-1/3">
                                <img
                                    src={physio.image || "/placeholder.jpg"}
                                    alt={physio.name}
                                    className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                    {physio.name}
                                </h3>
                                <p className="text-gray-600 mb-2">{physio.location}</p>
                                <p className="text-gray-500 mb-4">{physio.bio}</p>

                                {/* Call-to-Action */}
                                <div className="mt-4">
                                    <Link
                                        to="/login"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition inline-block"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhysioSection;
