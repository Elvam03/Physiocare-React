import React, { useState } from "react";
import Navbar from "../Properties/Navbar";
import Sidebar from "../Properties/Sidebar";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [myExercises, setMyExercises] = useState([]);
  const [showOptions, setShowOptions] = useState(null); // For burger menu
  const [selectedExercise, setSelectedExercise] = useState(null); // For modal

  const allExercises = [
    { id: 1, name: "Push-Up", target: "Upper Body", description: "A basic upper-body exercise.", image: "/Images/push ups.jpg" },
    { id: 2, name: "Squat", target: "Legs", description: "Strengthens the legs and core.", image: "/Images/squat.jpg" },
    { id: 3, name: "Plank", target: "Core", description: "Core stability exercise.", image: "/Images/plank.jpg" },
    { id: 4, name: "Lunge", target: "Legs", description: "Improves balance and leg strength.", image: "/Images/lunge.jpg" },
    { id: 5, name: "Bicep Curl", target: "Arms", description: "Strengthens the biceps.", image: "/Images/bicep curl.jpg" },
    { id: 6, name: "Deadlift", target: "Back", description: "Improves posture and back strength.", image: "/Images/deadlift.jpg" },
  ];

  const handleAddToMyExercises = (exercise) => {
    if (!myExercises.some((e) => e.id === exercise.id)) {
      setMyExercises((prev) => [...prev, exercise]);
    }
    setShowOptions(null); // Close the burger menu
  };

  const handleRemoveFromMyExercises = (exercise) => {
    setMyExercises((prev) => prev.filter((e) => e.id !== exercise.id));
  };

  const handleWatchExercise = (exercise) => {
    alert(`Watching ${exercise.name}`);
    setShowOptions(null); // Close the burger menu
  };

  const handleViewDetails = (exercise) => {
    setSelectedExercise(exercise);
  };

  const closeModal = () => {
    setSelectedExercise(null);
  };

  const filteredExercises = allExercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      <div>
        <Sidebar />
      </div>

      <div className="p-6 min-h-screen bg-gray-100 text-black">
        {/* Search Input */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* My Exercises Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">My Videos</h2>
          {myExercises.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myExercises.map((exercise) => (
                <div key={exercise.id} className="p-4 bg-white shadow-md rounded-lg relative">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="h-32 w-full object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-bold text-lg">{exercise.name}</h3>
                  <p className="text-sm text-gray-600">{exercise.description}</p>
                  <p className="text-sm text-gray-500">Target: {exercise.target}</p>
                  <div className="flex justify-between items-center gap-2 mt-2">
                    <button
                      onClick={() => handleWatchExercise(exercise)}
                      className="px-4 py-2 bg-teal-500 text-white rounded-md"
                    >
                      Watch
                    </button>
                    <button
                      onClick={() => handleRemoveFromMyExercises(exercise)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No exercises added yet.</p>
          )}
        </div>

        {/* Exercise Library Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Exercise Library</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => (
              <div key={exercise.id} className="p-4 bg-white shadow-md rounded-lg relative">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="h-32 w-full object-cover rounded-lg mb-2"
                />
                <h3 className="font-bold text-lg">{exercise.name}</h3>
                <p className="text-sm text-gray-600">{exercise.description}</p>
                <p className="text-sm text-gray-500">Target: {exercise.target}</p>

                {/* Burger Button */}
                <div className="absolute top-2 right-2">
                  <div className="relative">
                    <button
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      onClick={() => setShowOptions(showOptions === exercise.id ? null : exercise.id)}
                    >
                      <span className="sr-only">Options</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v.01M12 12v.01M12 18v.01"
                        />
                      </svg>
                    </button>
                    {showOptions === exercise.id && (
                      <div className="absolute right-0 bg-white w-52 shadow-md rounded-lg p-2 z-10">
                        <button
                          onClick={() => handleAddToMyExercises(exercise)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Add to My Exercises
                        </button>
                        <button
                          onClick={() => handleWatchExercise(exercise)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Watch
                        </button>
                        <button
                          onClick={() => handleViewDetails(exercise)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          View Details
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Details */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{selectedExercise.name}</h3>
            <p><strong>Target:</strong> {selectedExercise.target}</p>
            <p><strong>Description:</strong> {selectedExercise.description}</p>
            <br />
            <p>For our offline option, you can download and the watch the videos from our YouTube page</p>

            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
