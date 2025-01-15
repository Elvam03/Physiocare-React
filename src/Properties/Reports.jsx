import React, { useState } from "react";

const Reports = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Health Data",
      content: `BMI: 23.5\nBlood Pressure: 120/80\nHeart Rate: 72 bpm\n`,
    },
    {
      title: "Exercise Routines",
      content: `Routine 1: Morning Yoga\nRoutine 2: Strength Training\nRoutine 3: Evening Walk\n`,
    },
    {
      title: "Progress",
      content: `Days Completed: 15\nGoals Achieved: Weight loss - 2 kg\nMedals: Silver Medal for Consistency\n`,
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6 bg-gray-100">
        <div>
        <h3 className="text-center m-4 text-blue-900 font-semibold text-3xl">Here are your reports:</h3>
      </div>
      <div className="book-container">
        <div className="book-page">
          <h2 className="text-xl font-bold mb-4">{pages[currentPage].title}</h2>
          <div className="page-content">
            {pages[currentPage].content.split("\n").map((line, index) => (
              <div key={index}>
                {line}
                <div className="line"></div> {/* Line break between content */}
              </div>
            ))}
          </div>
          <div className="page-number">Page {currentPage + 1}</div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Reports;
