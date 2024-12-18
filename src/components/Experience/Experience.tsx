import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OSIS from "../../assets/OSIS.jpg";
import ForkomRohis from "../../assets/Rohis.jpg"
import Rohis from "../../assets/Rohisrohisan.jpg"

interface Achievement {
  year: string;
  title: string;
  description: string;
}

interface Organization {
  logo: string;
  name: string;
  role: string;
  period: string;
}

const achievements: Achievement[] = [
  {
    year: "2024",
    title: "Kampung Kunir Tourism Innovation",
    description: "First Place of International Collaboration Project",
  },
  {
    year: "2023",
    title: "Achievement (ONPA) Competition",
    description:
      "Second Place, National Olympiad for Academic Achievement (ONPA) Competition",
  },
  {
    year: "2023",
    title: "Indonesian Language Field and Gold Medalist",
    description:
      "National Olympiad for Academic Achievement (ONPA) Competition",
  },
];

const organizations: Organization[] = [
  {
    logo: OSIS,
    name: "OSIS SMK Negeri 1 Denpasar",
    role: "Head of Human Rights and Humanitarian Division",
    period: "2022 - 2023",
  },
  {
    logo: Rohis,
    name: "Rohis SMK Negeri 1 Denpasar",
    role: "Secretary",
    period: "2022 - 2024",
  },
  {
    logo: ForkomRohis,
    name: "FORKOM ROHIS",
    role: "Public Relation Member",
    period: "2023 - 2024",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      className="py-32 px-6 lg:px-8 xl:px-32 bg-gradient-to-b from-gray-900 to-purple-800 relative overflow-hidden"
      id="experience"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-50 top-16 left-20"></div>
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-50 bottom-16 right-20"></div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 uppercase text-sm tracking-widest">
          My Journey
        </span>
        <h2 className="text-5xl font-semibold text-white mt-3">
          Achievements &{" "}
          <span className="text-purple-400 font-bold">Experience</span>
        </h2>
      </motion.div>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group"
          >
            <div className="p-8 min-h-64 rounded-3xl backdrop-blur-lg border border-white/10 shadow-2xl bg-white/5 transition-all duration-300 group-hover:bg-purple-500/10">
              <h3 className="text-4xl font-bold text-purple-400 mb-4">
                {achievement.year}
              </h3>
              <h4 className="text-xl font-semibold text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Organization Section */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-medium text-center text-white mt-24 mb-10"
      >
        My Organizations Journey
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {organizations.map((org, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative rounded-3xl overflow-hidden"
          >
            {/* Background Image */}
            <div className="relative aspect-video">
              <img
                src={org.logo}
                alt={org.name}
                className="w-full h-full object-cover transition-all duration-300 brightness-75 group-hover:brightness-100"
              />
            </div>
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 transition-all group-hover:bg-black/30">
              <h4 className="text-lg font-semibold text-white mb-2">
                {org.name}
              </h4>
              <p className="text-blue-300 text-sm">{org.role}</p>
              <p className="text-gray-400 text-xs">{org.period}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-end mt-16">
        <Link
          to="/experience"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white border border-purple-500 rounded-lg hover:bg-purple-500 hover:border-purple-100 hover:text-white transition-all duration-300"
        >
          Explore Experience
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
