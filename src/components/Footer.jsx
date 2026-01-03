// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-primary/30 mt-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-black border-2 border-primary flex items-center justify-center font-bold text-primary shadow-neon font-mono text-xl">
                  K
                </div>
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold font-mono uppercase tracking-wider">
                  KALADARAN
                </h3>
                <p className="text-primary text-xs font-mono">[DEVELOPER]</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-mono max-w-sm border-l-2 border-primary/30 pl-4">
              &gt; FULL STACK DEVELOPER & GAME DEVELOPMENT RESEARCHER CRAFTING INNOVATIVE SOLUTIONS 
              AND IMMERSIVE EXPERIENCES.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-mono uppercase text-sm tracking-wider flex items-center gap-2">
              <span className="w-2 h-4 bg-primary" />
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-primary transition-colors text-xs font-mono uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-mono uppercase text-sm tracking-wider flex items-center gap-2">
              <span className="w-2 h-4 bg-secondary" />
              CONNECT
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:kaladaranchanthirakumar@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors text-xs font-mono flex items-center gap-2 group"
              >
                <span className="text-primary group-hover:text-secondary transition-colors">[EMAIL]</span>
                <span className="truncate">kaladaranchanthirakumar@gmail.com</span>
              </a>
              <a
                href="https://github.com/LoneWolf092701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-xs font-mono flex items-center gap-2 group"
              >
                <span className="text-primary group-hover:text-secondary transition-colors">[GITHUB]</span>
                LoneWolf092701
              </a>
              <a
                href="https://linkedin.com/in/kaladaran-chanthirakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-xs font-mono flex items-center gap-2 group"
              >
                <span className="text-primary group-hover:text-secondary transition-colors">[LINKEDIN]</span>
                kaladaran-chanthirakumar
              </a>
            </div>

            {/* Status */}
            <div className="mt-6 p-3 bg-noir-900 border border-primary/30 font-mono text-xs">
              <p className="text-primary flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                AVAILABLE_FOR_HIRE
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-mono">
            © {currentYear} KALADARAN_CHANTHIRAKUMAR. ALL_RIGHTS_RESERVED.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
            <span>BUILT_WITH</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary"
            >
              [♥]
            </motion.span>
            <span>REACT + TAILWIND + THREE.JS</span>
          </div>
        </div>

        {/* Version info */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs font-mono">
            <span className="text-primary">&gt;</span> VERSION: 2.0.0 | BUILD: NOIR_EDITION | STATUS: STABLE
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/20" />
    </footer>
  );
};

export default Footer;