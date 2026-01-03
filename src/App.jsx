// src/App.jsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from "./canvas/StarsCanvas";

const App = () => {
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <div className="relative z-0 bg-black font-mono">
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      {/* Matrix Stars Background */}
      <div className="fixed inset-0 z-0">
        <StarsCanvas />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;