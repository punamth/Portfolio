import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-cream text-ink py-16 sm:py-18 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-24"
    >
      <div className="text-center text-blush-600 font-md mb-10"
        style={{
          fontSize: '38px',
          lineHeight: '0.8',
        }}>
        {/* About Me Title */}
        <motion.p
          className="bg-cream text-md sm:text-xl md:text-3xl lg:text-4xl font-lg text-blush-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          About Me
        </motion.p>
        <br/>
        {/* About Content */}
        <motion.p 
          className="text-xl sm:text-md text-muted leading-relaxed mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          I'm a <strong className="text-ink font-semibold">passionate developer</strong> with a strong enthusiasm for building beautiful and functional web applications.
          I enjoy learning new technologies and solving real-world problems. My journey in web development started with curiosity
          and has evolved into a professional career where I create <strong className="text-ink font-semibold">engaging and user-friendly interfaces</strong>.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
