import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Graphic from "../../assets/Graphic.png"
import Render from "../../assets/Render.png"
import Resident from "../../assets/Resident.png"
import School from "../../assets/School.png"

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  route: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Graphics Design",
    category: "Comercial",
    image:
      Graphic,
    description: "Desain villa modern dengan konsep minimalis",
    route: "/project/graphics"
  },
  {
    id: 2,
    title: "Rendering Project",
    category: "Job",
    image:
      Render,
    description: "Gedung perkantoran dengan teknologi smart building",
    route: "/project/rendering"
  },
  {
    id: 3,
    title: "Residential Project",
    category: "Residential",
    image:
      Resident,
    description: "Rumah ramah lingkungan dengan sistem energi terbarukan",
    route: "/project/residential"
  },
  {
    id: 4,
    title: "School Project",
    category: "School",
    image:
      School,
    description: "Apartemen mewah dengan sentuhan modern minimalis",
    route: "/project/school"
  },
  {
    id: 5,
    title: "University Project",
    category: "University",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Studio kreatif dengan konsep open space",
    route: "/university"
  }
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState(projects[0].image);

  const nextProject = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % projects.length;
      setBgImage(projects[newIndex].image);
      return newIndex;
    });
  };

  const prevProject = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + projects.length) % projects.length;
      setBgImage(projects[newIndex].image);
      return newIndex;
    });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedId(selectedId === project.id ? null : project.id);
    setTimeout(() => {
      setBgImage(project.image);
    }, 200);
  };

  return (
    <section className="min-h-screen relative pb-20" id="projects">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={bgImage}
            src={bgImage}
            alt="background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-full h-full object-cover filter brightness-[0.3] blur-md scale-110"
          />
        </AnimatePresence>
      </motion.div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10" />

      {/* Content */}
      <div className="relative z-20 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4">
              My{" "}
              <span className="font-bold bg-gradient-to-r from-primary via-highlight to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-400/80">
              Explore our diverse portfolio, showcasing exceptional designs and
              innovative solutions.
            </p>
          </motion.div>

          {/* Mobile & Tablet View - Slideshow */}
          <div className="lg:hidden relative">
            <motion.div
              className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 p-6 md:p-8 flex flex-col justify-end">
                    <div className="mb-16 md:mb-20">
                      <motion.span
                        className="inline-block text-sm md:text-base text-highlight mb-2 md:mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {projects[currentIndex].category}
                      </motion.span>
                      <motion.h3
                        className="text-2xl md:text-4xl font-bold mb-3 md:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {projects[currentIndex].title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-300 text-base md:text-lg max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {projects[currentIndex].description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-3">
                <button
                  onClick={prevProject}
                  className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextProject}
                  className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-8 left-6 md:left-8 flex gap-2">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-highlight" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Desktop View */}
          <motion.div
            className="hidden lg:flex justify-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto overflow-x-auto lg:overflow-x-visible py-4">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={item}
                  className="relative rounded-2xl overflow-hidden cursor-pointer backdrop-blur-sm border border-white/5"
                  style={{
                    boxShadow: "0 0 30px rgba(0,0,0,0.3)",
                  }}
                  animate={{
                    width:
                      selectedId === project.id
                        ? "clamp(300px, 80vw, 400px)"
                        : "clamp(80px, 20vw, 100px)",
                    height: "clamp(300px, 60vh, 400px)",
                    flex: selectedId === project.id ? "1 0 auto" : "0 0 auto",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  onClick={() => handleProjectClick(project)}
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
                          <div className="flex flex-col p-4 md:p-8 w-full justify-center h-full">
                            <motion.h3
                              className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p
                              className="text-sm md:text-base text-gray-300/90"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                            >
                              {project.description}
                            </motion.p>
                            <motion.span
                              className="inline-block px-3 py-1 md:px-4 md:py-1.5 text-light border border-secondary bg-primary/20 text-xs md:text-sm rounded-full mt-3 md:mt-4 w-fit"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.3 }}
                            >
                              {project.category}
                            </motion.span>
                            <div className={`mt-4 transition-all duration-300 ${
                              selectedId === project.id 
                                ? 'opacity-100' 
                                : 'opacity-0 group-hover:opacity-100'
                            }`}>
                              <button className="bg-highlight/20 hover:bg-highlight/30 text-highlight px-4 py-2 rounded-lg text-sm transition-colors duration-300">
                                <Link to={project.route}>See Project</Link>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed"
                          className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <h3 className="text-base md:text-xl font-bold text-white whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
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
      </div>
    </section>
  );
};

export default Projects;
