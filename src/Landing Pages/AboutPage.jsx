import React from "react";
import Navbar from "../Properties/Navbar";
import { Link } from "react-router-dom";



const AboutPage = () => {
    return (
        <div>
            <div className="sticky top-0 z-20">
                <div className="fixed top-4 left-4 z-50">
                    <Link
                        to="/"
                        className=""
                    >
                        <img src="/Images/back.png" alt="" className="h-8 w-8 md:h-12 md:w-12" />
                    </Link>

                </div>
                <div className="">
                    <Navbar />

                </div>
            </div>


            <div className="bg-gray-100 text-gray-800 px-4 py-8 sm:px-8 md:px-16">
                {/* Header Section */}
                <header className="text-center mb-8">

                    <div className="flex justify-center gap-3">
                        <img src="/Images/logo.png" alt="Logo" className="h-10 w-10" />
                        <h1 className="text-4xl font-bold text-teal-500">P.C.N</h1>


                    </div>
                    <p className="mt-2 text-lg text-gray-600">
                        Discover how we’re transforming physiotherapy for everyone.
                    </p>
                </header>

                {/*About Us */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">About Us</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our platform is dedicated to connecting physiotherapists, patients, and healthcare facilities, creating a comprehensive resource for all things related to physical therapy. We aim to empower physiotherapists with tools to share, download, and exchange exercise programs, research, and resources, fostering collaboration and continuous learning. Hospitals can showcase their services, advertise vacancies, and connect with top-tier professionals, creating a seamless bridge between healthcare providers and physiotherapists.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        For patients, our platform offers easy appointment booking, personalized exercise recommendations, and an extensive library of physiotherapy resources to support their recovery, rehabilitation, and overall wellness journey. With user-friendly tools like progress trackers, virtual consultations, and educational content, we ensure patients have the guidance they need every step of the way.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Our platform also serves as a vibrant community hub, encouraging open discussions, testimonials, and shared experiences. Patients can gain motivation and insights from others, while physiotherapists and clinics can engage with their audience through blogs, news updates, and interactive forums.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Whether you're a professional seeking a collaborative space, a hospital looking to expand your reach, or a patient striving for better health, our platform is here to empower, connect, and support you on your physical therapy journey. Together, we’re building a stronger, healthier community.
                    </p>

                </section>


                {/* Our Mission */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to provide comprehensive and compassionate care that focuses on the physical, mental, and emotional well-being of our patients. We strive to empower individuals to recover from injuries, achieve their goals, and live their best lives with confidence and independence.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        We believe in a patient-centered approach to healthcare, where every individual has access to reliable resources, professional guidance, and opportunities for physical rehabilitation and personal growth. By fostering collaboration between patients, physiotherapists, and healthcare facilities, we aim to create a supportive environment where recovery and wellness are within everyone’s reach.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Our mission extends beyond care—it's about building a community that inspires resilience, encourages knowledge sharing, and promotes holistic health. Through innovation, accessibility, and a commitment to excellence, we are dedicated to transforming the way physiotherapy is experienced, empowering lives one step at a time.
                    </p>
                </section>

                {/* Vision Statement */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our vision is to revolutionize physiotherapy by creating a globally connected ecosystem that empowers professionals and patients alike, setting a new standard for accessibility and quality in physical rehabilitation.
                    </p>
                </section>

                {/* Core Values */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">Core Values</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-2"><strong>Collaboration:</strong> Bringing together professionals, facilities, and patients.</li>
                        <li className="mb-2"><strong>Empathy:</strong> Understanding and addressing individual needs.</li>
                        <li className="mb-2"><strong>Innovation:</strong> Leveraging technology to enhance physical therapy experiences.</li>
                        <li className="mb-2"><strong>Integrity:</strong> Providing reliable, trustworthy resources.</li>
                    </ul>
                </section>

                {/* Our Story */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our journey began with a simple yet powerful idea: to bridge the gap between physiotherapists, patients, and healthcare providers through technology. As physiotherapy professionals ourselves, we saw the need for a unified platform to empower healing and growth.
                    </p>
                </section>

                {/* Features Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">Features Overview</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-2">Personalized Tools: Progress trackers, BMI calculators, and goal-setting features.</li>
                        <li className="mb-2">Community Hub: Forums, testimonials, and social proof.</li>
                        <li className="mb-2">Virtual Consultations: Seamless booking and access to experts.</li>
                        <li className="mb-2">Resources Library: Articles, exercise guides, and videos for professionals and patients.</li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-4">Join Us</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Join us on our mission to transform lives through physiotherapy. Explore resources, connect with experts, and take the next step in your wellness journey today.
                    </p>

                    <Link
                        to="/signup"
                        className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Get Started
                    </Link>
                </section>
            </div>

        </div>

    )
}

export default AboutPage