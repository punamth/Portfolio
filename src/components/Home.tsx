import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/Punam.png";

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animation when component mounts
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    });
  }, [controls]);

  return (
    <section
      id="home"
      className="bg-cream text-ink min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
          >
            <motion.div
              className="flex items-start justify-center md:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-lg sm:text-4xl text-ink font-semibold">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-5xl font-bold leading-tight text-blush-600 mt-4 break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="text-3xl sm:text-5xl text-blush-600 font-bold">
                  <Typewriter
                    words={["Punam Thokar"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </motion.span>
            </motion.h1>
            <br/>

            {/* Title */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className="text-lg sm:text-2xl font-bold text-ink">
                 I am a <span className="text-2xl sm:text-3xl text-blush-600 font-bold">Web Developer</span> based in Nepal.
              </p>
            </motion.div>
            <br/>
               <div className="flex flex-row gap-8">
                {/* View Projects Button */}
                <a
                  href="#projects"
                  className="bg-blush-600 text-gray-800 px-8 py-4 rounded-lg font-semibold shadow hover:bg-blush-700 flex items-center justify-center transform scale-[1.2] transition-transform duration-200"
                >
                  View Projects
                </a>

                {/* Contact Button */}
                <a
                  href="#contact"
                  className="bg-blush-600 text-gray-800 px-8 py-4 rounded-lg font-semibold shadow hover:bg-blush-700 flex items-center justify-center gap-2 transform scale-[1.2] transition-transform duration-200"
                >
                  Contact Me
                  <i className="fa-solid fa-envelope"></i>
                </a>
               </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 px-4 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm mx-auto overflow-visible"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={profileImage}
                alt="Punam Thokar"
                className="w-full object-cover rounded-full shadow-2xl border-4 border-white"
              />

              {/* Decorative Dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blush-500 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blush-400 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
              <motion.div
                className="absolute top-1/4 -right-8 w-4 h-4 bg-blush-300 rounded-full shadow-lg"
                animate={{ x: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;