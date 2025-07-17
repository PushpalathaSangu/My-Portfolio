import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading with Gradient Text */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-8 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            About Me
          </span>
        </motion.h2>

        {/* Section Subtext with Animation */}
        <motion.p
          className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Passionate about turning ideas into real-world scalable applications. I thrive in fast-paced environments where I can learn, collaborate, and innovate.
        </motion.p>

        {/* Main Content Card with Glass Morphism Effect */}
        <motion.div
          className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-lg space-y-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-500/20 rounded-full filter blur-3xl"></div>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hi, I'm <span className="font-semibold text-white">Pushpalatha</span>, a{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Full Stack Developer
            </span>{" "}
            with a focus on creating beautiful and performant web applications using modern technologies.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm currently pursuing a{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              B.Tech in Computer Science
            </span>{" "}
            at RGUKT. I'm constantly exploring new technologies and enjoy tackling challenges that involve frontend architecture, backend APIs, and full-stack deployment.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            My core skills include{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              React.js, Node.js, JavaScript, MongoDB, Java, and Tailwind CSS
            </span>
            . I love collaborating with others and delivering impactful software.
          </motion.p>
        </motion.div>

        {/* Animated Call to Action Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}