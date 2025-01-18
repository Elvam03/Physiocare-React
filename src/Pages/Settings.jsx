import React from "react";
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";
import { Link } from "react-router-dom";

const settingsData = [
    { title: "Name", subtitle: "Number", image: "#", link: "#" },
    { title: "Account", subtitle: "Log Out, Info, Delete Account", link: "#" },
    { title: "Chats", subtitle: "Theme, Wallpaper", link: "#" },
    { title: "Privacy", subtitle: "Profile", link: "#" },
    { title: "Notifications", subtitle: "Email", link: "#" },
    { title: "Payments", subtitle: "Subscriptions", link: "#" },
    { title: "Help", subtitle: "Help Center, Contact Us, Policy", link: "#" },
];

const SettingItem = ({ title, subtitle, image, link }) => (
    <Link to={link}>
        <div className="py-5 m-2 flex gap-4 hover:bg-gray-50 items-center px-4 rounded-lg transition duration-300 ease-in-out">
            {image && <img src={image} alt="Avatar" className="h-12 w-12 rounded-full" />}
            <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-800">{title}</p>
                <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
        </div>
    </Link>
);

const Settings = () => {
    return (
        <div className="bg-gray-100 h-full">
            <div className="sticky top-0 z-20">
                <Navbar />
            </div>
            <div>
                <Sidebar />
            </div>

            <div className=" flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col w-full mx-4 mb-5 md:w-1/2 mt-7">
                    <h3 className="text-gray-600 font-semibold text-xl mb-6">Settings</h3>

                    {settingsData.map((setting, index) => (
                        <div key={index}>
                            <SettingItem {...setting} />
                            {index < settingsData.length - 1 && <hr className="border-t border-gray-300 my-2" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings;
