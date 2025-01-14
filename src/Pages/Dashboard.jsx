import Sidebar from "../Properties/Sidebar";
import Navbar from "../Properties/Navbar";

const Dashboard = () => {
    // Placeholder for streak data and former challenge status
    const streakCount = "5🔥"; // Example streak count
    const previousChallengeAttempted = true; // Example status

    return (
        <div>
            {/* Navbar */}
            <div className="sticky top-0 z-20">
                <Navbar />
            </div>

            {/* Sidebar */}
            <div>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-blue-50 p-6">
                {/* Welcome Section */}
                <div className="bg-blue-100 p-4 rounded-lg mb-6 shadow-md">
                    <h2 className="text-2xl font-bold my-4">Welcome Back!</h2>

                    <h2 className="text-lg font-semibold pt-4">Daily Health Tip</h2>
                    <p className="text-gray-600 mt-2">
                        “Drink at least 8 glasses of water daily to stay hydrated.”
                    </p>
                </div>

                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Daily Challenge Section */}
                    <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Daily Challenge</h2>
                        <p className="text-gray-600">
                            Complete 15 minutes of stretching today to earn your next badge!
                        </p>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Streak:</h3>
                            <p className="text-green-600 font-bold">{streakCount} days</p>
                        </div>

                        {/* Badges */}
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Badges:</h3>
                            <div className="flex space-x-4 mt-2">
                                {/* Earned Badge */}
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                                    🏅
                                </div>
                                {/* Locked Badge */}
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
                                    🔒
                                </div>
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
                                    🔒
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Keep going to unlock more badges!</p>
                        </div>

                        {/* Motivational Quote */}
                        <div className="mt-4 bg-blue-50 p-4 rounded-md">
                            <p className="italic text-gray-700">"Small steps make big changes."</p>
                        </div>

                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Start Challenge
                        </button>
                    </div>

                    {/* Upcoming Appointments Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
                        <ul className="space-y-4">
                            <li className="flex justify-between">
                                <span>Consultation with Dr. Smith</span>
                                <span className="text-gray-500">Jan 15, 10:00 AM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Physical Therapy Session</span>
                                <span className="text-gray-500">Jan 18, 2:00 PM</span>
                            </li>
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                            View All Appointments
                        </button>
                    </div>

                    {/* Symptom Checker Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Symptom Checker</h2>
                        <p className="text-gray-600">
                            Feeling unwell? Use our symptom checker to get advice tailored to your symptoms.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                            Check Symptoms
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
