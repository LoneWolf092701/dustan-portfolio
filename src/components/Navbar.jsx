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
    <nav className={`w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-xl" : "bg-transparent"
    }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        
        {/* Logo / Name */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#915EFF] to-[#4F46E5] flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-[#915EFF]/50 transition-all">
            K
          </div>
          <div>
            <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
              Kaladaran
              <span className="ml-2 text-gray-400 text-[14px] sm:block hidden">
                Full Stack Developer
              </span>
            </p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="list-none hidden sm:flex flex-row gap-10"
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className={`${
                active === link.title ? "text-[#915EFF]" : "text-gray-300"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-all relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#915EFF] transition-all duration-300 ${
                active === link.title ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu (Hamburger) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-10 h-10 flex flex-col justify-center items-center cursor-pointer relative z-50"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${toggle ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-screen w-[75vw] bg-slate-900/98 backdrop-blur-md shadow-2xl"
              >
                <ul className="list-none flex flex-col gap-6 p-8 pt-24">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`${
                        active === link.title ? "text-[#915EFF]" : "text-gray-300"
                      } text-[20px] font-medium cursor-pointer hover:text-white transition-colors`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
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