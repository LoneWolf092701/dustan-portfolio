// src/components/Works.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";

const ProjectCard = ({ index, name, description, tags, source_code_link, live_link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="noir-card p-6 sm:w-[360px] w-full backdrop-blur-sm overflow-hidden relative">
        
        {/* Background pattern */}
        <div className="absolute inset-0 cyber-grid opacity-5" />
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
        
        <div className="relative z-10">
          {/* Project Number */}
          <div className="text-primary text-xs font-mono font-bold mb-4 border border-primary px-2 py-1 inline-block">
            [PROJECT_{String(index + 1).padStart(2, '0')}]
          </div>

          {/* Project Image Container */}
          <div className="relative w-full h-[200px] mb-5 overflow-hidden border-2 border-noir-700 group-hover:border-primary/50 transition-all">
            {/* Placeholder with pattern */}
            <div className="w-full h-full bg-gradient-to-br from-noir-900 to-noir-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-10" />
              <div className="relative z-10 text-6xl opacity-20 font-bold font-mono text-primary">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Scan line effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary shadow-neon animate-scan opacity-50" />
            </div>

            {/* Overlay on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/90 flex items-center justify-center gap-3"
                >
                  {source_code_link && (
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(source_code_link, "_blank")}
                      className="cyber-button px-4 py-2 text-xs font-bold uppercase tracking-wider"
                    >
                      [CODE]
                    </motion.button>
                  )}
                  {live_link && (
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(live_link, "_blank")}
                      className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-black transition-all border-2 border-white"
                    >
                      [LIVE]
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-white font-bold text-[20px] mb-3 group-hover:text-primary transition-colors font-mono uppercase">
              {name}
            </h3>
            <div className="w-12 h-[2px] bg-primary mb-3" />
            <p className="text-gray-400 text-[13px] leading-relaxed font-mono">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-black border ${tag.color} border-current`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto relative">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 border border-primary/10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-[14px] uppercase tracking-widest font-bold font-mono mb-2">
          <span className="text-white">&lt;</span>PORTFOLIO<span className="text-white">/&gt;</span>
        </p>
        <h2 className="text-white font-bold text-[40px] sm:text-[60px] mt-2 font-mono uppercase">
          PROJECTS<span className="text-primary animate-pulse">_</span>
        </h2>
        <div className="w-24 h-1 bg-primary mt-4 shadow-neon" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex"
      >
        <div className="mt-6 border-l-2 border-primary pl-6">
          <p className="text-gray-300 text-[15px] max-w-3xl leading-[28px] font-mono">
            <span className="text-primary">&gt;</span> THE FOLLOWING PROJECTS SHOWCASE REAL-WORLD PROBLEM-SOLVING, 
            TECHNOLOGY IMPLEMENTATION, AND PROJECT MANAGEMENT CAPABILITIES. EACH INCLUDES CODE REPOSITORIES 
            AND LIVE DEMONSTRATIONS WHERE AVAILABLE.
          </p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="noir-card p-8 inline-block backdrop-blur-sm">
          <p className="text-gray-400 text-sm mb-6 font-mono uppercase tracking-wider">
            <span className="text-primary">[</span>MORE_PROJECTS_AVAILABLE<span className="text-primary">]</span>
          </p>
          <a
            href="https://github.com/LoneWolf092701"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button px-8 py-3 text-sm font-bold uppercase tracking-wider inline-block"
          >
            ACCESS_GITHUB_REPO
          </a>
        </div>
      </motion.div>

      {/* Project stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 p-6 bg-black border border-primary/30 font-mono text-xs"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-primary font-bold text-xl mb-1">{projects.length}</div>
            <div className="text-gray-500 uppercase tracking-widest">TOTAL_PROJECTS</div>
          </div>
          <div>
            <div className="text-secondary font-bold text-xl mb-1">100%</div>
            <div className="text-gray-500 uppercase tracking-widest">COMPLETION_RATE</div>
          </div>
          <div>
            <div className="text-primary font-bold text-xl mb-1">FULL</div>
            <div className="text-gray-500 uppercase tracking-widest">STACK_COVERAGE</div>
          </div>
          <div>
            <div className="text-secondary font-bold text-xl mb-1">OPEN</div>
            <div className="text-gray-500 uppercase tracking-widest">SOURCE_STATUS</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "");