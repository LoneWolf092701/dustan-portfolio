// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="flex flex-col md:flex-row gap-6 mb-12 relative group"
  >
    {/* Timeline */}
    <div className="flex flex-col items-center mr-4 md:mr-8 relative">
      <motion.div 
        whileHover={{ scale: 1.2 }}
        className="w-6 h-6 bg-black border-2 border-primary shadow-neon relative z-10 flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-primary animate-pulse" />
      </motion.div>
      {index !== experiences.length - 1 && (
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent my-2 absolute top-6 shadow-neon"
          style={{ minHeight: "80px" }}
        />
      )}
    </div>

    {/* Content Card */}
    <motion.div 
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      className="noir-card p-6 w-full backdrop-blur-sm relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Corner markers */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div className="flex-1">
            <h3 className="text-white text-[20px] font-bold mb-2 group-hover:text-primary transition-colors font-mono uppercase">
              {experience.title}
            </h3>
            <p className="text-gray-300 text-[16px] font-semibold flex items-center gap-2 font-mono">
              <span className="text-primary">&gt;</span>
              {experience.company_name}
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <div className="inline-block px-4 py-2 bg-black border border-primary/50 text-primary text-[12px] font-mono uppercase tracking-wider">
              {experience.date}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-primary via-secondary to-transparent mb-4" />

        <ul className="space-y-3">
          {experience.points.map((point, idx) => (
            <motion.li
              key={`experience-point-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
              className="text-gray-400 text-[14px] tracking-wide leading-relaxed flex items-start gap-3 font-mono"
            >
              <span className="text-primary mt-1 flex-shrink-0 font-bold">[{idx + 1}]</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Glitch effect on hover */}
      <div className="absolute inset-0 border border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-32 h-32 border border-primary/10" />
      <div className="absolute bottom-10 right-0 w-48 h-48 border border-secondary/10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-[14px] uppercase tracking-widest font-bold font-mono mb-2">
          <span className="text-white">&lt;</span>CAREER_PATH<span className="text-white">/&gt;</span>
        </p>
        <h2 className="text-white font-bold text-[40px] sm:text-[60px] mt-2 font-mono uppercase">
          EXPERIENCE<span className="text-primary animate-pulse">_</span>
        </h2>
        <div className="w-24 h-1 bg-primary mt-4 shadow-neon" />
      </motion.div>

      <div className="mt-20 flex flex-col relative">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>

      {/* Terminal output style footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 p-4 bg-black border border-primary/30 font-mono text-xs text-primary"
      >
        <p><span className="text-secondary">&gt;</span> TOTAL_EXPERIENCE: 1+ YEARS</p>
        <p><span className="text-secondary">&gt;</span> STATUS: ACTIVELY_SEEKING_OPPORTUNITIES</p>
        <p><span className="text-secondary">&gt;</span> AVAILABILITY: OPEN_FOR_COLLABORATION</p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");