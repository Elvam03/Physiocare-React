import React from "react";

const Community = () => {
  return (
    <section>
      <div className="bg-gray-100 mt-3">
        <h2 className="text-3xl font-bold text-blue-900 text-center p-4">
          Our Community
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-3 text-center p-3">
          Access our forum, give feedback, and browse the frequently asked questions.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-4 items-center justify-center">
          {/* Card 1 */}
          <a href="#" className="flex flex-col justify-center items-center text-center">
            <div className="border border-gray-400 rounded-full p-4">
              <div className="relative w-20 h-20 overflow-hidden">
                {/* Default Image */}
                <img
                  src="/Images/chat1.png"
                  alt="Chat Default"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src="/Images/chat.png"
                  alt="Chat Hover"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
                />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-center">Forum</h3>
            <p className="text-gray-500 text-center p-3">
              A space for users to connect, share experiences, and ask questions about physiotherapy and wellness.
            </p>
          </a>

          {/* Vertical Dotted Line */}
          <div className="block md:hidden h-20 border-l-2 border-dotted border-blue-500"></div>

         {/* Horizontal Dotted Line */}
<div className="hidden md:block w-1/3 max-w-sm mx-auto border-t-2 border-dotted border-blue-500"></div>


          {/* Card 2 */}
          <a href="#" className="flex flex-col justify-center items-center text-center">
            <div className="border border-gray-400 rounded-full p-4">
              <div className="relative w-20 h-20 overflow-hidden">
                {/* Default Image */}
                <img
                  src="/Images/feedbacknew2.png"
                  alt="Feedback Default"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src="/Images/feedbacknew.png"
                  alt="Feedback Hover"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
                />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-center">Feedback</h3>
            <p className="text-gray-500 text-center p-4">
              Share your thoughts and suggestions to help us improve our services.
            </p>
          </a>

          {/* Vertical Dotted Line */}
          <div className="block md:hidden h-20 border-l-2 border-dotted border-blue-500"></div>

           {/* Horizontal Dotted Line */}
<div className="hidden md:block w-1/3 max-w-sm mx-auto border-t-2 border-dotted border-blue-500"></div>
          

          {/* Card 3 */}
          <a href="#" className="flex flex-col justify-center items-center text-center">
            <div className="border border-gray-400 rounded-full p-3">
              <div className="relative w-20 h-20 overflow-hidden">
                {/* Default Image */}
                <img
                  src="/Images/question1.png"
                  alt="FAQ Default"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src="/Images/question.png"
                  alt="FAQ Hover"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
                />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-center">FAQs</h3>
            <p className="text-gray-500 text-center p-3">
              Find answers to the most common questions about physiotherapy and wellness.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
