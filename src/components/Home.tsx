import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/Punam.png";

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    });
  }, [controls]);

  return (
    <section 
      id="home" 
      className="bg-[#0B1323] min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 relative z-10">

            {/* Greeting */}
            <div className="flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#D9A441]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typewriter
                  words={["Punam Thokar"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </motion.span>
            </motion.h1>

            {/* Title & Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold">
                I am a{" "}
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#D9A441] font-bold">
                  Software developer
                </span>{" "}
                based in Nepal.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium leading-relaxed">
                I love turning ideas into real, usable products.
                I am passionate about technology, clean code, and building solutions that 
                make an impact.
              </p>
               </div>
             <div className="flex flex-row gap-6 mt-10 justify-center md:justify-start">
      
                {/* View Projects Button */}
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-[#0B1323] px-2 py-1 rounded-lg font-semibold md:text-lg sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 relative z-20" /* Added relative z-20 */
                >
                  View Projects
                  <i className="fa-solid fa-angle-down"></i>
                </a>

                {/* Contact Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#c28f2f] text-[#0B1323] px-2 py-1 rounded-lg font-semibold md:text-lg sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 hover:bg-[#d4a540] relative z-20" /* Added relative z-20 */
                >
                  Contact Me
                  <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 pointer-events-none" /* Added pointer-events: none */
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-100 lg:h-100 overflow-visible"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={profileImage}
                alt="Punam Thokar"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white pointer-events-auto" /* Added pointer-events: auto */
              />
            </motion.div>
          </motion.div>
         
        </div>
      </div>
    </section>
  );
}

export default Home;