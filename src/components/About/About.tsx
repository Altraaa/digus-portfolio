import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      className="py-24 pb-36 bg-gradient-to-b from-black to-black/60"
      id="about"
    >
      <div className="container mx-auto px-6 lg:px-8 xl:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Biography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-light xl:text-5xl">
                About{" "}
                <span className="font-bold bg-gradient-to-r from-primary via-highlight to-accent bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <p className="text-gray-400 leading-relaxed xl:text-xl">
              A creative interior designer with hands-on experience in 3D
              rendering and photorealistic visualizations. Committed to
              designing functional, aesthetically pleasing spaces that enhance
              user experience and exceed client expectations. Passionate about
              creating environments that inspire and elevate daily life.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Creative", "Innovative", "Imaginative"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Experience & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "2+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "20+", label: "Technical Skills" },
                { number: "12+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white">
                Recent Experience
              </h3>
              <div className="space-y-4">
                {[
                  {
                    year: "2023 - Present",
                    role: "Freelance Interior Designer",
                    company: "Own Company",
                  },
                ].map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative pl-8 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-highlight before:rounded-full"
                  >
                    <span className="text-sm text-gray-400">{exp.year}</span>
                    <h4 className="text-white font-medium mt-1">{exp.role}</h4>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* See More Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-8 bg-gradient-to-r from-primary/20 to-accent/20 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
            >
              See More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
