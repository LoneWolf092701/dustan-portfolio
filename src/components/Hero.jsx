// src/components/Hero.jsx
import { motion } from "framer-motion";
import HeroCanvas from "../canvas/HeroCanvas";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      
      {/* Text Overlay */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50" />
          <div className="w-1 sm:h-80 h-40 violet-gradient bg-gradient-to-b from-[#915EFF] via-[#915EFF]/50 to-transparent" />
        </motion.div>

        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-black text-4xl sm:text-5xl lg:text-7xl"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#4F46E5]">Kaladaran</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-gray-300 text-lg lg:text-2xl font-medium max-w-3xl"
          >
            I craft immersive <span className="text-[#915EFF]">3D experiences</span>, 
            design innovative <span className="text-[#915EFF]">game algorithms</span>, 
            <br className="sm:block hidden" />
            and build scalable <span className="text-[#915EFF]">full-stack applications</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex gap-4 pointer-events-auto"
          >
            <a 
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#4F46E5] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#915EFF]/50 transition-all hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#work"
              className="px-8 py-3 bg-transparent border-2 border-[#915EFF] text-[#915EFF] font-semibold rounded-lg hover:bg-[#915EFF]/10 transition-all"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* The 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 w-full flex justify-center items-center z-10"
      >
        <button 
          onClick={scrollToNext}
          className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2 cursor-pointer hover:border-[#915EFF] transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-3 h-3 rounded-full bg-gray-400 mb-1"
          />
        </button>
      </motion.div>
      
    </section>
  );
};

export default Hero;