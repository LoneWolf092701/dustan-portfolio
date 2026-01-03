// src/components/Hero.jsx
import { motion } from "framer-motion";
import HeroCanvas from "../canvas/HeroCanvas";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-black">
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 bg-primary shadow-neon relative">
            <div className="absolute inset-0 bg-primary animate-ping" />
          </div>
          <div className="w-[2px] sm:h-80 h-40 bg-gradient-to-b from-primary via-secondary to-transparent shadow-neon" />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-primary text-sm font-mono tracking-widest">&lt;INITIALIZE&gt;</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-bold text-4xl sm:text-5xl lg:text-7xl font-mono uppercase tracking-tight"
          >
            HI, I'M <span className="neon-text glitch">KALADARAN</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-gray-400 text-base lg:text-xl font-mono max-w-3xl leading-relaxed"
          >
            <p className="mb-2">
              <span className="text-primary">&gt;</span> CRAFTING <span className="text-white">IMMERSIVE 3D EXPERIENCES</span>
            </p>
            <p className="mb-2">
              <span className="text-secondary">&gt;</span> DESIGNING <span className="text-white">INNOVATIVE ALGORITHMS</span>
            </p>
            <p>
              <span className="text-primary">&gt;</span> BUILDING <span className="text-white">SCALABLE FULL-STACK SYSTEMS</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex gap-4 pointer-events-auto flex-wrap"
          >
            <a 
              href="#contact"
              className="cyber-button px-6 py-3 text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform"
            >
              INITIALIZE_CONTACT
            </a>
            <a 
              href="#work"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm clip-path-corner"
            >
              VIEW_PROJECTS
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-primary text-xs font-mono"
          >
            <span className="animate-pulse">[SYSTEM_READY]</span>
          </motion.div>
        </div>
      </div>

      {/* The 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <HeroCanvas />
      </div>

      {/* Scroll Indicator - Cyberpunk Style */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 w-full flex flex-col items-center z-10 gap-2"
      >
        <span className="text-primary text-xs font-mono uppercase tracking-wider">SCROLL</span>
        <button 
          onClick={scrollToNext}
          className="w-[2px] h-[50px] bg-gradient-to-b from-primary to-transparent relative cursor-pointer group"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary shadow-neon"
          />
        </button>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-6 w-16 h-16 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-10 right-6 w-16 h-16 border-b-2 border-r-2 border-secondary/30" />
    </section>
  );
};

export default Hero;