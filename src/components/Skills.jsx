// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Native", level: 80 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: ".NET Core", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    category: "Game Development",
    skills: [
      { name: "Unity Engine", level: 85 },
      { name: "C#", level: 88 },
      { name: "Procedural Gen", level: 90 },
      { name: "3D Graphics", level: 75 }
    ]
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MSSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Azure", level: 75 },
      { name: "Git/GitHub", level: 90 }
    ]
  }
];

const technologies = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "C#", icon: "C#" },
  { name: "Unity", icon: "🎮" },
  { name: ".NET", icon: ".NET" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗄️" },
  { name: "Azure", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" }
];

const SkillBar = ({ skill, index, categoryIndex }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.05 }}
    className="mb-4"
  >
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 font-medium">{skill.name}</span>
      <span className="text-[#915EFF] font-semibold">{skill.level}%</span>
    </div>
    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
        className="h-full bg-gradient-to-r from-[#915EFF] to-[#4F46E5] rounded-full shadow-lg shadow-[#915EFF]/50"
      />
    </div>
  </motion.div>
);

const TechBadge = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="px-4 py-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-[#915EFF]/50 transition-all shadow-lg hover:shadow-[#915EFF]/20 cursor-pointer"
  >
    <div className="flex items-center gap-2">
      <span className="text-2xl">{tech.icon}</span>
      <span className="text-white font-medium">{tech.name}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#915EFF] text-[18px] uppercase tracking-wider font-semibold">
          My capabilities
        </p>
        <h2 className="text-white font-black text-[40px] sm:text-[50px] mt-2">
          Skills & Technologies.
        </h2>
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
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm"
          >
            <h3 className="text-[#915EFF] text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#915EFF] to-[#4F46E5] rounded-full" />
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
        <h3 className="text-white text-2xl font-bold mb-8 text-center">
          Technologies I Work With
        </h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {technologies.map((tech, index) => (
            <TechBadge key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");