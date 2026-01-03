// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/95 border-b border-primary/30 shadow-neon" : "bg-transparent"
    }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        
        {/* Logo / Name - Cyberpunk Style */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-black border-2 border-primary flex items-center justify-center font-bold text-primary shadow-neon clip-path-corner">
              K
            </div>
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />
          </div>
          <div>
            <p className="text-white text-[18px] font-bold cursor-pointer flex items-center terminal-text">
              <span className="neon-text">&gt;</span> KALADARAN
              <span className="ml-3 text-gray-500 text-[12px] sm:block hidden font-mono">
                [FULL_STACK_DEV]
              </span>
            </p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="list-none hidden sm:flex flex-row gap-8"
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className={`${
                active === link.title ? "text-primary" : "text-gray-400"
              } hover:text-primary text-[16px] font-medium cursor-pointer transition-all relative group uppercase tracking-wider`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="flex items-center gap-2">
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">[</span>
                {link.title}
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">]</span>
              </a>
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                active === link.title ? "w-full shadow-neon" : "w-0 group-hover:w-full"
              }`} />
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu (Hamburger) - Cyber Style */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-10 h-10 flex flex-col justify-center items-center cursor-pointer relative z-50 border border-primary/50 hover:border-primary transition-all"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2px] bg-primary transition-all duration-300 ${toggle ? 'rotate-45 translate-y-[3px]' : ''} shadow-neon`} />
            <span className={`w-6 h-[2px] bg-primary my-1 transition-all duration-300 ${toggle ? 'opacity-0' : ''} shadow-neon`} />
            <span className={`w-6 h-[2px] bg-primary transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-[3px]' : ''} shadow-neon`} />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-screen w-[75vw] bg-black border-l-2 border-primary/50 shadow-neon-strong"
              >
                <div className="absolute inset-0 cyber-grid opacity-20" />
                <ul className="list-none flex flex-col gap-6 p-8 pt-24 relative z-10">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`${
                        active === link.title ? "text-primary" : "text-gray-400"
                      } text-[18px] font-medium cursor-pointer hover:text-primary transition-colors uppercase tracking-wider border-l-2 border-transparent hover:border-primary pl-4`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`} className="flex items-center gap-2">
                        <span className="text-primary">&gt;</span>
                        {link.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;