import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-cream text-ink py-16 sm:py-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24"
    >
      <div className="text-center text-blush-600 font-md mb-10"
        style={{
          fontSize: '38px',
          lineHeight: '1.2',
        }}>
        {/* About Me Title */}
        <motion.h1
          className="bg-cream text-2xl sm:text-xl md:text-6xl lg:text-7xl font-semibold text-blush-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          About Me
        </motion.h1>
        <br />
        {/* About Content */}
        <motion.p 
          className="text-xl sm:text-md text-muted leading-relaxed mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          I'm a <strong className="text-ink font-semibold">self-taught developer</strong> with a passion for building beautiful and functional web applications.
          I enjoy learning new technologies and solving real-world problems. My journey in web development started with curiosity
          and has evolved into a professional career where I create <strong className="text-ink font-semibold">engaging and user-friendly interfaces</strong>.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
