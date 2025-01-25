import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";



const Services = () => {
  const services = [
    {
      id: 1,
      title: "Exercise Library",
      description: "Access and download a wide variety of therapeutic exercises tailored to your needs.",

    },
    {
      id: 2,
      title: "Progress",
      description: "Monitor your journey with detailed insights into your goals, achievements, overall progress, and access personalized treatment plans designed by our physiotherapists.",

    },
    {
      id: 3,
      title: "Appointments",
      description: "Easily book appointments and review your appointment history with your preferred physiotherapist.",

    },
    {
      id: 4,
      title: "Clinics",
      description: "Find information about our clinics, including contact details and directions to our locations.",

    },
    {
      id: 5,
      title: "Virtual Consultations",
      description: "Consult with our expert physiotherapists online, participate in live exercise sessions, or join Q&A webinars—all from the comfort of your home.",

    },
    {
      id: 6,
      title: "Symptom Checker",
      description: "Enter your symptoms to receive personalized advice and recommended next steps.",

    },
    {
      id: 7,
      title: "Daily Health Challenges",
      description: "Take on daily fitness or health challenges to stay motivated and active.",

    },
  ];

  return (
    <section className="relative bg-gray-100 text-white my-5">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-96"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="relative">
              {/* Background Image with Overlay */}
              <div
                className="w-full h-96 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/Images/bgservices.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gray-600 opacity-80"></div>
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-8 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg md:text-xl text-white">
                  {service.description}
                </p>
                <Link
                  to="/signup"
                  className="mt-6 text-lg font-semibold text-blue-500 hover:underline"
                >
                  Sign Up / Log In
                </Link>
               
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      
    </section>
  );
};

export default Services;
