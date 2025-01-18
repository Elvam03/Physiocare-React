import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-600 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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

                    {/* Advertise with Us Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Advertise with Us</h3>
                        <ul>
                            <li>
                                <Link to="/advertise" className="hover:text-gray-400">Advertise Your Clinic</Link>
                            </li>
                            <li>
                                <Link to="/build-a-website" className="hover:text-gray-400">Build Your Website</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul>
                            <li>
                                <Link to="/contact" className="hover:text-gray-400">Get in Touch</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="hover:text-gray-400">Frequently Asked Questions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-900 text-center py-4 mt-8">
                <p className="text-sm text-gray-400">© 2025 P.C.N. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
