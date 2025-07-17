import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import watImage from "../assets/image1.jpg"; // Import your images like this
import speakshipImage from "../assets/image1.jpg";
import linkedinImage from "../assets/image1.jpg";

const projects = [
  {
    title: "WAT",
    description: "An Intelligence System that processes user uploaded documents and contextually responds to user queries.",
    technologies: ["Next.js", "FastAPI", "PyPDF", "AWS S3", "Langchain+Gemini"],
    github: "#",
    live: "#",
    image: watImage // Use the imported image directly
  },
  {
    title: "SpeakShip",
    description: "A system that filters out background noise from audio, improving audio clarity by up to 35% based on SNR and PESO metrics.",
    technologies: ["PyTorch", "Librosa", "CNN", "Scikit-learn"],
    github: "#",
    live: "#",
    image: speakshipImage
  },
  {
    title: "LinkedIn Clone",
    description: "A complete LinkedIn clone with user profiles, connections, and post functionality.",
    technologies: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    github: "#",
    live: "#"
  
  },
  {
    title: "RRTS",
    description: "Railway reservation and tracking system with real-time updates.",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
    github: "#",
    live: "#"
    // No image specified - will use fallback
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#"
    // No image specified - will use fallback
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
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
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