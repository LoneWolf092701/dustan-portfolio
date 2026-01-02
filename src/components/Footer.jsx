// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#915EFF] to-[#4F46E5] flex items-center justify-center font-bold text-white shadow-lg">
                K
              </div>
              <h3 className="text-white text-xl font-bold">Kaladaran</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Full Stack Developer & Game Development Researcher crafting innovative solutions 
              and immersive experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-[#915EFF] transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:kaladaranchanthirakumar@gmail.com"
                className="text-gray-400 hover:text-[#915EFF] transition-colors text-sm flex items-center gap-2"
              >
                <span>✉️</span>
                Email Me
              </a>
              <a
                href="https://github.com/LoneWolf092701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#915EFF] transition-colors text-sm flex items-center gap-2"
              >
                <span>🐙</span>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kaladaran-chanthirakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#915EFF] transition-colors text-sm flex items-center gap-2"
              >
                <span>💼</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Kaladaran Chanthirakumar. All rights reserved.
          </p>
          <div className="flex gap-2 text-gray-500 text-sm">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;