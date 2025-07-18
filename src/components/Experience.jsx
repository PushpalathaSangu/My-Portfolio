import { motion } from "framer-motion";
import { Code, Cpu, BookOpen, Users, Mic2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB. Led team of 3 developers in Agile environment.",
      icon: <Code className="text-blue-400" />,
      duration: "2022-Present",
      highlights: [
        "Reduced API response time by 40%",
        "Implemented CI/CD pipeline",
        "Mentored junior developers"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions LLC",
      description: "Built responsive UIs with React and TypeScript. Collaborated with design team to implement pixel-perfect interfaces.",
      icon: <Cpu className="text-teal-400" />,
      duration: "2020-2022",
      highlights: [
        "Improved page load speed by 30%",
        "Introduced component library",
        "Increased user engagement by 25%"
      ]
    },
    // Current roles added here
    {
      role: "Technical Intern",
      company: "LearnSquare",
      description: "Currently interning as a full-stack developer, contributing to educational technology solutions and platform development.",
      icon: <BookOpen className="text-purple-400" />,
      duration: "2023-Present",
      highlights: [
        "Developing interactive learning modules",
        "Implementing RESTful APIs",
        "Collaborating with cross-functional teams"
      ]
    },
    {
      role: "HHO Executive Member",
      company: "Student Organization",
      description: "Active member of the student executive committee, organizing technical and non-technical events.",
      icon: <Users className="text-amber-400" />,
      duration: "2022-Present",
      highlights: [
        "Organized hackathons with 100+ participants",
        "Managed event logistics",
        "Mentored junior members"
      ]
    },
    {
      role: "Class Representative",
      company: "University",
      description: "Served as liaison between faculty and students, coordinating academic activities and feedback sessions.",
      icon: <Mic2 className="text-green-400" />,
      duration: "2021-2023",
      highlights: [
        "Improved student-faculty communication",
        "Organized study sessions",
        "Resolved academic concerns"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              Professional Journey
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My work experience and leadership roles
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-teal-400/30 -z-1"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-16"
            >
              {/* Timeline dot with gradient border */}
              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center 
                ${index <= 2 ? 'bg-gradient-to-r from-blue-400 to-teal-400' : 
                   index === 3 ? 'bg-gradient-to-r from-amber-400 to-yellow-400' :
                   'bg-gradient-to-r from-green-400 to-emerald-400'}`}>
                <div className="w-4 h-4 rounded-full bg-gray-900"></div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full 
                    ${index <= 2 ? 'bg-gradient-to-r from-blue-400/20 to-teal-400/20' : 
                       index === 3 ? 'bg-gradient-to-r from-amber-400/20 to-yellow-400/20' :
                       'bg-gradient-to-r from-green-400/20 to-emerald-400/20'}`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {exp.company}
                        </p>
                      </div>
                      <span className={`text-sm px-3 py-1 rounded-full 
                        ${index <= 2 ? 'bg-blue-900/30 text-blue-300' : 
                           index === 3 ? 'bg-amber-900/30 text-amber-300' :
                           'bg-green-900/30 text-green-300'}`}>
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-3">{exp.description}</p>
                    
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                          <span className={`${index <= 2 ? 'text-teal-400' : 
                                         index === 3 ? 'text-amber-400' :
                                         'text-green-400'}`}>▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}