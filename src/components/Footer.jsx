import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      url: "https://github.com/PushpalathaSangu",
      color: "from-blue-700 to-teal-700",
      hover: "hover:from-blue-500 hover:to-teal-500"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sangu-pushpalatha-913758280/",
      color: "from-blue-700 to-teal-700",
      hover: "hover:from-blue-500 hover:to-teal-500"
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      name: "Twitter",
      url: "https://twitter.com",
      color: "from-blue-700 to-teal-700",
      hover: "hover:from-blue-500 hover:to-teal-500"
    },
    {
      icon: <FaYoutube className="text-2xl" />,
      name: "YouTube",
      url: "https://youtube.com",
      color: "from-blue-700 to-teal-700",
      hover: "hover:from-blue-500 hover:to-teal-500"
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      name: "Instagram",
      url: "https://instagram.com",
      color: "from-blue-700 to-teal-700",
      hover: "hover:from-blue-500 hover:to-teal-500"
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      name: "Facebook",
      url: "https://facebook.com",
      color: "from-blue-700 to-teal-700",
      hover: "hover:from-blue-500 hover:to-teal-500"
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Connect With Me Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-6">
            Connect With Me
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${link.color} ${link.hover} text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-2`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact and Newsletter Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 p-6 rounded-xl border border-blue-400/20">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
              Contact Me
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1 group">
                <FaEnvelope className="text-teal-400 mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">pushpalathareddy2005@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1 group">
                <FaPhone className="text-teal-400 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">+91 7093763599</span>
              </div>
              <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1 group">
                <FaMapMarkerAlt className="text-teal-400 mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 p-6 rounded-xl border border-blue-400/20">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for updates on projects and tech insights.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 focus:scale-[1.02] backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-500 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-400/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left transition-all duration-300 hover:text-teal-400">
            <span className="font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Pushpalatha Sangu
            </span> – Full Stack Developer & Tech Enthusiast
          </div>
          
          <div className="flex gap-4 text-gray-400">
            <a
              href="https://github.com/PushpalathaSangu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sangu-pushpalatha-913758280/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          <a
            href="mailto:pushpalathareddy2005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope className="text-xl" />
          </a>
          </div>
          
          <div className="text-gray-500 text-sm text-center md:text-right transition-all duration-300 hover:text-teal-400">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}