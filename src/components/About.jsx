// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const services = [
  {
    title: "Full Stack Developer",
    description: "Building end-to-end web applications with React, Node.js, and modern frameworks",
    icon: "🚀"
  },
  {
    title: "React Native Developer",
    description: "Creating cross-platform mobile experiences with native performance",
    icon: "📱"
  },
  {
    title: "Game Developer",
    description: "Designing procedural generation algorithms and Unity-based experiences",
    icon: "🎮"
  },
  {
    title: ".NET Engineer",
    description: "Enterprise solutions and CRM platforms with .NET Core ecosystem",
    icon: "⚙️"
  }
];

const ServiceCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    className="xs:w-[250px] w-full group"
  >
    <div className="relative bg-gradient-to-b from-[#915EFF] to-[#4F46E5] p-[1px] rounded-[20px] shadow-xl group-hover:shadow-[#915EFF]/50 transition-all">
      <div className="bg-slate-900 rounded-[20px] py-8 px-6 min-h-[320px] flex flex-col justify-between items-center backdrop-blur-sm">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-white text-[20px] font-bold text-center mb-3">
          {title}
        </h3>
        <p className="text-gray-400 text-[14px] text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#915EFF] text-[18px] uppercase tracking-wider font-semibold">
          Introduction
        </p>
        <h2 className="text-white font-black text-[40px] sm:text-[50px] mt-2">
          Overview.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6"
      >
        <p className="text-gray-300 text-[17px] max-w-4xl leading-[30px]">
          I am a <span className="text-[#915EFF] font-semibold">Software Engineering undergraduate at IIT</span> with 
          proven commercial experience building enterprise CRM platforms and freelance booking engines. 
          With a strong foundation in <span className="text-[#915EFF] font-semibold">React.js, Node.js, and the .NET ecosystem</span>, 
          I combine technical precision with creative problem-solving to deliver impactful solutions.
        </p>
        <p className="mt-4 text-gray-300 text-[17px] max-w-4xl leading-[30px]">
          Beyond web development, I'm pioneering research in <span className="text-[#915EFF] font-semibold">procedural generation algorithms</span> for 
          game development, pushing the boundaries of what's possible with computational creativity. 
          My work spans from optimizing MSSQL queries to architecting complete full-stack applications.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
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
          { value: "1+", label: "Years Experience" },
          { value: "10+", label: "Projects Completed" },
          { value: "3.5", label: "GPA" },
          { value: "5+", label: "Technologies" }
        ].map((stat, index) => (
          <div key={index} className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-[#915EFF]/50 transition-colors">
            <div className="text-[#915EFF] text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");