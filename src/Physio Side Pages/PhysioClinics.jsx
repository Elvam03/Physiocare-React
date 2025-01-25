import PhysioSidebar from "../Properties/PhysioSidebar";
import Navbar from "../Properties/Navbar";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Properties/Footer";

const PhysioClinics = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("");

    const clinics = [
        { name: "City Clinic", location: "Nairobi", specialty: "Fitness", rating: 4.5 },
        { name: "Wellness Hospital", location: "Nakuru", specialty: "Rehabilitation", rating: 4.2 },
        { name: "Sunshine Medical", location: "Eldoret", specialty: "Sports", rating: 4.7 },
        { name: "KeepFit Center", location: "Nairobi", specialty: "Weight Management", rating: 4.7 },
    ];

    const advertisements = [
        { title: "Premium Care Clinic", link: "#", image: "/Images/hospital1.jpg", description: "Advanced treatments with top doctors." },
        { title: "Health First Medical", link: "#", image: "/Images/hospital2.jpg", description: "Your health, our priority." },
        { title: "Family Wellness Center", link: "#", image: "/Images/hospital3.jpg", description: "Comprehensive family health services." },
    ];

    const locations = ["Nairobi", "Eldoret", "Nakuru"];

    
    
    
    const filteredClinics = clinics.filter((clinic) => {
        return (
            (searchTerm === "" || clinic.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedSpecialty === "" || clinic.specialty.includes(selectedSpecialty)) &&
            (selectedLocation === "" || clinic.location === selectedLocation) // Add this line
        );
    });
    

    const specialties = [
        { id: "fitness", name: "Fitness" },
        { id: "rehabilitation", name: "Rehabilitation" },
        { id: "sports", name: "Sports Therapy" },
        { id: "weight", name: "Weight Management" },
    ];


    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="sticky top-0 z-20">
                <Navbar/>

            </div>
            <div>
                <PhysioSidebar/>
            </div>

            <div>
            <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
                    {/* Advertisements Section */}
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mb-10 mt-5">
                        <h3 className="text-2xl font-semibold text-center m-3 text-gray-500">Sponsored Clinics:</h3>
                        <Slider {...settings}>
                            {advertisements.map((ad, index) => (
                                <div key={index} className="border rounded-lg shadow-lg p-4">
                                    <img src={ad.image} alt={ad.title} className="w-full h-48 object-cover rounded-md mb-2" />
                                    <h3 className="text-lg font-semibold">{ad.title}</h3>
                                    <p className="text-gray-600 text-sm">{ad.description}</p>
                                    <a
                                        href={ad.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline mt-2 block"
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Search Bar */}
                    <div className="flex space-x-4 mb-4 mt-7">
                        <input
                            type="text"
                            placeholder="Search for clinics"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md w-full"
                        />
                        <select
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select Specialty</option>
                            {specialties.map((specialty) => (
                                <option key={specialty.id} value={specialty.name}>
                                    {specialty.name}
                                </option>
                            ))}
                        </select>

                    </div>

                    {/* Clinic Locations as Links */}
                    <h1 className="text-2xl font-semibold text-center m-3 text-gray-500">Clinics by Location:</h1>
                    <div className="flex flex-wrap justify-center space-x-6 mb-6">
                        {locations.map((location) => (
                            <button
                                key={location}
                                onClick={() => setSelectedLocation(location)}
                                className={`text-blue-600 hover:underline ${selectedLocation === location ? "font-bold" : ""}`}
                            >
                                Clinics in {location}
                            </button>
                        ))}
                    </div>

                    {/* Clinic Listings */}
                    <h2 className="text-xl font-bold mb-4">
                        {selectedLocation ? `Clinics in ${selectedLocation}` : "All Clinics"}
                    </h2>
                    {filteredClinics.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredClinics.map((clinic, index) => (
                                <div key={index} className="border p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg font-semibold">{clinic.name}</h3>
                                    <p className="text-sm text-gray-500">Location: {clinic.location}</p>
                                    <p className="text-sm text-gray-500">Specialty: {clinic.specialty}</p>
                                    <p className="text-sm text-gray-500">Rating: {clinic.rating}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No clinics found for the selected location.</p>
                    )}
                </div>
            </div>

            <div>
                <Footer/>
            </div>

                
            </div>

        
    )
}

export default PhysioClinics;