import React, { useState } from "react";
import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";
import { Link, useLocation } from "react-router-dom";



const Progress = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [plans, setPlans] = useState([]);
    const [completedPlans, setCompletedPlans] = useState([]);

    // Predefined data for dropdowns and video recommendations
    const goals = ["Lose Weight", "Build Muscle", "Improve Flexibility", "Increase Stamina"];
    const bodyParts = ["Arms", "Legs", "Core", "Back", "Full Body"];
    const videos = {
        "Lose Weight": {
            Arms: ["Arm Fat Burn - 10 Min", "Tone Your Arms - 15 Min"],
            Legs: ["Leg Slimming Workout - 20 Min", "Jump Squats for Fat Loss"],
            Core: ["Abs Blast - 15 Min", "Cardio Core - 25 Min"],
            Back: ["Back Fat Burn - 10 Min", "Strengthen Your Back - 20 Min"],
            "Full Body": ["Full Body HIIT - 30 Min", "Total Body Burn - 25 Min"],
        },
        "Build Muscle": {
            Arms: ["Bicep Curls - 12 Min", "Tricep Dips - 15 Min"],
            Legs: ["Leg Press Strength - 20 Min", "Weighted Lunges"],
            Core: ["Plank Variations - 10 Min", "Core Strength - 20 Min"],
            Back: ["Pull-Ups for Strength - 15 Min", "Deadlifts Basics"],
            "Full Body": ["Strength Circuit - 30 Min", "Full Body Weights - 25 Min"],
        },
        // Add more goal-based recommendations here
    };

    const handleAddPlan = (plan) => {
        setPlans([...plans, plan]);
        setIsModalOpen(false);
    };

    return (
        <div className="">
            <div className="sticky top-0 z-20">
                <Navbar />

            </div>
            <div>
                <Sidebar />
            </div>



            <div className="p-6 lg:p-10 bg-gray-100 overflow-x-hidden">
                {/* Main Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Profile Details */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="User Profile"
                                className="rounded-full w-24 h-24"
                            />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">James Austin</h2>
                                <div className="mt-3 flex gap-4">
                                    <Link
                                        to="/profile"
                                        className="px-4 py-2 bg-teal-500 text-white text-sm rounded-lg"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to="/"
                                        className="text-blue-500 flex items-center"
                                    >
                                        Share
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-800">Health Stats</h3>
                            <ul className="space-y-3 mt-4">
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Days Present:</span>
                                    <span className="font-bold text-blue-500">20</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Exercises Completed:</span>
                                    <span className="font-bold text-blue-500">15</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Weight Lost:</span>
                                    <span className="font-bold text-blue-500">3kg</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Graph Tracking Progress */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Progress Tracker</h3>
                        <div className="flex justify-center">
                            <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-gray-500">Graph Placeholder</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-sm text-gray-600 text-center">Tracking metrics like BMI, weight, and flexibility.</p>
                        </div>
                    </div>
                </div>

                {/* Recommended Exercises */}
                <div className="bg-white shadow-md rounded-lg mt-8 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Exercises</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Exercise Cards */}
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                                <h4 className="text-md font-semibold text-gray-700">Exercise {index + 1}</h4>
                                <p className="text-sm text-gray-500">Duration: 20 mins</p>
                                <div className="mt-2">
                                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">New</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Start Personalized Plan */}
                <div className="bg-white shadow-md rounded-lg mt-8 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Start Personalized Plan</h3>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Add Plan
                    </button>
                </div>

                {/* My Plans */}
                <div className="bg-white shadow-md rounded-lg mt-8 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">My Plans</h3>
                    <ul className="space-y-4">
                        {plans.map((plan, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <div>
                                    <h4 className="text-md font-semibold">{plan.goal}</h4>
                                    <p className="text-sm text-gray-500">{`Target: ${plan.bodyPart}`}</p>
                                    <p className="text-sm text-gray-500">{`Start Date: ${plan.startDate}`}</p>
                                    <p className="text-sm text-gray-500">Recommended Videos:</p>
                                    <ul className="text-sm text-gray-700 list-disc ml-5">
                                        {plan.videos.map((video, i) => (
                                            <li key={i}>{video}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button
                                    className="px-2 md:px-4 py-1 bg-teal-500 text-white text-sm rounded-lg"
                                    onClick={() => {
                                        setCompletedPlans([...completedPlans, plan]);
                                        setPlans(plans.filter((_, i) => i !== index));
                                    }}
                                >
                                    Mark Complete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Modal for Adding Plan */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-4 mx-5 rounded-lg w-96">
                            <h3 className="text-lg font-semibold mb-4">Set Your Plan</h3>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    const goal = formData.get("goal");
                                    const bodyPart = formData.get("bodyPart");
                                    const startDate = formData.get("startDate");
                                    const selectedVideos = videos[goal][bodyPart] || [];
                                    const newPlan = { goal, bodyPart, startDate, videos: selectedVideos };
                                    handleAddPlan(newPlan);
                                }}
                            >
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600">Goal</label>
                                    <select name="goal" className="w-full p-2 border rounded-lg" required>
                                        <option value="">Select Goal</option>
                                        {goals.map((goal, index) => (
                                            <option key={index} value={goal}>
                                                {goal}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600">Body Part</label>
                                    <select name="bodyPart" className="w-full p-2 border rounded-lg" required>
                                        <option value="">Select Body Part</option>
                                        {bodyParts.map((part, index) => (
                                            <option key={index} value={part}>
                                                {part}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600">Start Date</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        className="w-full p-2 border rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-300 text-sm rounded-lg"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg"
                                    >
                                        Set Plan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Progress;
