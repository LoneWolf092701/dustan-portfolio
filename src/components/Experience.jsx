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
    className="flex flex-col md:flex-row gap-4 mb-12 relative group"
  >
    {/* Timeline Line and Dot */}
    <div className="flex flex-col items-center mr-4 md:mr-8 relative">
      <motion.div 
        whileHover={{ scale: 1.3 }}
        className="w-6 h-6 rounded-full bg-gradient-to-br from-[#915EFF] to-[#4F46E5] border-4 border-slate-900 shadow-lg shadow-[#915EFF]/50 relative z-10"
      >
        <div className="absolute inset-0 rounded-full bg-[#915EFF] animate-ping opacity-20" />
      </motion.div>
      {index !== experiences.length - 1 && (
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-1 bg-gradient-to-b from-[#915EFF] to-transparent my-2 absolute top-6"
          style={{ minHeight: "80px" }}
        />
      )}
    </div>

    {/* Content Card */}
    <motion.div 
      whileHover={{ scale: 1.02, translateY: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl w-full hover:shadow-xl hover:shadow-[#915EFF]/20 transition-all border border-slate-700 group-hover:border-[#915EFF]/50 backdrop-blur-sm"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-white text-[24px] font-bold mb-1 group-hover:text-[#915EFF] transition-colors">
            {experience.title}
          </h3>
          <p className="text-gray-300 text-[18px] font-semibold flex items-center gap-2">
            <span className="text-[#915EFF]">@</span>
            {experience.company_name}
          </p>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="inline-block px-4 py-2 bg-[#915EFF]/10 text-[#915EFF] text-[14px] rounded-full font-medium border border-[#915EFF]/30">
            {experience.date}
          </span>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {experience.points.map((point, idx) => (
          <motion.li
            key={`experience-point-${idx}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
            className="text-gray-300 text-[15px] pl-6 tracking-wide leading-relaxed flex items-start gap-3"
          >
            <span className="text-[#915EFF] mt-1 flex-shrink-0">▹</span>
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>

      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/0 via-[#915EFF]/5 to-[#915EFF]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#915EFF] text-[18px] uppercase tracking-wider font-semibold">
          What I have done so far
        </p>
        <h2 className="text-white font-black text-[40px] sm:text-[50px] mt-2">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative">
        {/* Background decorative element */}
        <div className="absolute left-0 top-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915EFF] rounded-full blur-[100px]" />
        </div>

        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");