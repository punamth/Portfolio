import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import profileImage from "../assets/Punam.jpg";

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
      className="bg-gray-200 text-black min-h-screen flex items-center justify-center"
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
              <span className="text-lg sm:text-4xl text-black font-semibold">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl font-bold leading-tight text-primary mt-4"
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
                <span className="text-4xl sm:text-5xl text-pink-600 font-bold">
                  <Typewriter
                    words={["Punam Thokar."]}
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

            {/* Title */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className="text-2xl sm:text-3xl font-semibold text-black">
                Frontend <span className="text-pink-600">Developer</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-gray-700 mt-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              I'm a passionate Frontend Developer who builds interactive and
              responsive websites using modern web technologies. I create
              user-friendly digital experiences.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Link
                to="/projects"
                className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="relative w-full max-w-sm mx-auto"
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
                className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
              <motion.div
                className="absolute top-1/4 -right-8 w-4 h-4 bg-pink-300 rounded-full shadow-lg"
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