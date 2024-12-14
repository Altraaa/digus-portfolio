import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Desain villa modern dengan konsep minimalis",
  },
  {
    id: 2,
    title: "Office Tower",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Gedung perkantoran dengan teknologi smart building",
  },
  {
    id: 3,
    title: "Eco House",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Rumah ramah lingkungan dengan sistem energi terbarukan",
  },
  {
    id: 4,
    title: "Luxury Apartment",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Apartemen mewah dengan sentuhan modern minimalis",
  },
  {
    id: 5,
    title: "Creative Studio",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Studio kreatif dengan konsep open space",
  },
  {
    id: 6,
    title: "Urban Loft",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Loft modern dengan sentuhan industrial",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { 
    opacity: 0,
    x: 100,
    scale: 0.8
  },
  show: { 
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1);

  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-black/60 to-black/30 overflow-hidden"
      id="projects"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-4">
            Our{" "}
            <span className="font-bold bg-gradient-to-r from-primary via-highlight to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400/80">
            Explore our diverse portfolio, showcasing exceptional designs and
            innovative solutions.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <div className="flex gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="relative rounded-2xl overflow-hidden cursor-pointer backdrop-blur-sm border border-white/5 h-full"
                style={{
                  boxShadow: "0 0 30px rgba(0,0,0,0.3)",
                }}
                animate={{
                  width: selectedId === project.id ? "400px" : "100px",
                  height: "400px",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                onClick={() =>
                  setSelectedId(selectedId === project.id ? null : project.id)
                }
              >
                <motion.div className="absolute inset-0 w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <AnimatePresence mode="wait">
                    {selectedId === project.id ? (
                      <motion.div
                        key="expanded"
                        className="absolute inset-0 bg-black/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col p-8 w-full justify-center h-full">
                          <motion.h3
                            className="text-2xl font-bold mb-3 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            className="text-gray-300/90 text-base"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {project.description}
                          </motion.p>
                          <motion.span
                            className="inline-block px-4 py-1.5 text-light border border-secondary bg-primary/20 text-sm rounded-full mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.category}
                          </motion.span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold text-white whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
                          {project.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
