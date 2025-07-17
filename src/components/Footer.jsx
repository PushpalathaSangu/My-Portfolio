import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Information</h2>
          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" />
              <span>pushpalathareddy2005@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-cyan-400" />
              <span>+91 7093763599</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Andhra Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Right: Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Stay Updated</h2>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to my newsletter for the latest updates on projects, blog posts, and tech insights.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-green-400 hover:to-blue-500 text-white px-6 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <span className="text-cyan-400 font-medium">Pushpalatha Sangu</span> – Full Stack Developer & Tech Enthusiast
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/PushpalathaSangu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sangu-pushpalatha-913758280/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="mt-4 sm:mt-0 text-center sm:text-right w-full sm:w-auto">
          © {new Date().getFullYear()} Pushpalatha Sangu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
