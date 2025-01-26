import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ResourcePage() {
  const { scrollY } = useScroll();

  // Check screen size to adjust parallax speed
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Tailwind `md` breakpoint
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adjust parallax speed based on screen size
  const y = useTransform(
    scrollY,
    [0, 500],
    [0, isSmallScreen ? -100 : -200] // Slower for small screens
  );

  return (
    <div className="relative h-[200vh] overflow-hidden bg-black">
      {/* Parallax Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/landing img.jpg')",
          y,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 h-[200vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Scroll to See the Parallax Effect
          </h1>
          <p className="mt-4 text-white text-base md:text-lg">
            This parallax effect adjusts for smaller screens.
          </p>
        </div>
      </div>
    </div>
  );
}

