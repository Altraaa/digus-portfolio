import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  year: string;
  title: string;
  description: string;
  stats: string;
}

interface Organization {
  logo: string;
  name: string;
  role: string;
  period: string;
}

const achievements: Achievement[] = [
  {
    year: '2023',
    title: 'Best Architecture Design',
    description: 'Winner of International Design Excellence Awards',
    stats: '150+ Projects'
  },
  {
    year: '2022',
    title: 'Sustainable Building',
    description: 'Green Building Council Certificate',
    stats: '45+ Countries'
  },
  {
    year: '2021',
    title: 'Innovation Award',
    description: 'Smart Building Technology Implementation',
    stats: '200+ Clients'
  }
];

const organizations: Organization[] = [
  {
    logo: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    name: "Royal Institute of Architects",
    role: "Certified Member",
    period: "2020 - Present"
  },
  {
    logo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    name: "World Green Building Council",
    role: "Gold Partner",
    period: "2019 - Present"
  },
  {
    logo: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    name: "International Design Association",
    role: "Executive Member",
    period: "2018 - Present"
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black/30 to-primary" id="experience">
      <div className="max-w-7xl mx-auto">
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-highlight text-xl uppercase tracking-wider mb-4 block">Our Journey</span>
          <h2 className="text-5xl font-light mb-6">
            Achievements & <span className="font-bold text-white">Experience</span>
          </h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-highlight/50 transition-all duration-300">
                <div className="text-highlight text-5xl font-bold mb-4">{achievement.year}</div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300 mb-6">{achievement.description}</p>
                <div className="text-2xl font-bold text-white">{achievement.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Organizations Section */}
        <div className="mt-32">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-light text-center mb-16"
          >
            Organizations We're Part Of
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {organizations.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="aspect-video">
                    <img 
                      src={org.logo} 
                      alt={org.name}
                      className="w-full h-full object-cover filter brightness-50 group-hover:brightness-75 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-xl font-bold text-white mb-2">{org.name}</h4>
                    <p className="text-highlight mb-1">{org.role}</p>
                    <p className="text-gray-300 text-sm">{org.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-24"
        >
          <button className="px-6 py-3 bg-highlight rounded-full hover:bg-white hover:text-black transition-all duration-300">
            More Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 