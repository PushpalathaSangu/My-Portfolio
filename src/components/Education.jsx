import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Rajiv Gandhi University of Knowledge Technologies, R.K. Valley",
    year: "2022 – 2026",
    cgpa: "CGPA: 9.5",
  },
  {
    degree: "PUC (Pre-University Course)",
    institution: "Rajiv Gandhi University of Knowledge Technologies, R.K. Valley",
    year: "2020 – 2022",
    cgpa: "CGPA: 9.96",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Z.P.H. School, Adhurupalli, Chejerla Mandal, Nellore District",
    year: "2019 – 2020",
    cgpa: "CGPA: 10.0",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 text-center mb-12">
          Education
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-400/30 transition-shadow duration-300 hover:-translate-y-2 transform text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-400 transition">
                {edu.degree}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{edu.institution}</p>
              <p className="text-gray-300 text-sm mt-1">{edu.year}</p>
              <p className="text-blue-300 font-semibold mt-2 group-hover:text-blue-200 transition">
                {edu.cgpa}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
