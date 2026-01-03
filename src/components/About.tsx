import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const About = () => {
  const emojis = ["💻", "🎨", "🚀", "✨", "🎯", "🔥"];
  const funFacts = [
    { icon: "☕", text: "Coffee enthusiast", delay: 0.1 },
    { icon: "🌙", text: "Night owl coder", delay: 0.2 },
    { icon: "🎵", text: "Music lover", delay: 0.3 },
    { icon: "📚", text: "Always learning", delay: 0.4 },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 1, 1],
      },
    },
  };

  return (
    <section 
      id="about" 
      className="bg-[#0B1323] from-cream via-white to-cream text-ink py-20 sm:py-24 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {emojis.map((emoji, index) => (
          <motion.div
            key={index}
            className="absolute text-6xl opacity-5"
            style={{
              left: `${15 + index * 15}%`,
              top: `${20 + (index % 2) * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Playful Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-blush-600 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: false }}
            >
              About Me{" "}
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="inline-block"
              >
                👋
              </motion.span>
            </motion.h2>
            <motion.div
              className="flex justify-center gap-2 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: false }}
            >
              {emojis.map((emoji, index) => (
                <motion.span
                  key={index}
                  className="text-3xl cursor-pointer"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.5,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-8 border border-blush-200/50 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blush-400 via-blush-500 to-blush-600"></div>
            
            <div className="relative z-10">
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-muted leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
              >
                Hey there! I'm a{" "}
                <motion.strong 
                  className="text-ink font-bold text-blush-600 relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  passionate developer
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-blush-300 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: false }}
                  />
                </motion.strong>{" "}
                with a strong enthusiasm for building{" "}
                <motion.span
                  className="font-semibold text-blush-600"
                  whileHover={{ scale: 1.05 }}
                >
                  beautiful and functional
                </motion.span>{" "}
                web applications.
              </motion.p>

              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-muted leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false }}
              >
                I enjoy learning new technologies and solving real-world problems. My journey in web development started with{" "}
                <motion.span
                  className="font-semibold text-blush-600 inline-block"
                  whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
                >
                  curiosity
                </motion.span>{" "}
                and has evolved into a professional career where I create{" "}
                <motion.strong 
                  className="text-ink font-bold text-blush-600 relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  engaging and user-friendly interfaces
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-blush-300 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: false }}
                  />
                </motion.strong>
                .
              </motion.p>
            </div>
          </motion.div>

          {/* Fun Facts Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blush-50 to-white rounded-2xl p-6 shadow-lg border border-blush-200/50 text-center group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: fact.delay }}
                viewport={{ once: false }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="text-4xl mb-3"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 0.3,
                  }}
                  whileHover={{
                    rotate: [0, 360],
                    scale: 1.2,
                    transition: { duration: 0.6 },
                  }}
                >
                  {fact.icon}
                </motion.div>
                <p className="text-sm sm:text-base font-semibold text-ink group-hover:text-blush-600 transition-colors">
                  {fact.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
