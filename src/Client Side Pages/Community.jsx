import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";

const Community = () => {
    const navigate = useNavigate();

    const cards = [
        {
            title: "Forum",
            description: "Join discussions and connect with others.",
            color: "bg-blue-400",
            link: "/forum",
        },
        {
            title: "News & Blogs",
            description: "Stay updated with the latest news and blogs.",
            color: "bg-green-400",
            link: "/news-blogs",
        },
        {
            title: "Articles",
            description: "Find helpful resources and tools.",
            color: "bg-yellow-400",
            link: "/resource-center",
        },
        {
            title: "Feedback",
            description: "Share your feedback and suggestions.",
            color: "bg-purple-400",
            link: "/feedback",
        },
        {
            title: "FAQs",
            description: "Get answers to frequently asked questions.",
            color: "bg-red-400",
            link: "/faqs",
        },
    ];


    return (
        <div className="bg-gray-100 min-h-screen">
             <div className="sticky top-0 z-20">
                <Navbar/>

            </div>
            <div>
                <Sidebar/>
            </div>
        
        <div className="container mx-auto p-4">

            <h1 className="text-3xl font-bold text-center mb-6">Community Section</h1>
            <p className="text-gray-400 text-lg text-center m-3">Get access to the following:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-lg text-white ${card.color} cursor-pointer hover:scale-105 transform transition duration-300`}
                        onClick={() => navigate(card.link)}
                    >
                        <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                        <p className="text-sm">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Community;
