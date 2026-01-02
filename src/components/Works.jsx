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
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl sm:w-[360px] w-full border border-slate-700 hover:border-[#915EFF]/50 transition-all hover:shadow-xl hover:shadow-[#915EFF]/20 overflow-hidden">
        
        {/* Project Image Container */}
        <div className="relative w-full h-[230px] mb-5 overflow-hidden rounded-xl">
          {/* Placeholder with gradient */}
          <div className="w-full h-full bg-gradient-to-br from-[#915EFF]/20 to-[#4F46E5]/20 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-slate-900/50" />
            <div className="relative z-10 text-6xl opacity-30">{["🌐", "🎮", "💼"][index % 3]}</div>
          </div>

          {/* Overlay on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex items-end justify-center p-4"
              >
                <div className="flex gap-3">
                  {source_code_link && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(source_code_link, "_blank")}
                      className="px-4 py-2 bg-slate-800 hover:bg-[#915EFF] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg"
                    >
                      <span>📂</span>
                      Code
                    </motion.button>
                  )}
                  {live_link && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(live_link, "_blank")}
                      className="px-4 py-2 bg-[#915EFF] hover:bg-[#4F46E5] text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg"
                    >
                      <span>🔗</span>
                      Live
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Details */}
        <div>
          <h3 className="text-white font-bold text-[24px] mb-2 group-hover:text-[#915EFF] transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-3 py-1 text-[13px] font-medium rounded-full bg-slate-800/80 ${tag.color} border border-slate-700`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#915EFF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#915EFF] text-[18px] uppercase tracking-wider font-semibold">
          My work
        </p>
        <h2 className="text-white font-black text-[40px] sm:text-[50px] mt-2">
          Projects.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex"
      >
        <p className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]">
          The following projects showcase my skills and experience through real-world examples. 
          Each project demonstrates my ability to solve complex problems, work with different technologies, 
          and manage projects effectively. Every project includes brief descriptions with links to code repositories 
          and live demos where available.
        </p>
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
        <p className="text-gray-400 text-lg mb-4">
          Want to see more of my work?
        </p>
        <a
          href="https://github.com/LoneWolf092701"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#4F46E5] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#915EFF]/50 transition-all hover:scale-105"
        >
          <span>📦</span>
          Visit My GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "");