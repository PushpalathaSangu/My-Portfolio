import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaJava, FaAws 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiPostman, SiTypescript, SiNextdotjs, 
  SiJavascript, SiCplusplus, SiPython, SiMongodb, SiExpress 
} from "react-icons/si";
import { 
  Puzzle, Users, MessageSquare, Brain, 
  RefreshCw, Shield
} from "lucide-react";

export default function Skills() {
  // Categorized technical skills
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "C", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Redux", icon: <FaReact className="text-purple-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-100" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaHtml5 className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
        { name: "VS Code", icon: <SiPostman className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      ]
    }
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: <Puzzle className="text-blue-400" /> },
    { name: "Team Collaboration", icon: <Users className="text-green-400" /> },
    { name: "Communication", icon: <MessageSquare className="text-purple-400" /> },
    { name: "Critical Thinking", icon: <Brain className="text-yellow-400" /> },
    { name: "Adaptability", icon: <RefreshCw className="text-teal-400" /> },
    { name: "Leadership", icon: <Shield className="text-red-400" /> },
  ];

  // Flattened skills for train animation
  const allTechnicalSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The tools and abilities I use to bring ideas to life
          </p>
        </motion.div>

        {/* Categorized Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-300 mb-8 text-center">
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg"
              >
                <h4 className="text-xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                  {category.name}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-3 rounded-lg bg-white/5 hover:bg-white/30 transition-all"
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <p className="text-gray-300 text-center text-sm font-medium">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Skills Train Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 relative h-[200px]"
        >
          <h3 className="text-2xl font-semibold text-gray-300 mb-3 text-center">
            All Technologies
          </h3>
          
          {/* Train Track */}
          {/* <div className="absolute left-0 right-0 top-1/2 h-1 bg-teal-100 rounded-full"></div> */}
          
          {/* Moving Train of Skills */}
          <motion.div
            className="absolute top-1/2 left-0 flex items-center gap-4"
            animate={{ 
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...allTechnicalSkills, ...allTechnicalSkills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -10 }}
                className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 min-w-[100px]"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-gray-300 text-center text-xs sm:text-sm font-medium">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-300 mb-8 text-center">
            Professional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-gray-300 px-4 py-2 rounded-full border border-white/10 shadow-sm text-sm sm:text-base font-medium hover:from-blue-500/30 hover:to-teal-500/30 transition-all duration-300"
              >
                <div className="text-lg">
                  {skill.icon}
                </div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/4 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl -z-1"></div>
        <div className="absolute right-0 bottom-1/4 w-40 h-40 bg-teal-500/10 rounded-full filter blur-3xl -z-1"></div>
      </div>
    </section>
  );
}