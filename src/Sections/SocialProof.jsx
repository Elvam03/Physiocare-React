import React, { useState, useEffect } from "react";

const SocialProof = () => {
  const testimonials = [
    {
      platform: "Twitter",
      icon: "/Images/xicon.png",
      comment: "This platform has transformed my journey to wellness! #LifeChanger",
      author: "@JohnDoe",
    },
    {
      platform: "Instagram",
      icon: "/Images/instagram.jpeg",
      comment: "Loving the exercises! They're easy to follow and super effective 💪.",
      author: "@FitJane",
    },
    {
      platform: "Twitter",
      icon: "/Images/xicon.png",
      comment: "Highly recommend this platform for anyone seeking quality physiotherapy.",
      author: "@HealthyTyler",
    },
    {
      platform: "Instagram",
      icon: "/Images/instagram.jpeg",
      comment: "The tips and insights shared here are top-notch! 🌟",
      author: "@WellnessGuru",
    },
    {
      platform: "Twitter",
      icon: "/Images/xicon.png",
      comment: "Thanks to this platform, I’m finally making progress in my recovery!",
      author: "@RecoveryRoad",
    },
    {
      platform: "Facebook",
      icon: "/Images/FacebookIcon.png",
      comment: "Got in an accident, wasn't sure if I would ever recover till I came across this platform.",
      author: "@RecoveryRoad",
    },
    {
      platform: "Twitter",
      icon: "/Images/xicon.png",
      comment: "Helped me with my weight-loss journey.",
      author: "@WellnessGuru",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-10 px-5 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* Left: Vertical Scrolling Testimonials */}
        <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
            What Our Users Say
          </h3>
          <div
            className="relative overflow-hidden"
            style={{ height: "120px" }} // Restrict height to match a single slide
          >
            <div
              className="absolute w-full transition-transform duration-500"
              style={{
                transform: `translateY(-${currentIndex * 120}px)`, // Adjust slide height here
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4"
                  style={{ height: "120px" }} // Match slide height to container
                >
                  <img
                    src={testimonial.icon}
                    alt={testimonial.platform}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                    <p className="text-sm text-gray-500">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Social Media Feed */}
        <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
            Find Us on Social Media
          </h3>
          <div className="flex flex-col ">
            <div className="flex justify-center gap-3">
              <img
                className="socialIcons bg-white"
                src="/Images/facebook.png"
                alt="icon"
              />
              <img
                className="socialIcons bg-white"
                src="/Images/insta.png"
                alt="icon"
              />
              <img
                className="socialIcons bg-white"
                src="/Images/twitter.png"
                alt="icon"
              />

            </div>

            <div className="flex justify-center gap-3">
              <img
                className="socialIcons bg-white"
                src="/Images/telegram.png"
                alt="icon"
              />
              <img
                className="socialIcons bg-white"
                src="/Images/linkedin.png"
                alt="icon"
              />

            </div>

            <div className="flex justify-center">

              <img
                className="socialIcons bg-white"
                src="/Images/whatsapp.png"
                alt="icon"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;
