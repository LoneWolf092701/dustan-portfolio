// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const services = [
  {
    title: "FULL STACK",
    subtitle: "DEVELOPER",
    description: "End-to-end web applications with React, Node.js, and modern frameworks",
    code: "[0x01]"
  },
  {
    title: "MOBILE",
    subtitle: "ENGINEER",
    description: "Cross-platform experiences with native performance using React Native",
    code: "[0x02]"
  },
  {
    title: "GAME",
    subtitle: "DEVELOPER",
    description: "Procedural generation algorithms and Unity-based immersive experiences",
    code: "[0x03]"
  },
  {
    title: ".NET",
    subtitle: "ARCHITECT",
    description: "Enterprise solutions and CRM platforms with .NET Core ecosystem",
    code: "[0x04]"
  }
];

const ServiceCard = ({ title, subtitle, description, code, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="xs:w-[250px] w-full group"
  >
    <div className="noir-card p-6 min-h-[300px] flex flex-col justify-between backdrop-blur-sm relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
      
      <div className="relative z-10">
        <div className="text-primary text-xs font-mono mb-4">{code}</div>
        <h3 className="text-white text-[18px] font-bold font-mono uppercase mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <h4 className="text-secondary text-[16px] font-bold font-mono uppercase mb-4">
          {subtitle}
        </h4>
        <div className="w-12 h-[2px] bg-primary mb-4" />
        <p className="text-gray-400 text-[13px] leading-relaxed font-mono">
          {description}
        </p>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-primary/10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-[14px] uppercase tracking-widest font-bold font-mono mb-2">
          <span className="text-white">&lt;</span>INTRODUCTION<span className="text-white">/&gt;</span>
        </p>
        <h2 className="text-white font-bold text-[40px] sm:text-[60px] mt-2 font-mono uppercase">
          OVERVIEW<span className="text-primary animate-pulse">_</span>
        </h2>
        <div className="w-24 h-1 bg-primary mt-4 shadow-neon" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 space-y-4"
      >
        <div className="border-l-2 border-primary pl-6">
          <p className="text-gray-300 text-[15px] max-w-4xl leading-[28px] font-mono">
            <span className="text-primary">&gt;</span> SOFTWARE ENGINEERING UNDERGRADUATE AT <span className="text-white font-bold">IIT</span> WITH PROVEN 
            COMMERCIAL EXPERIENCE BUILDING ENTERPRISE CRM PLATFORMS AND FREELANCE BOOKING ENGINES.
          </p>
        </div>
        
        <div className="border-l-2 border-secondary pl-6">
          <p className="text-gray-300 text-[15px] max-w-4xl leading-[28px] font-mono">
            <span className="text-secondary">&gt;</span> STRONG FOUNDATION IN <span className="text-white font-bold">REACT.JS, NODE.JS, .NET ECOSYSTEM</span>. 
            COMBINING TECHNICAL PRECISION WITH CREATIVE PROBLEM-SOLVING.
          </p>
        </div>
        
        <div className="border-l-2 border-primary pl-6">
          <p className="text-gray-300 text-[15px] max-w-4xl leading-[28px] font-mono">
            <span className="text-primary">&gt;</span> PIONEERING RESEARCH IN <span className="text-white font-bold">PROCEDURAL GENERATION ALGORITHMS</span> FOR 
            GAME DEVELOPMENT. PUSHING COMPUTATIONAL CREATIVITY BOUNDARIES.
          </p>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.code} index={index} {...service} />
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { value: "01", label: "YEARS_EXPERIENCE", color: "primary" },
          { value: "10", label: "PROJECTS_COMPLETE", color: "secondary" },
          { value: "3.5", label: "GPA_SCORE", color: "primary" },
          { value: "05", label: "TECH_STACKS", color: "secondary" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="noir-card text-center p-6 backdrop-blur-sm relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className={`text-${stat.color} text-5xl font-bold mb-3 font-mono neon-text`}>{stat.value}</div>
            <div className={`text-gray-500 text-xs uppercase tracking-widest font-mono border-t border-${stat.color}/30 pt-2`}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");