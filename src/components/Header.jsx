import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Trophy,
  BriefcaseBusiness,
  Download,
  Eye
} from "lucide-react";
import resumePDF from "../assets/Pushpalatha_Sangu.pdf";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionIcons = {
    home: <Home className="w-5 h-5" />,
    about: <User className="w-5 h-5" />,
    skills: <Code className="w-5 h-5" />,
    projects: <Briefcase className="w-5 h-5" />,
    achievements: <Trophy className="w-5 h-5" />,
    experience: <BriefcaseBusiness className="w-5 h-5" />
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Add extra offset to account for header height
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionIcons);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeAction = (action) => {
    if (action === "view") {
      window.open(resumePDF, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = resumePDF;
      link.download = "Pushpalatha_Sangu_Resume.pdf";
      link.click();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a]/95 text-white backdrop-blur-md shadow-md">
      {/* Top Scroll Progress Line */}
      <div className="h-1 w-full bg-gray-700 relative">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 to-teal-400"
          initial={{ width: 0 }}
          animate={{
            width: `${(Object.keys(sectionIcons).indexOf(activeSection) + 1) * (100 / Object.keys(sectionIcons).length)}%`,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Nav */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold">
          <button
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 transition duration-500"
          >
            Portfolio
          </button>
        </div>

        {/* Right Navigation & Resume */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {Object.entries(sectionIcons).map(([section, icon]) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-2 py-1 flex items-center gap-2 capitalize transition-colors duration-300 hover:text-cyan-400 ${activeSection === section ? "text-cyan-400 font-semibold" : "text-gray-300"}`}
              >
                {icon}
                {section}
                {/* Underline for active */}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-green-400 rounded-full" />
                )}
              </button>
            ))}

            {/* Resume Dropdown */}
            <div className="relative group ml-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 to-teal-400 text-white hover:from-blue-500 hover:to-teal-500 transition-all">
                <Download className="w-4 h-4" />
                Resume
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-[#0f172a] text-white border border-gray-700 rounded-md shadow-lg hidden group-hover:block z-50">
                <button
                  onClick={() => handleResumeAction("view")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" /> View in Browser
                </button>
                <button
                  onClick={() => handleResumeAction("download")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden py-4 px-6 bg-[#0f172a]"
        >
          <ul className="space-y-6"> {/* Increased gap between items */}
            {Object.entries(sectionIcons).map(([section, icon]) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`w-full flex items-center gap-3 capitalize transition-colors duration-300 ${activeSection === section ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"}`}
                >
                  {icon}
                  {section}
                </button>
              </li>
            ))}
            {/* Resume */}
            <li className="flex gap-4 pt-6"> {/* Increased top padding */}
              <button
                onClick={() => handleResumeAction("view")}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 transition-all"
              >
                <Eye className="w-5 h-5" />
                View
              </button>
              <button
                onClick={() => handleResumeAction("download")}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 transition-all"
              >
                <Download className="w-5 h-5" />
                Download
              </button>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}