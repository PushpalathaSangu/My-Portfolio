import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, Rocket } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Hackathon Winner",
      description: "Won 1st place in national coding competition with innovative web solution",
      icon: <Trophy className="text-yellow-400" />,
      date: "2023"
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to major React libraries with 1000+ downloads",
      icon: <Award className="text-blue-400" />,
      date: "2022-Present"
    },
    {
      title: "Tech Conference Speaker",
      description: "Presented on modern web development at DevConf 2023",
      icon: <Star className="text-teal-400" />,
      date: "2023"
    },
    {
      title: "Student of the Year",
      description: "Recognized for academic excellence in Computer Science",
      icon: <Medal className="text-purple-400" />,
      date: "2022"
    },
    {
      title: "Fastest Project Completion",
      description: "Built full-stack application in 48 hours during coding sprint",
      icon: <Rocket className="text-red-400" />,
      date: "2021"
    }
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
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
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Milestones and recognitions in my development journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-400/20 to-teal-400/20">
                  {achievement.icon}
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-2">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}