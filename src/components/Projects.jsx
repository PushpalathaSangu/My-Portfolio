import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import watImage from "../assets/image1.jpg"; // Import your images like this



const projects = [
  {
    title: "WAT",
    description: "A web platform for conducting Weekly Assessment Tests, allowing users to upload documents and receive intelligent, context-aware feedback using AI.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    github: "https://github.com/PushpalathaSangu/WAT-MiniProject",
    live: "#",
    image: watImage
  },
  {
    title: "SpeakShip",
    description: "SpeakShip is an on-demand delivery system that manages package deliveries from request to confirmation.It supports real-time tracking, secure logins, and smart price estimation.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini API", "Socket.io"],
    github: "https://github.com/PushpalathaSangu/SpeakShip",
    live: "https://speak-ship.vercel.app/"
  
  },
  {
    title: "LinkedIn Clone",
    description: "A full-featured LinkedIn clone with user authentication, profile management, networking (connections), and post functionality.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/PushpalathaSangu/LinkedinClone",
    live: "#"
  },
  {
    title: "RRTS",
    description: "Road Repair and Tracking System for city municipalities to manage complaints, track repair status, and optimize resource allocation.",
    technologies: ["JSP", "HTML", "CSS", "JDBC", "MySQL", "Servlets"],
    github: "https://github.com/PushpalathaSangu/RRTS",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase my projects, skills, and achievements in web development and software engineering.",
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/PushpalathaSangu/My-Portfolio",
    live: "https://my-portfolio-alpha-one-99.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-16 bg-gradient-to-br from-[#0f172a] to-[#1a263d]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of my technical projects and implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-700 hover:border-teal-400/30"
            >
              {/* Image or fallback */}
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      {project.title}
                    </h3>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
  {/* GitHub Button */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-blue-800 hover:to-teal-800 text-white font-medium py-2 px-4 rounded-full text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
  >
    <FaGithub className="text-lg" />
    <span>Github</span>
  </a>

  {/* Live Demo Button */}
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400 text-white font-medium py-2 px-4 rounded-full text-sm shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
  >
    <FaExternalLinkAlt className="text-lg" />
    <span>Live Demo</span>
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}