import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BTech, Computer Science",
    institution: "Rajiv Gandhi University of Knowledge Technologies",
    year: "2022 – 2026",
    cgpa: "CGPA: 8.574",
  },
  {
    degree: "PUC (Pre-University Course)",
    institution: "Rajiv Gandhi University of Knowledge Technologies",
    year: "2020 – 2022",
    cgpa: "CGPA: 9.61",
  },
  {
    degree: "10th Grade",
    institution: "A P Residential School, Patthikonda",
    year: "2019 – 2020",
    cgpa: "CGPA: 9.8",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-300">
                {edu.degree}
              </h3>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-gray-300">{edu.year}</p>
              <p className="text-blue-300 font-semibold">{edu.cgpa}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
