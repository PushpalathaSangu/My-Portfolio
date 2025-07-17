import { motion } from "framer-motion";
import Profile from "../assets/pushpa_profile.jpeg";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1a263d] to-[#1e293b] flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Text Content */}
        <motion.div 
          className="text-left flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg sm:text-xl text-teal-400 mb-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 animate-text">
              Pushpalatha Sangu
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer & Creative Technologist
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I craft exceptional digital experiences through innovative web
            solutions, combining cutting-edge technology with creative design to
            bring ideas to life.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              View My Work
            </a>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="https://github.com/PushpalathaSangu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-600 hover:bg-gray-700 rounded-full transition-all duration-300 shadow hover:shadow-lg hover:shadow-blue-500/20 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sangu-pushpalatha-913758280/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 shadow hover:shadow-lg hover:shadow-blue-500/30 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:pushpalathareddy2005@gmail.com" 
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 shadow hover:shadow-lg hover:shadow-pink-500/30 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-teal-400 group">
            <img
              src={Profile}
              alt="Pushpalatha Sangu"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-teal-400/20 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-full border-[12px] border-transparent group-hover:border-teal-400/10 transition-all duration-700"></div>
            <div className="absolute inset-0 rounded-full ring-4 ring-white/10 group-hover:ring-8 transition-all duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};