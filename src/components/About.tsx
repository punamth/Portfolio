import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-gray-200 text-black py-20 min-h-screen flex items-center justify-center px-6 lg:px-25"
    >
      <div className="container text-center max-w-4xl">
        {/* About Me Title */}
        <motion.h1
          className="text-9xl font-extrabold text-pink-600"
          style={{ fontSize: '32px', marginLeft: '-1rem' }} 
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
          className="text-xl text-gray-700 leading-relaxed mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          I'm a <strong className="text-black font-semibold">self-taught developer</strong> with a passion for building beautiful and functional web applications.
          I enjoy learning new technologies and solving real-world problems. My journey in web development started with curiosity
          and has evolved into a professional career where I create <strong className="text-black font-semibold">engaging and user-friendly interfaces</strong>.
        </motion.p>
      </div>
    </section>
  );
};

export default About;