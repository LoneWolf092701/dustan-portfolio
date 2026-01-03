// src/components/Contact.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "NAME_REQUIRED";
    if (!form.email.trim()) {
      newErrors.email = "EMAIL_REQUIRED";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "EMAIL_INVALID";
    }
    if (!form.message.trim()) newErrors.message = "MESSAGE_REQUIRED";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex-[0.75] noir-card p-8 backdrop-blur-sm relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 cyber-grid opacity-5" />
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/50" />
        
        <div className="relative z-10">
          <p className="text-primary text-[14px] uppercase tracking-widest font-bold font-mono mb-2">
            <span className="text-white">&lt;</span>INITIALIZE_CONNECTION<span className="text-white">/&gt;</span>
          </p>
          <h3 className="text-white font-bold text-[40px] sm:text-[50px] mb-6 font-mono uppercase">
            CONTACT<span className="text-primary animate-pulse">_</span>
          </h3>
          <div className="w-24 h-1 bg-primary mb-8 shadow-neon" />

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 font-mono uppercase text-sm tracking-wider">
                [NAME_INPUT]
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="&gt; ENTER_YOUR_NAME"
                className={`bg-black py-4 px-6 placeholder:text-gray-600 text-white font-mono outline-none border-2 ${
                  errors.name ? "border-red-500" : "border-primary/50 focus:border-primary"
                } transition-colors shadow-neon-green/20`}
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-2 font-mono">&gt; ERROR: {errors.name}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 font-mono uppercase text-sm tracking-wider">
                [EMAIL_INPUT]
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="&gt; ENTER_YOUR_EMAIL"
                className={`bg-black py-4 px-6 placeholder:text-gray-600 text-white font-mono outline-none border-2 ${
                  errors.email ? "border-red-500" : "border-primary/50 focus:border-primary"
                } transition-colors shadow-neon-green/20`}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-2 font-mono">&gt; ERROR: {errors.email}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 font-mono uppercase text-sm tracking-wider">
                [MESSAGE_INPUT]
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="&gt; ENTER_YOUR_MESSAGE"
                className={`bg-black py-4 px-6 placeholder:text-gray-600 text-white font-mono outline-none border-2 ${
                  errors.message ? "border-red-500" : "border-primary/50 focus:border-primary"
                } resize-none transition-colors shadow-neon-green/20`}
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-2 font-mono">&gt; ERROR: {errors.message}</span>
              )}
            </label>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`cyber-button py-3 px-8 outline-none w-full sm:w-fit text-white font-bold uppercase tracking-wider transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "[TRANSMITTING...]" : "[SEND_MESSAGE]"}
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-primary/10 border-2 border-primary"
              >
                <p className="text-primary font-medium font-mono text-sm">
                  &gt; SUCCESS: MESSAGE_TRANSMITTED_SUCCESSFULLY
                </p>
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div className="noir-card w-full h-full flex flex-col justify-center p-8 backdrop-blur-sm relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 cyber-grid opacity-5" />
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50" />
          
          <div className="text-center space-y-6 relative z-10">
            <div className="text-6xl mb-6 text-primary neon-text">[ ! ]</div>
            <h4 className="text-white text-2xl font-bold font-mono uppercase tracking-wider">
              CONNECTION_AVAILABLE
            </h4>
            <p className="text-gray-400 max-w-md mx-auto text-sm font-mono leading-relaxed">
              &gt; OPEN FOR COLLABORATION ON NEW PROJECTS, CREATIVE IDEAS, OR OPPORTUNITIES. 
              RESPONSE TIME: 24-48 HOURS.
            </p>
            
            <div className="space-y-4 mt-8">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:kaladaranchanthirakumar@gmail.com"
                className="flex items-center justify-center gap-3 text-gray-300 hover:text-primary transition-colors font-mono text-sm border-l-2 border-transparent hover:border-primary pl-4"
              >
                <span className="text-primary font-bold">[EMAIL]</span>
                <span>kaladaranchanthirakumar@gmail.com</span>
              </motion.a>
              
              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+94761962266"
                className="flex items-center justify-center gap-3 text-gray-300 hover:text-primary transition-colors font-mono text-sm border-l-2 border-transparent hover:border-primary pl-4"
              >
                <span className="text-primary font-bold">[PHONE]</span>
                <span>+94 76 196 2266</span>
              </motion.a>
              
              <div className="flex items-center justify-center gap-3 text-gray-300 font-mono text-sm pl-4">
                <span className="text-primary font-bold">[LOCATION]</span>
                <span>COLOMBO, SRI_LANKA</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-8 pt-8 border-t border-primary/20">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://github.com/LoneWolf092701"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border-2 border-primary/50 hover:border-primary flex items-center justify-center transition-all group"
              >
                <span className="text-primary font-bold text-xs font-mono group-hover:text-white transition-colors">GH</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://linkedin.com/in/kaladaran-chanthirakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border-2 border-secondary/50 hover:border-secondary flex items-center justify-center transition-all group"
              >
                <span className="text-secondary font-bold text-xs font-mono group-hover:text-white transition-colors">LI</span>
              </motion.a>
            </div>

            {/* Status indicator */}
            <div className="mt-8 p-4 bg-black border border-primary/30 font-mono text-xs">
              <p className="text-primary">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                STATUS: ONLINE
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");