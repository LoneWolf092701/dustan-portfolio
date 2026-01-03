// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const skillCategories = [
  {
    category: "FRONTEND",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Native", level: 80 }
    ]
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js", level: 85 },
      { name: ".NET Core", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    category: "GAME_DEV",
    skills: [
      { name: "Unity Engine", level: 85 },
      { name: "C#", level: 88 },
      { name: "Procedural Gen", level: 90 },
      { name: "3D Graphics", level: 75 }
    ]
  },
  {
    category: "DATABASE",
    skills: [
      { name: "MSSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Azure", level: 75 },
      { name: "Git/GitHub", level: 90 }
    ]
  }
];

const technologies = [
  { name: "JavaScript", code: "JS" },
  { name: "TypeScript", code: "TS" },
  { name: "React", code: "RX" },
  { name: "Node.js", code: "ND" },
  { name: "C#", code: "C#" },
  { name: "Unity", code: "UN" },
  { name: ".NET", code: "NT" },
  { name: "Python", code: "PY" },
  { name: "SQL", code: "DB" },
  { name: "Azure", code: "AZ" },
  { name: "Docker", code: "DK" },
  { name: "Git", code: "GT" }
];

const SkillBar = ({ skill, index, categoryIndex }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.05 }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 font-mono text-sm uppercase tracking-wider">{skill.name}</span>
      <span className="text-primary font-bold font-mono text-sm">[{skill.level}%]</span>
    </div>
    <div className="w-full h-2 bg-noir-800 border border-noir-600 overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
        className="h-full bg-gradient-to-r from-primary to-secondary shadow-neon relative"
      >
        <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
      </motion.div>
      <div className="absolute inset-0 cyber-grid opacity-20" />
    </div>
  </motion.div>
);

const TechBadge = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="noir-card px-4 py-3 backdrop-blur-sm cursor-pointer relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
    <div className="flex items-center gap-3 relative z-10">
      <span className="text-primary font-bold font-mono text-xs border border-primary px-2 py-1">{tech.code}</span>
      <span className="text-white font-medium font-mono text-sm uppercase">{tech.name}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-secondary" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-[14px] uppercase tracking-widest font-bold font-mono mb-2">
          <span className="text-white">&lt;</span>TECH_STACK<span className="text-white">/&gt;</span>
        </p>
        <h2 className="text-white font-bold text-[40px] sm:text-[60px] mt-2 font-mono uppercase">
          SKILLS<span className="text-primary animate-pulse">_</span>
        </h2>
        <div className="w-24 h-1 bg-primary mt-4 shadow-neon" />
      </motion.div>

      {/* Skill Bars */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="noir-card p-8 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 cyber-grid opacity-5" />
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
            
            <div className="relative z-10">
              <h3 className="text-primary text-xl font-bold mb-6 font-mono uppercase tracking-wider flex items-center gap-3">
                <span className="w-2 h-6 bg-primary shadow-neon" />
                {category.category}
              </h3>
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technology Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20"
      >
        <h3 className="text-white text-2xl font-bold mb-8 font-mono uppercase tracking-wider">
          <span className="text-primary">[</span>TECHNOLOGIES<span className="text-primary">]</span>
        </h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {technologies.map((tech, index) => (
            <TechBadge key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Status Display */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 p-6 bg-black border-2 border-primary/30 font-mono text-sm relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-primary font-bold text-2xl mb-1">04</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest">CATEGORIES</div>
          </div>
          <div>
            <div className="text-secondary font-bold text-2xl mb-1">16</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest">CORE_SKILLS</div>
          </div>
          <div>
            <div className="text-primary font-bold text-2xl mb-1">12</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest">TECHNOLOGIES</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");