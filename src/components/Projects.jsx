import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Dev Tinder",
    description: "A platform where developers can showcase their projects and connect with others interested in collaboration.",
    technologies: "React, Tailwind CSS, Express.js, Node.js, MongoDB",
    github: "https://github.com/rehan-rh",
  },
  {
    name: "House of Food",
    description: "A Swiggy-like food ordering app with seamless navigation and a user-friendly interface.",
    technologies: "React, HTML, Tailwind CSS",
    github: "https://github.com/rehan-rh/House-of-Food",
    live: "https://rehans-house-of-food.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-10 sm:py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 sm:mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg transition transform hover:scale-105 flex flex-col h-full"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-300">
                {project.name}
              </h3>
              <p className="text-gray-300 mt-2 text-base sm:text-lg">
                {project.description}
              </p>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                <strong>Tech Stack:</strong> {project.technologies}
              </p>
              <div className="mt-4 flex space-x-6 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400"
                >
                  <FaGithub className="text-2xl" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
